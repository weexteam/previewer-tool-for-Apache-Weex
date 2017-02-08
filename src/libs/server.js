const npmlog = require('npmlog');
const httpServer = require('http-server');
const localIP = require('quick-local-ip');
const fse = require('fs-extra');
const opener = require('opener');
const WebSocket = require('ws');

const wsServer = WebSocket.Server;

module.exports = {
  run(args) {
    const params = args;
    const options = {
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
    const server = httpServer.createServer(options);
    server.listen(params.port, '0.0.0.0', () => {
      npmlog.info((new Date()) + `http  is listening on port ${params.port}`);
      const IP = this.getLocalIP();
      const previewUrl = `http://${IP}:${params.port}/?hot-reload_controller&page=${params.module}.js&loader=xhr&wsport=${params.wsport}&type=${params.fileType}`;
      opener(previewUrl);
      npmlog.info(previewUrl);
    });
    this.startWebSocket(params.wsport, params.wsSuccessCallback);
    return server;
  },
  startWebSocket(wsport, wsSuccessCallback) {
    if (!this.checkPort(wsport)) {
      return npmlog.info('websocket port is illegal and please try another');
    }
    const wss = wsServer({
      port: wsport
    });
    npmlog.info((new Date()) + `WebSocket  is listening on port ${wsport}`);
    wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        npmlog.info('received: %s', message);
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send('ws server ok');
          }
        });
      });
      this.wsConnection = ws;
    });
    wsSuccessCallback();
    this.wss = wss;
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
  // remove cache file if in user project directory
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
    return !!(port >= 0 && port < 65336 && port !== 80 && port !== 23);
  }
};
