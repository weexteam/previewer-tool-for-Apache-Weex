/** weex-previewer
* a tool help user to preview their weex files
* version 0.9.1
* example : preview(args);
* args Object
* entry: input file
* output: output file
* port: speccify the web server port (0-65336)
* host: speccify the web server host
* qr: show qrcode in  command line tool
* smallqr: smaller qr code in command line tool
* notopen: open brower auto
**/

const fs = require('fs');
const fse = require('fs-extra');
const npmlog = require('npmlog');
const builder = require('weex-builder');
const path = require('path');
const os = require('os');
const helper = require('./libs/helper');
const server = require('./libs/server');

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
  open: true
};

const Previewer = {
  init: function (args) {
    // old weex-previewer compatible
    if (args['_'] && args['_'].length > 0 && !args.entry) {
      args.entry = args['_'][0];
    }
    if (!helper.checkEntry(args.entry)) {
      return npmlog.error('Not a ".vue" or ".we" file');
    }
    if (args.port <= 0 || args.port >= 65336) {
      this.params.port = 8081;
    }
    this.params = Object.assign({}, defaultParams, args);
    this.params.source = this.params.entry;
    this.file = path.basename(this.params.entry);
    this.fileType = helper.getFileType(this.file);
    this.module = this.file.replace(/\..+/, '');
    if (this.fileType === 'vue') {
      this.module = 'app';
    }
    this.fileDir = process.cwd();
    return this.fileFlow();
  },
  fileFlow() {
    this.initTemDir();
    this.buildJSFile(() => {
      this.startServer();
    });
  },
  // build temp directory for web preview
  initTemDir() {
    if (!fs.existsSync(this.params.temDir)) {
      this.params.temDir = WEEX_TMP_DIR;
      fse.mkdirsSync(WEEX_TMP_DIR);
      fse.copySync(`${__dirname}/../vue-template/template/`, WEEX_TMP_DIR);
    }
    // replace old file
    fse.copySync(`${__dirname}/../vue-template/template/weex.html`, `${this.params.temDir}/weex.html`);
    const vueRegArr = [
      {
        rule: /{{\$script}}/,
        scripts: `
<script src="./assets/phantom-limb.js"></script>
<script src="./assets/vue.runtime.js"></script>
<script src="./assets/weex-vue-render/index.js"></script>
    `
      },
      {
        rule: /{{\$script2}}/,
        scripts: '<script src="' + this.module + '.js"></script>',
      }
    ];
    const weRegArr = [
      {
        rule: /{{\$script}}/,
        scripts: `
<script src="./assets/weex-html5/weex.js"></script>
<script src="./assets/weex-init.js"></script>
    ` },
      {
        rule: /{{\$script2}}/,
        scripts: '',
      }
    ];
    let regarr = vueRegArr;
    if (this.fileType === 'we') {
      regarr = weRegArr;
    }
    helper.replace(path.join(`${this.params.temDir}/`, 'weex.html'), regarr);
  },
  // only for vue preview on web
  createVueAppEntry() {
    fse.copySync(`${__dirname}/../vue-template/template/app.js`, `${this.params.temDir}/app.js`);
    helper.replace(`${this.params.temDir}/app.js`, [
      {
        rule: '{{$module}}',
        scripts: path.join(process.cwd(), this.params.source),
      }
    ], true);
    this.params.entry = this.params.temDir + '/app.js';
  },
  buildJSFile(callback) {
    const self = this;
    if (this.fileType === 'vue') {
      this.createVueAppEntry();
      builder.build(this.params.source, path.join(this.params.temDir, this.module + '.weex.js'), {
        web: false,
        ext: /\.js$/.test(this.params.entry) ? 'js' : this.fileType,
      }).then((arr) => {
        if (arr.length > 0) {
          npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir));
        }
      }).catch((err) => {
        npmlog.error(err);
      });
    }
    builder.build(self.params.entry, self.params.temDir, {
      web: true,
      ext: /\.js$/.test(self.params.entry) ? 'js' : this.fileType,
    }).then((arr) => {
      if (arr.length > 0) {
        callback();
      }
    }).catch((err) => {
      npmlog.error(err);
    });
  },
  startServer() {
    const self = this;
    server.run({
      dir: this.params.temDir,
      module: this.module,
      fileType: this.fileType,
      port: this.params.port,
      wsport: this.params.wsport,
      wsSuccessCallback() {
        fs.watch(self.params.source, () => {
          npmlog.info('file refresh');
          self.buildJSFile(() => {
            server.sendSocketMessage();
          });
        });
      }
    });
  }
};

module.exports = function (args) {
  Previewer.init(args);
};
