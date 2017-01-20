'use strict';

var _defaultParams;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var opener = require('opener');
var npmlog = require('npmlog');
var httpServer = require('http-server');
var wsServer = require('ws').Server;
var os = require('os');
var _ = require("underscore");
var chalk = require('chalk');
var nwUtils = require('./libs/nw-utils');
var fsUtils = require('./libs/fs-utils');
//const weexConfig = require('./libs/weex.config');
var builder = require('weex-builder');

var WEEX_TMP_DIR = '.weex_tmp';

var defaultParams = (_defaultParams = {
  entry: '',
  output: '',
  fileExt: ['vue', 'we'],
  temDir: path.join(os.homedir(), WEEX_TMP_DIR),
  port: '8081',
  host: '127.0.0.1'
}, _defineProperty(_defaultParams, 'output', 'no JSBundle output'), _defineProperty(_defaultParams, 'wsport', '8082'), _defineProperty(_defaultParams, 'qr', false), _defineProperty(_defaultParams, 'smallqr', false), _defineProperty(_defaultParams, 'transformPath', ''), _defineProperty(_defaultParams, 'open', true), _defaultParams);

var Previewer = {
  init: function init(args) {
    if (args['_'] && args['_'].length > 0) {
      var entry = args['_'][0];
      args.entry = entry;
    }

    if (!this.__isWorkFile(args.entry)) {
      return console.log('Not a ".vue" or ".we" file');
    }
    if (args.port <= 0 || args.port >= 65336) {
      this.params.port = 8081;
    }
    this.params = Object.assign({}, defaultParams, args);
    this.params.source = this.params.entry;
    this.file = path.basename(this.params.entry);
    this.module = this.file.replace(/\..+/, '');
    this.fileType = /\.vue$/.test(this.file) ? 'vue' : 'we';
    this.fileDir = process.cwd();

    this.serverMark = false;
    if (!this.params.entry && this.params.transformPath) {
      this.serverMark = true;
      this.startWebServer();
      return;
    }
    this.fileFlow();
  },

  __isWorkFile: function __isWorkFile(filename) {
    if (!/\.(we|vue)$/.test(filename)) {
      return false;
    }
    return true;
  },

  fileFlow: function fileFlow() {
    var _this = this;

    var entry = this.params.entry;
    var output = this.params.ouput;
    if (this.params.output == 'no JSBundle output') {
      this.params.output = null;
      if (!this.initTemDir()) {
        return;
      };
      this.serverMark = true;
    } else {
      this.params.temDir = this.params.output;
      this.buildJSFile();
      return;
    }
    var self = this;
    if (this.fileType == 'vue') {
      fsUtils.replace(this.params.temDir + '/app.js', [{
        rule: "{{$module}}",
        scripts: path.join(process.cwd(), this.params.entry)
      }], true).then(function () {
        _this.module = 'app';
        self.params.entry = _this.params.temDir + '/app.js';
        self.buildJSFile();
      });
    } else {
      self.buildJSFile();
    }
  },


  // build temp directory for web preview
  initTemDir: function initTemDir() {
    if (!fs.existsSync(this.params.temDir)) {
      this.params.temDir = WEEX_TMP_DIR;
      fse.mkdirsSync(WEEX_TMP_DIR);
      fse.copySync(__dirname + '/../vue-template/template/', WEEX_TMP_DIR);
      return true;
    }
    fse.copySync(__dirname + '/../vue-template/template/weex.html', this.params.temDir + '/weex.html');
    fse.copySync(__dirname + '/../vue-template/template/app.js', this.params.temDir + '/app.js');
    return true;
  },
  buildJSFile: function buildJSFile() {
    var self = this;
    if (this.fileType == 'vue') {
      builder.build(this.params.source, path.join(this.params.temDir, this.module + '.weex.js'), {
        web: false,
        ext: /\.js$/.test(this.params.entry) ? 'js' : this.fileType
      }).then(function (arr) {
        if (arr.length > 0) {
          npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir));
        }
      }).catch(function (err) {
        npmlog.error(err);
      });
    }
    builder.build(this.params.entry, this.params.temDir, {
      web: true,
      ext: /\.js$/.test(this.params.entry) ? 'js' : this.fileType
    }).then(function (arr) {
      if (arr.length > 0) {
        if (self.serverMark == true) {
          // typeof jsBundlePathForRender == "string"
          self.startWebServer();
          self.startWebSocket();
          return;
        } else {
          // npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir)); 
          return;
        }
      }
    }).catch(function (err) {
      npmlog.error(err);
    });
  },
  startWebServer: function startWebServer(fileName) {
    var options = {
      root: this.params.temDir,
      cache: "-1",
      showDir: true,
      autoIndex: true
    };
    var self = this;
    self.bindProcessEvent();
    var server = httpServer.createServer(options);
    var port = this.params.port;
    //npmlog.info(`http port: ${port}`)        
    server.listen(port, "0.0.0.0", function () {
      npmlog.info(new Date() + ('http  is listening on port ' + port));
      var IP = nwUtils.getLocalIP();
      if (self.transformServerPath) {
        IP = nwUtils.getLocalIP();
        if (self.params.host != DEFAULT_HOST) {
          IP = self.params.host;
        }
        npmlog.info('target file in local path ' + self.parmas.transformPath + ' will be transformer to JS bundle\nplease access http://' + IP + ':' + port + '/');
        return;
      }

      var previewUrl = 'http://' + IP + ':' + port + '/?hot-reload_controller&page=' + self.module + '.js&loader=xhr&wsport=' + self.params.wsport + '&type=' + self.fileType;

      var vueRegArr = [{
        rule: /{{\$script}}/,
        scripts: '\n<script src="./assets/vue.runtime.js"></script>\n<script src="./assets/weex-vue-render/index.js"></script>\n      '
      }, {
        rule: /{{\$script2}}/,
        scripts: '<script src="' + self.module + '.js"></script>'
      }];
      var weRegArr = [{
        rule: /{{\$script}}/,
        scripts: '\n<script src="./assets/weex-html5/weex.js"></script>\n<script src="./assets/weex-init.js"></script>\n      '
      }, {
        rule: /{{\$script2}}/,
        scripts: ''
      }];
      var regarr = vueRegArr;
      if (/\.we$/.test(self.params.entry)) {
        regarr = weRegArr;
      }
      fsUtils.replace(path.join(self.params.temDir + '/', 'weex.html'), regarr).then(function () {
        self.open(previewUrl);
      }).catch(function (err) {
        console.log(err);
        npmlog.error("replace file failed!");
      });
    });
  },
  bindProcessEvent: function bindProcessEvent() {
    var self = this;
    process.on('uncaughtException', function (err) {
      if (err.errno === 'EADDRINUSE') {
        npmlog.info('The server has been setted up.');
      } else {
        console.log(err);
      }
      self.removeWebFile();
      process.exit(1);
    });
    process.on('SIGINT', function () {
      console.log(chalk.green("weex  server stoped"));
      self.removeWebFile();
      process.exit();
    });
    process.on('SIGTERM', function () {
      console.log(chalk.green("weex server stoped"));
      self.removeWebFile();
      process.exit();
    });
  },
  removeWebFile: function removeWebFile() {
    if (this.params.temDir == WEEX_TMP_DIR) {
      try {
        fse.removeSync(this.params.temDir);
      } catch (err) {
        npmlog.error(err);
      }
    }
  },
  startWebSocket: function startWebSocket(fileName) {
    var port = this.params.wsport;
    var wss = wsServer({ port: port });
    var self = this;
    npmlog.info(new Date() + ('WebSocket  is listening on port ' + port));
    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        npmlog.info('received: %s', message);
      });
      ws.send("ws server ok");
      self.wsConnection = ws;
    });
    self.watchForWSRefresh(fileName);
  },
  watchForWSRefresh: function watchForWSRefresh(fileName) {
    var self = this;
    fs.watch(this.params.source, function (fileName) {
      if (!!fileName.match('' + self.params.temDir)) {
        return;
      }
      if (/\.(js|we|vue)$/gi.test(self.params.entry)) {
        var transformP = builder.build(self.params.entry, self.params.temDir, {
          web: true,
          ext: /\.js$/.test(self.params.entry) ? 'js' : self.fileType
        });
        transformP.then(function (arr) {
          console.log('file refresh!');
          self.wsConnection.send("refresh");
        }).catch(function (err) {
          console.log(err);
          self.wsConnection.send("refresh");
        });
      }
    });
  },
  open: function open(url) {
    if (this.params.open) {
      opener(url);
    } else {
      npmlog.info('weex preview url:  ' + url);
    }
  }
};

module.exports = function (args) {
  Previewer.init(args);
};