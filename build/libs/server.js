'use strict';

var npmlog = require('npmlog');
var httpServer = require('http-server');
var localIP = require('quick-local-ip');
var fse = require('fs-extra');
var opener = require('opener');
var WebSocket = require('ws');

var wsServer = WebSocket.Server;

module.exports = {
  runWeb: function runWeb() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var options = {
      root: args.dir,
      cache: '-1',
      showDir: true,
      autoIndex: true
    };
    this.rootDir = args.dir;
    if (!this.checkPort(args.port)) {
      return npmlog.info('HTTP port is illegal and please try another');
    }
    this.bindProcessEvent();
    var server = httpServer.createServer(options);
    server.listen(args.port, '0.0.0.0', function () {
      npmlog.info(new Date() + ('http  is listening on port ' + args.port));
      var IP = _this.getLocalIP();
      var previewUrl = 'http://' + IP + ':' + args.port + '/?hot-reload_controller&page=' + args.module + '.js&loader=xhr&wsport=' + args.wsport;
      opener(previewUrl);
      npmlog.info(previewUrl);
    });
    this.startWebSocket(args.wsport, args.wsSuccessCallback);
    return server;
  },
  startWebSocket: function startWebSocket(wsport, wsSuccessCallback) {
    if (!this.checkPort(wsport)) {
      return npmlog.info('websocket port is illegal and please try another');
    }
    var wss = wsServer({
      port: wsport
    });
    var self = this;
    npmlog.info(new Date() + ('WebSocket  is listening on port ' + wsport));
    wss.on('connection', function (ws) {
      ws.on('message', function (message) {
        npmlog.info('received: %s', message);
        wss.clients.forEach(function (client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send('ws server ok');
            self.wsConnection = ws;
          }
        });
      });
      wsSuccessCallback();
    });
    return wss;
  },

  // send web socket messsage to client
  sendSocketMessage: function sendSocketMessage(message) {
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
    return !!(port <= 0 || port > 65336 || port === 80 || port === 23);
  }
};