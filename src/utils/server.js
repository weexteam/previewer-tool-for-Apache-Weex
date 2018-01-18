const httpServer = require('http-server');
const localIP = require('ip');
const fse = require('fs-extra');
const opener = require('opener');
const WebSocket = require('ws');
const logger = require('./logger');

const wsServer = WebSocket.Server;
const clients = [];

const server = {
  run (args) {
    const params = args;
    const options = {
      root: params.dir,
      cache: '-1',
      showDir: true,
      autoIndex: true
    };
    this.rootDir = params.dir;
    if (!this.checkPort(params.port)) {
      return logger.info('HTTP port is illegal and please try another');
    }
    this.bindProcessEvent();
    const servers = httpServer.createServer(options);
    servers.listen(params.port, '0.0.0.0', () => {
      logger.info((new Date()) + `http  is listening on port ${params.port}`);
      const IP = this.getLocalIP();
      const previewUrl = `http://${IP}:${params.port}/?hot-reload_controller&page=${params.module}.js&loader=xhr&wsport=${params.wsport}&type=${params.fileType}`;
      if (params.open) {
        opener(previewUrl);
      }
      logger.info(previewUrl);
    });
    this.startWebSocket(params.wsport, params.wsSuccessCallback);
    return servers;
  },
  startWebSocket (wsport, wsSuccessCallback) {
    if (!this.checkPort(wsport)) {
      return logger.info('websocket port is illegal and please try another');
    }
    const wss = wsServer({
      port: wsport
    });
    logger.info((new Date()) + `WebSocket  is listening on port ${wsport}`);
    wss.on('connection', (ws) => {
      clients.push(ws);
      ws.on('message', (message) => {
        logger.info('received: %s', message);
        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send('ws server ok', (err) => {
              if (err) {
                logger.error(err);
              }
            });
          }
        });
      });
      // websocket close handle
      ws.on('close', () => {
        ws.close();
        ws._socket.destroy();
        clients.splice(this.findClient(ws.upgradeReq.url));
      });
      ws.on('error', (error) => {
        if (error) {
          logger.error(error);
          ws.close();
          ws._socket.destroy();
          clients.splice(this.findClient(ws.upgradeReq.url), 1);
        }
      });
    });
    wsSuccessCallback();
    this.wss = wss;
    return wss;
  },
  findClient (url) {
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].upgradeReq.url === url) {
        return i;
      }
    }
    return null;
  },
  // send web socket messsage to client
  sendSocketMessage (message) {
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message || 'refresh', (err) => {
          if (err) {
            logger.error(err);
          }
        });
      }
    });
  },
  bindProcessEvent () {
    process.on('uncaughtException', (err) => {
      if (err.errno === 'EADDRINUSE') {
        logger.info('The server has been setted up.');
      }
      else {
        logger.error(err);
      }
      process.exit(1);
    });
    process.on('SIGINT', () => {
      logger.info('weex  server stoped');
      process.exit();
    });
    process.on('SIGTERM', () => {
      logger.info('weex server stoped');
      process.exit();
    });
  },
  // remove cache file if in user project directory
  removeWebFile () {
    if (this.rootDir === '.weex_tmp') {
      try {
        fse.removeSync(this.rootDir);
      }
      catch (err) {
        logger.error(err);
      }
    }
  },
  // get local network ip
  getLocalIP: function () {
    return localIP.address();
  },
  checkPort: function (port) {
    port = parseInt(port, 10);
    return !!(port >= 0 && port < 65336 && port !== 80 && port !== 23);
  }
};

module.exports = server;
