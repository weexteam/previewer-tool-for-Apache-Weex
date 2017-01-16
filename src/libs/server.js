/**start a local server**/

const npmlog = require('npmlog');    
const httpServer = require('http-server');
const wsServer = require('ws').Server;

module.exports = {
  
  startWebServer(fileName) {
    let options = {
        root: this.params.temDir,
        cache: "-1",
        showDir: true,
        autoIndex: true
    }
    let self = this;
    self.bindProcessEvent();
    let server = httpServer.createServer(options);
    let port = this.params.port;
    //npmlog.info(`http port: ${port}`)        
    server.listen(port, "0.0.0.0", function () {
      npmlog.info((new Date()) + `http  is listening on port ${port}`)
      let IP =  nwUtils.getLocalIP();
      if (self.transformServerPath){
          IP =  nwUtils.getLocalIP();
          if (self.params.host != DEFAULT_HOST){
              IP = self.params.host;
          }
          npmlog.info(`target file in local path ${self.parmas.transformPath} will be transformer to JS bundle\nplease access http://${IP}:${port}/`);
          return;
      }
      // qrcode has moved to the website
      if (self.params.qr || self.params.smallqr){
         // self.showQR();
          return;
      }
      
      let previewUrl = `http://${IP}:${port}/?hot-reload_controller&page=${self.module}.js&loader=xhr&wsport=${self.params.wsport}&type=${self.fileType}`;
      let vueRegArr = [
        {
          rule: /{{\$script}}/,
          scripts:`
<script src="./assets/phantom-limb.js"></script>
<script src="./assets/vue.runtime.js"></script>
<script src="./assets/weex-vue-render/index.js"></script>
      ` 
        },
        {
          rule: /{{\$script2}}/,
          scripts:'<script src="' + self.module +  '.js"></script>', 
        }
      ];
      let weRegArr = [
        {
          rule: /{{\$script}}/,
          scripts:`
<script src="./assets/weex-html5/weex.js"></script>
<script src="./assets/weex-init.js"></script>
      ` 
        },
        {
          rule: /{{\$script2}}/,
          scripts:'', 
        }
      ];
      let regarr = vueRegArr;
      if(/\.we$/.test(self.params.entry)) {
        regarr = weRegArr; 
      }
      fsUtils.replace(path.join(`${self.params.temDir}/`,'weex.html'),regarr).then(() => {
        self.open(previewUrl);
         
      }).catch((err) => {
        console.log(err);
        npmlog.error("replace file failed!");
      })
      
    });
  },
  
  bindProcessEvent() {
    let self = this;
    process.on('uncaughtException', function(err) {
      if(err.errno === 'EADDRINUSE') {
        npmlog.info('The server has been setted up.');
      }else {
        console.log(err);  
      }    
      process.exit(1);
    }); 
    process.on('SIGINT', function () {
      console.log(chalk.green("weex  server stoped")); 
      process.exit() 
    }) 
    process.on('SIGTERM', function () {
      console.log(chalk.green("weex server stoped"));
      process.exit() 
    });
  },
  
  getIP () {
    let IP =   nwUtils.getPublicIP();
    if (this.params.host != ''){
        IP = this.params.host;
    }
    return IP;
  },
  
  startWebSocket(source,entry,output){
    let port = this.params.wsport;
    let wss = wsServer({port: port})
    let self = this
    npmlog.info((new Date()) + `WebSocket  is listening on port ${port}`)         
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            npmlog.info('received: %s', message);
        });
        ws.send("ws server ok");
        self.wsConnection = ws;
    });
    self.watchForWSRefresh(fileName); 
  },
  // watch file change and refresh browser
  watchForWSRefresh(source,entry,output){
    let self = this;
    fs.watch(source,function(){
        if (/\.(js|we|vue)$/gi.test(entry)){
            let transformP  = builder.build(entry,output,{
              web: true,
              ext: /\.js$/.test(entry)?'js':'vue',
            });
            transformP.then( function(arr){
              console.log('file refresh!');
              self.wsConnection.send("refresh");                    
            }).catch((err) => {
              console.log(err);
            });
        }
    });
  }
  
};