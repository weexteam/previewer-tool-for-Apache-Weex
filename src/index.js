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

const WEEX_TMP_DIR = '.weex_tmp'

const defaultParams = {
  entry: '',
  output: '',
  fileExt: ['vue','we'],
  temDir: path.join(os.homedir(),WEEX_TMP_DIR),
  port: '8081',
  host: '127.0.0.1',
  output: 'no JSBundle output',
  wsport: '8082',
  qr: false,
  smallqr: false,
  transformPath:'',
  open: true,
};

let Previewer = {
  init: function(args) {
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
    this.params.source = this.params.entry;
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
      this.params.temDir = this.params.output;
      this.buildJSFile(); 
      return;
    }
    let self = this;
    if(this.fileType == 'vue') {
      fsUtils.replace(`${this.params.temDir}/app.js`,[
        {
          rule: "{{$module}}",
          scripts: path.join(process.cwd(),this.params.entry) ,
        }
      ],true).then(() => {
        this.module = 'app';
        self.params.entry = this.params.temDir + '/app.js';
        self.buildJSFile();
      })   
    } else {
      self.buildJSFile(); 
    }
  },
  
  // build temp directory for web preview
  initTemDir() {
    if(!fs.existsSync(this.params.temDir)) {
      this.params.temDir = WEEX_TMP_DIR;
      fse.mkdirsSync(WEEX_TMP_DIR);
      fse.copySync(`${__dirname}/../vue-template/template/`,WEEX_TMP_DIR);
      return true; 
    }
    fse.copySync(`${__dirname}/../vue-template/template/weex.html` , `${this.params.temDir}/weex.html`);
    fse.copySync(`${__dirname}/../vue-template/template/app.js` , `${this.params.temDir}/app.js`);
    return true;
    
  },
  
  buildJSFile() {
    let self = this;
    if(this.fileType == 'vue') {
      builder.build(this.params.source,path.join(this.params.temDir,this.module + '.weex.js'),{
        web: false,
        ext: /\.js$/.test(this.params.entry)?'js':this.fileType,
      }).then((arr) => {
        if(arr.length > 0) {
          npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir));   
        }
      }).catch((err) => {
        npmlog.error(err); 
      });   
    }
    builder.build(this.params.entry,this.params.temDir,{
      web: true,
      ext: /\.js$/.test(this.params.entry)?'js':this.fileType,
    }).then((arr) => {
      if(arr.length > 0) {
        if (self.serverMark == true) {  // typeof jsBundlePathForRender == "string"
          self.startWebServer();
          self.startWebSocket();
          return;

        }else{
         // npmlog.info('weex JS bundle saved at ' + path.resolve(self.params.temDir)); 
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
      
      let previewUrl = `http://${IP}:${port}/?hot-reload_controller&page=${self.module}.js&loader=xhr&wsport=${self.params.wsport}&type=${self.fileType}`;
     
      let vueRegArr = [
        {
          rule: /{{\$script}}/,
          scripts:`
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
      self.removeWebFile();
      process.exit(1);
    }); 
    process.on('SIGINT', function () {
      console.log(chalk.green("weex  server stoped")); 
      self.removeWebFile();
      process.exit() 
    }) 
    process.on('SIGTERM', function () {
      console.log(chalk.green("weex server stoped"));
      self.removeWebFile();
      process.exit() 
    });
  },
  
  removeWebFile() {
    if(this.params.temDir == WEEX_TMP_DIR) {
      try {
        fse.removeSync(this.params.temDir);  
      }
      catch(err) {
        npmlog.error(err);
      }
      
    }
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
    fs.watch(this.params.source, function(fileName){
        if (!!fileName.match(`${self.params.temDir}`))  {
            return
        }
        if (/\.(js|we|vue)$/gi.test(self.params.entry)){
            let transformP  = builder.build(self.params.entry,self.params.temDir,{
              web: true,
              ext: /\.js$/.test(self.params.entry)?'js':self.fileType,
            });
            transformP.then( function(arr){
              console.log('file refresh!');
              self.wsConnection.send("refresh");                    
            }).catch((err) => {
              console.log(err);
              self.wsConnection.send("refresh"); 
            });
        }
    });
  },
  
  open(url) {
    if (this.params.open){
      opener(url);
    }else{
      npmlog.info(`weex preview url:  ${url}`)
    }
  },
};

module.exports = function(args) {
  Previewer.init(args);
};




