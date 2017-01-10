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

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const opener = require('opener');
const npmlog = require('npmlog');    
const httpServer = require('http-server');
const wsServer = require('ws').Server;
const os = require('os');
const _ = require("underscore");
const chalk = require('chalk');
const nwUtils =  require('./libs/nw-utils');      
const fsUtils = require('./libs/fs-utils');      
//const weexConfig = require('./libs/weex.config');
const builder = require('weex-builder');

const defaultParams = {
  entry: '',
  output: '',
  fileExt: ['vue','we'],
  temDir: path.join(os.homedir(),'.weex_tmp'),
  port: '8081',
  host: '127.0.0.1',
  output: 'no JSBundle output',
  wsport: '8082',
  qr: false,
  smallqr: false,
  transformPath:'',
  notopen: false,
};



let Previewer = {
  init: function(args) {
    console.log(args);
    if(args['_'] && args['_'].length>0) {
      let entry = args['_'][0];
      args.entry = entry;
    }
    
    if(!this.__isWorkFile(args.entry)) {
      return console.log('Not a ".vue" or ".we" file');   
    }
    
    if(args.port <=0 || args.port >= 65336) {
      this.params.port = 8081;
    }
    this.params = Object.assign({},defaultParams,args);
    
    this.file = path.basename(this.params.entry);
    this.module = this.file.replace(/\..+/, '');
    this.fileType = /\.vue$/.test(this.file) ? 'vue':'we';
    this.fileDir = process.cwd();
   
    this.serverMark = false;
    if (!this.params.entry  &&  this.params.transformPath){
      this.serverMark = true;            
      this.startWebServer();
      return;
    }
    this.fileFlow()
  },
  
 
  __isWorkFile: function(filename) {
    if(!/\.(we|vue)$/.test(filename)) {
      return false;
    }
    return true; 
  },
  
  fileFlow() {
    let entry = this.params.entry; 
    let output = this.params.ouput;
    if (this.params.output == 'no JSBundle output'){
      this.params.output = null;
      if(!this.initTemDir()) {
        return;  
      };
      this.serverMark = true;                          
    }else{
      this.buildJSFile(); 
      return;
    }

    try{        
      if (fs.lstatSync(entry).isFile()){

        if (fs.lstatSync(entry).isDirectory()){
          let module = this.module;            
          this.params.output =  params.output = path.join(output , `${module}.js`)
        }
      }
    }catch(e){
        //fs.lstatSync my raise when outputPath is file but not exist yet.
    }
    let self = this;
    if(this.fileType == 'vue') {
      fsUtils.replace(path.join(this.params.temDir,'app.js'),[
        {
          rule: "{{$module}}",
          scripts: path.join(process.cwd(),this.params.entry) ,
        }
      ]).then(() => {
        self.params.source = self.params.entry;
        self.module = 'app';
        self.params.entry = path.join(this.params.temDir,'app.js');
        self.buildJSFile();

      })   
    } else {
      self.buildJSFile(); 
    }
    

    
  },
  
  // build temp directory for web preview
  initTemDir() {
    if(!fs.existsSync(this.params.temDir) || !fs.existsSync(path.join(this.params.temDir,'index.html')) || !fs.existsSync(path.join(this.params.temDir,'weex.html'))) {
      npmlog.error('Some bad enviroment.Please run "npm install weex-previewer --save"');
      return false; 
    }
    fse.copySync(`${__dirname}/../vue-template/template/weex.html` , `${this.params.temDir}/weex.html`);
    fse.copySync(`${__dirname}/../vue-template/template/app.js` , `${this.params.temDir}/app.js`);
    return true;
  },
  
  buildJSFile() {
    builder.build(this.params.entry,this.params.temDir,{
      web: true,
    }).then((arr) => {
      if(arr.length > 0) {
        if (self.serverMark == true) {  // typeof jsBundlePathForRender == "string"
          self.startWebServer();
          self.startWebSocket();
          return;

        }else{
          npmlog.info('weex JS bundle saved at ' + path.resolve(outputPath)); 
          return;
        }  
      }
    }).catch((err) => {
      npmlog.error(err); 
    });  
  },
  
  startWebServer(fileName) {
    let options = {
        root: this.params.temDir,
        cache: "-1",
        showDir: true,
        autoIndex: true
    }
    let self = this;

    if (this.params.transformPath){
        options.root = this.params.transformPath;
        options.before = [ fsUtils.getTransformerWraper(options.root, self.transformTarget ) ];   
    }else{
        options.before = [ fsUtils.getTransformerWraper(process.cwd(), self.transformTarget ) ]     
    }
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
      
      if (self.params.qr || self.params.smallqr){
         // self.showQR();
          return;
      }
      
      let previewUrl = `http://${IP}:${port}/?hot-reload_controller&page=${self.module}.js&loader=xhr`;
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
  
  showQR(){
    let IP = this.getIP();   
    let wsport = this.params.wsport;
    let jsBundleURL = `http://${IP}:${this.params.port}/${this.module}.js?wsport=${this.params.wsport}`;
    // npmlog output will broken QR in some case ,some we using console.log
    console.log(`The following QR encoding url is\n${jsBundleURL}\n`);
    qrcode.generate(jsBundleURL,{small: this.params.smallqr});
    console.log("\nPlease download Weex Playground app from https://github.com/alibaba/weex and scan this QR code to run your app, make sure your phone is connected to the same Wi-Fi network as your computer runing WeexToolkit.\n")
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
  
  startWebSocket(fileName){
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
  
  watchForWSRefresh(fileName){
    let self = this;
    fs.watch(this.params.entry, function(fileName){
        if (!!fileName.match(`${self.params.temDir}`))  {
            return
        }
        if (/\.(js|we|vue)$/gi.test(self.params.entry)){
            let transformP  = builder.build(self.params.entry,self.params.temDir,{
              web: true,
            });
            transformP.then( function(arr){
              console.log('file refresh!');
              self.wsConnection.send("refresh");                    
            }).catch((err) => {
              console.log(err);
            });
        }
    });
  },
  
  open(url) {
    if (!this.params.notopen){
      opener(url);
    }else{
      npmlog.info(`weex preview url:  ${url}`)
    }
  },
};

module.exports = function(args) {
  Previewer.init(args);
};




