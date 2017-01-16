'use strict';

/**start a local server**/

var npmlog = require('npmlog');
var httpServer = require('http-server');
var wsServer = require('ws').Server;

module.exports = {
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
      // qrcode has moved to the website
      if (self.params.qr || self.params.smallqr) {
        // self.showQR();
        return;
      }

      var previewUrl = 'http://' + IP + ':' + port + '/?hot-reload_controller&page=' + self.module + '.js&loader=xhr&wsport=' + self.params.wsport + '&type=' + self.fileType;
      var vueRegArr = [{
        rule: /{{\$script}}/,
        scripts: '\n<script src="./assets/phantom-limb.js"></script>\n<script src="./assets/vue.runtime.js"></script>\n<script src="./assets/weex-vue-render/index.js"></script>\n      '
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
      process.exit(1);
    });
    process.on('SIGINT', function () {
      console.log(chalk.green("weex  server stoped"));
      process.exit();
    });
    process.on('SIGTERM', function () {
      console.log(chalk.green("weex server stoped"));
      process.exit();
    });
  },
  getIP: function getIP() {
    var IP = nwUtils.getPublicIP();
    if (this.params.host != '') {
      IP = this.params.host;
    }
    return IP;
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
        });
      }
    });
  }
};