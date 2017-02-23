'use strict';

var npmlog = require('npmlog');
var httpServer = require('http-server');
var localIP = require('quick-local-ip');
var fse = require('fs-extra');
var opener = require('opener');
var WebSocket = require('ws');

var wsServer = WebSocket.Server;
var clients = [];

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
      if (params.open) {
        opener(previewUrl);
      }
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
      clients.push(ws);
      ws.on('message', function (message) {
        npmlog.info('received: %s', message);
        clients.forEach(function (client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send('ws server ok', function (err) {
              if (err) {
                npmlog.error(err);
              }
            });
          }
        });
      });
      // websocket close handle
      ws.on('close', function () {
        ws.close();
        ws._socket.destroy();
        clients.splice(_this2.findClient(ws.upgradeReq.url));
      });
      ws.on('error', function (error) {
        if (error) {
          npmlog.error(error);
          ws.close();
          ws._socket.destroy();
          clients.splice(_this2.findClient(ws.upgradeReq.url), 1);
        }
      });
      ws.on('close', function () {
        ws.close();
        ws._socket.destroy();
        clients.splice(_this2.findClient(ws.upgradeReq.url), 1);
      });
    });
    wsSuccessCallback();
    this.wss = wss;
    return wss;
  },
  findClient: function findClient(url) {
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].upgradeReq.url === url) {
        return i;
      }
    }
    return null;
  },

  // send web socket messsage to client
  sendSocketMessage: function sendSocketMessage(message) {
    clients.forEach(function (client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message || 'refresh', function (err) {
          if (err) {
            npmlog.error(err);
          }
        });
      }
    });
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