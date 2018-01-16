'use strict';

/** weex-previewer
 * a tool help user to preview their weex files
 * version 0.9.1
 * example : preview(args);
 * args Object
 * entry: input file
 * folder: file directory
 * port: speccify the web server port (0-65336)
 * wsport: speccify the websocket server port (0-65336)
 * */
var fs = require('fs-extra');
var npmlog = require('npmlog');
var path = require('path');
var os = require('os');
var helper = require('./libs/helper');
var server = require('./libs/server');
var builder = require('weex-builder');

var WEEX_TMP_DIR = '.weex_tmp';
var defaultParams = {
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
var Previewer = {
  init: function init(args, port) {
    // old weex-previewer compatible
    if (args['_'] && args['_'].length > 0 && !args.entry) {
      args.entry = args['_'][0];
    } else if (Array.isArray(args['_'])) {
      if (fs.lstatSync(args['_'][0]).isDirectory()) {
        args.folder = args['_'][0];
      }
    }
    if (!helper.checkEntry(args.entry)) {
      return npmlog.error('Not a ".vue" or ".we" file');
    }
    this.params = Object.assign({}, defaultParams, args);
    this.params.port = port;
    this.params.source = this.params.folder || this.params.entry;
    this.file = path.basename(this.params.entry);
    this.fileType = helper.getFileType(this.file);
    this.module = this.file.replace(path.extname(this.file), '');
    this.fileDir = process.cwd();
    return this.fileFlow();
  },
  fileFlow: function fileFlow() {
    var _this = this;

    this.initTemDir();
    this.buildJSFile(function () {
      _this.startServer();
    });
  },

  // build temporary directory for web preview
  initTemDir: function initTemDir() {
    if (!fs.existsSync(this.params.temDir)) {
      this.params.temDir = WEEX_TMP_DIR;
      fs.mkdirsSync(WEEX_TMP_DIR);
      fs.copySync(__dirname + '/../vue-template/template/', WEEX_TMP_DIR);
    }
    // replace old file
    fs.copySync(__dirname + '/../vue-template/template/weex.html', this.params.temDir + '/weex.html');
    var vueRegArr = [{
      rule: /{{\$script}}/,
      scripts: '\n<script src="./assets/vue.runtime.js"></script>\n<script src="./assets/weex-vue-render/index.js"></script>\n    '
    }];
    var weRegArr = [{
      rule: /{{\$script}}/,
      scripts: '\n<script src="./assets/weex-html5/weex.js"></script>\n    '
    }];
    var regarr = vueRegArr;
    if (this.fileType === 'we') {
      regarr = weRegArr;
    } else {
      this.params.webSource = path.join(this.params.temDir, 'temp');
      if (fs.existsSync(this.params.webSource)) {
        fs.removeSync(this.params.webSource);
      }
      helper.createVueSrc(this.params.source, this.params.webSource);
    }
    helper.replace(path.join(this.params.temDir + '/', 'weex.html'), regarr);
  },

  // only for vue previewing on web
  createVueAppEntry: function createVueAppEntry() {
    helper.replace(this.params.temDir + '/app.js', [{
      rule: '{{$module}}',
      scripts: path.join(process.cwd(), this.params.source)
    }], true);
    this.params.entry = this.params.temDir + '/app.js';
  },
  buildJSFile: function buildJSFile(callback) {
    var _this2 = this;

    var self = this;
    var buildOpt = {
      watch: true,
      ext: /\.js$/.test(this.params.entry) ? 'js' : this.fileType
    };
    var source = this.params.entry;
    var dest = this.params.temDir;
    var vueSource = this.params.source;
    if (this.params.folder) {
      source = this.params.folder;
      vueSource = this.params.folder;
      buildOpt.entry = this.params.entry;
    }
    if (this.fileType === 'vue') {
      // console.log(buildOpt.entry)
      if (buildOpt.entry) {
        buildOpt.entry = this.params.entry;
      } else {
        source = this.params.entry;
      }
      // for weex
      this.build(vueSource, dest, buildOpt, function () {
        npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir));
        // for web
        _this2.build(_this2.params.webSource, dest, {
          web: true,
          ext: 'js',
          entry: buildOpt.entry
        }, callback);
      }, function () {
        // for web
        _this2.build(_this2.params.webSource, dest, {
          web: true,
          ext: 'js',
          entry: buildOpt.entry
        }, callback);
      });
    } else {
      this.build(source, dest, buildOpt, callback);
    }
  },
  build: function build(src, dest, opts, buildcallback, watchCallback) {
    var _this3 = this;

    if (!opts.web && path.extname(src) === '.vue') {
      dest += '/[name].weex.js';
    } else if (!opts.web && path.extname(src) !== '.vue') {
      opts['filename'] = '[name].weex.js';
    }
    builder.build(src, dest, opts, function (err, fileStream) {
      if (!err) {
        if (_this3.wsSuccess) {
          if (typeof watchCallback !== 'undefined') {
            watchCallback();
          }
          npmlog.info(fileStream);
          server.sendSocketMessage();
        } else {
          buildcallback();
        }
      } else {
        npmlog.error(err);
      }
    });
  },
  startServer: function startServer() {
    var self = this;
    server.run({
      dir: this.params.temDir,
      module: this.module,
      fileType: this.fileType,
      port: this.params.port,
      wsport: this.params.wsport,
      open: this.params.open,
      wsSuccessCallback: function wsSuccessCallback() {
        self.wsSuccess = true;
      }
    });
  }
};
module.exports = function (args, port) {
  Previewer.init(args, port);
};