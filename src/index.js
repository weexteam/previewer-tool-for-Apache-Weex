const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const builder = require('weex-builder');

const {
  logger,
  helper,
  server
} = require('./utils');

const WEEX_TMP_DIR = '.weex_tmp';

const defaultParams = {
  entry: '',
  folder: '',
  output: '',
  fileExt: ['vue', 'we'],
  temDir: path.join(os.homedir(), WEEX_TMP_DIR),
  port: '8081',
  host: '127.0.0.1',
  wsport: '8082',
  open: true,
  options: {}
};
const Previewer = {
  init: function (args, port, options) {
    if (!helper.checkEntry(args.entry)) {
      return logger.error('Not a ".vue" or ".we" file');
    }
    this.params = Object.assign({}, defaultParams, args);
    this.params.options = options;
    this.params.port = port;
    this.params.wsport = port + 1;
    this.params.source = this.params.folder || this.params.entry;
    if (this.params.folder) {
      this.file = path.relative(this.params.source, this.params.entry);
    }
    else {
      this.file = this.params.entry;
    }
    this.fileType = helper.getFileType(this.file);
    this.module = this.file.replace(path.extname(this.file), '');
    this.fileDir = process.cwd();
    return this.fileFlow();
  },
  fileFlow () {
    logger.verbose(`init template diretory to ${this.params.temDir}`);
    this.initTemDir();
    logger.verbose('building JS file');
    this.buildJSFile(() => {
      logger.verbose('start server');
      this.startServer();
    });
  },
  // build temporary directory for web preview
  initTemDir () {
    if (!fs.existsSync(this.params.temDir)) {
      this.params.temDir = WEEX_TMP_DIR;
      fs.mkdirsSync(WEEX_TMP_DIR);
      fs.copySync(`${__dirname}/../vue-template/template/`, WEEX_TMP_DIR);
    }
    // replace old file
    fs.copySync(`${__dirname}/../vue-template/template/weex.html`, `${this.params.temDir}/weex.html`);
    const vueRegArr = [{
      rule: /{{\$script}}/,
      scripts: `
<script src="./assets/vue.runtime.js"></script>
<script src="./assets/weex-vue-render/index.js"></script>
    `
    }];
    const weRegArr = [{
      rule: /{{\$script}}/,
      scripts: `
<script src="./assets/weex-html5/weex.js"></script>
    `
    }];
    let regarr = vueRegArr;
    if (this.fileType === 'we') {
      regarr = weRegArr;
    }
    else {
      this.params.webSource = path.join(this.params.temDir, 'temp');
      if (fs.existsSync(this.params.webSource)) {
        fs.removeSync(this.params.webSource);
      }
      helper.createVueSrc(this.params.source, this.params.webSource);
    }
    helper.replace(path.join(`${this.params.temDir}/`, 'weex.html'), regarr);
  },
  // only for vue previewing on web
  createVueAppEntry () {
    helper.replace(`${this.params.temDir}/app.js`, [{
      rule: '{{$module}}',
      scripts: path.join(process.cwd(), this.params.source)
    }], true);
    this.params.entry = this.params.temDir + '/app.js';
  },
  buildJSFile (callback) {
    const buildOpt = {
      watch: true,
      ext: /\.js$/.test(this.params.entry) ? 'js' : this.fileType,
      ...this.params.options
    };
    let source = this.params.entry;
    const dest = path.join(this.params.temDir, 'dist');
    let webDest;
    let vueSource = this.params.source;
    if (this.params.folder) {
      source = this.params.folder;
      vueSource = this.params.folder;
      buildOpt.entry = this.params.entry;
    }
    else {
      webDest = path.join(this.params.temDir, 'dist', this.params.entry.replace(path.basename(this.params.entry), ''));
    }
    if (this.fileType === 'vue') {
      if (buildOpt.entry) {
        buildOpt.entry = this.params.entry;
      }
      else {
        source = this.params.entry;
      }
      // for weex
      this.build(vueSource, dest, buildOpt, () => {
        logger.info('weex JS bundle saved at ' + path.resolve(this.params.temDir));
        // for web
        this.build(this.params.webSource, webDest || dest, {
          web: true,
          ext: 'js'
        }, callback);
      }, () => {
        // for web
        this.build(this.params.webSource, webDest || dest, {
          web: true,
          ext: 'js'
        }, callback);
      });
    }
    else {
      this.build(source, dest, buildOpt, callback);
    }
  },
  build (src, dest, opts, buildcallback, watchCallback) {
    if (!opts.web && path.extname(src) === '.vue') {
      dest += '/[name].weex.js';
    }
    else if (!opts.web && path.extname(src) !== '.vue') {
      opts['filename'] = '[name].weex.js';
    }
    builder.build(src, dest,
      {
        ...opts,
        ...this.params.options
      },
      (err, fileStream) => {
        if (!err) {
          if (this.wsSuccess) {
            if (typeof watchCallback !== 'undefined') {
              watchCallback();
            }
            logger.info(fileStream);
            server.sendSocketMessage();
          }
          else {
            buildcallback();
          }
        }
        else {
          logger.error(err);
        }
      });
  },
  startServer () {
    const self = this;
    server.run({
      dir: this.params.temDir,
      module: this.module,
      fileType: this.fileType,
      port: this.params.port,
      wsport: this.params.wsport,
      open: this.params.open,
      wsSuccessCallback () {
        self.wsSuccess = true;
      }
    });
  }
};
module.exports = function (args, port, options) {
  Previewer.init(args, port, options);
};
