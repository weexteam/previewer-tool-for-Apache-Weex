/** create an temp directory for weex file previewing
* 
**/
const fsUntils = require('../libs/fs-utils');
const os = require('os');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const home = os.homedir();
const WEEX_TEMP = '.weex_tmp';
const previewDir = path.join(home,WEEX_TEMP);

if(!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir)
  
}else{
  fse.removeSync(previewDir);
  fs.mkdirSync(previewDir)
}

fse.copySync('./vue-template/template',previewDir);

    




