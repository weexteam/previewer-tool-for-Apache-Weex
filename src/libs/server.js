const npmlog = require('npmlog');
const httpServer = require('http-server');
const localIP = require('quick-local-ip');
const fse = require('fs-extra');
const opener = require('opener');
const WebSocket = require('ws');

const wsServer = WebSocket.Server;

module.exports = {
  runWeb(...args) {
    const options = {
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
    const server = httpServer.createServer(options);
    server.listen(args.port, '0.0.0.0', () => {
      npmlog.info((new Date()) + `http  is listening on port ${args.port}`);
      const IP = this.getLocalIP();
      const previewUrl = `http://${IP}:${args.port}/?hot-reload_controller&page=${args.module}.js&loader=xhr&wsport=${args.wsport}`;
      opener(previewUrl);
      npmlog.info(previewUrl);
    });
    this.startWebSocket(args.wsport, args.wsSuccessCallback);
    return server;
  },
  startWebSocket(wsport, wsSuccessCallback) {
    if (!this.checkPort(wsport)) {
      return npmlog.info('websocket port is illegal and please try another');
    }
    const wss = wsServer({
      port: wsport
    });
    const self = this;
    npmlog.info((new Date()) + `WebSocket  is listening on port ${wsport}`);
    wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        npmlog.info('received: %s', message);
        wss.clients.forEach((client) => {
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
  sendSocketMessage(message) {
    this.wsConnection.send(message || 'refresh');
  },
  bindProcessEvent() {
    process.on('uncaughtException', (err) => {
      if (err.errno === 'EADDRINUSE') {
        npmlog.info('The server has been setted up.');
      } else {
        npmlog.error(err);
      }
      process.exit(1);
    });
    process.on('SIGINT', () => {
      npmlog.info('weex  server stoped');
      process.exit();
    });
    process.on('SIGTERM', () => {
      npmlog.info('weex server stoped');
      process.exit();
    });
  },
  removeWebFile() {
    if (this.rootDir === '.weex_tmp') {
      try {
        fse.removeSync(this.rootDir);
      } catch (err) {
        npmlog.error(err);
      }
    }
  },
  // get local network ip
  getLocalIP: function () {
    return localIP.getLocalIP4();
  },
  checkPort: function (port) {
    port = parseInt(port, 10);
    return !!(port <= 0 || port > 65336 || port === 80 || port === 23);
  }
};
