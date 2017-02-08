'use strict';

var npmlog = require('npmlog');
var httpServer = require('http-server');
var localIP = require('quick-local-ip');
var fse = require('fs-extra');
var opener = require('opener');
var WebSocket = require('ws');

var wsServer = WebSocket.Server;

module.exports = {
  run: function run(args) {
    var _this = this;

    var params = args;
    var options = {
      root: params.dir,
      cache: '-1',
      showDir: true,
      autoIndex: true
    };
    this.rootDir = params.dir;
    if (!this.checkPort(params.port)) {
      return npmlog.info('HTTP port is illegal and please try another');
    }
    this.bindProcessEvent();
    var server = httpServer.createServer(options);
    server.listen(params.port, '0.0.0.0', function () {
      npmlog.info(new Date() + ('http  is listening on port ' + params.port));
      var IP = _this.getLocalIP();
      var previewUrl = 'http://' + IP + ':' + params.port + '/?hot-reload_controller&page=' + params.module + '.js&loader=xhr&wsport=' + params.wsport + '&type=' + params.fileType;
      opener(previewUrl);
      npmlog.info(previewUrl);
    });
    this.startWebSocket(params.wsport, params.wsSuccessCallback);
    return server;
  },
  startWebSocket: function startWebSocket(wsport, wsSuccessCallback) {
    var _this2 = this;

    if (!this.checkPort(wsport)) {
      return npmlog.info('websocket port is illegal and please try another');
    }
    var wss = wsServer({
      port: wsport
    });
    npmlog.info(new Date() + ('WebSocket  is listening on port ' + wsport));
    wss.on('connection', function (ws) {
      ws.on('message', function (message) {
        npmlog.info('received: %s', message);
        wss.clients.forEach(function (client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send('ws server ok');
          }
        });
      });
      _this2.wsConnection = ws;
    });
    wsSuccessCallback();
    this.wss = wss;
    return wss;
  },

  // send web socket messsage to client
  sendSocketMessage: function sendSocketMessage(message) {
    console.log(this.wss.clients.length);
    this.wsConnection.send(message || 'refresh');
  },
  bindProcessEvent: function bindProcessEvent() {
    process.on('uncaughtException', function (err) {
      if (err.errno === 'EADDRINUSE') {
        npmlog.info('The server has been setted up.');
      } else {
        npmlog.error(err);
      }
      process.exit(1);
    });
    process.on('SIGINT', function () {
      npmlog.info('weex  server stoped');
      process.exit();
    });
    process.on('SIGTERM', function () {
      npmlog.info('weex server stoped');
      process.exit();
    });
  },

  // remove cache file if in user project directory
  removeWebFile: function removeWebFile() {
    if (this.rootDir === '.weex_tmp') {
      try {
        fse.removeSync(this.rootDir);
      } catch (err) {
        npmlog.error(err);
      }
    }
  },

  // get local network ip
  getLocalIP: function getLocalIP() {
    return localIP.getLocalIP4();
  },
  checkPort: function checkPort(port) {
    port = parseInt(port, 10);
    return !!(port >= 0 && port < 65336 && port !== 80 && port !== 23);
  }
};