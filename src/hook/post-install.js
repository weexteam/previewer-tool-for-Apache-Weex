/** create an temp directory for weex file previewing
* 
**/
const os = require('os');
const path = require('path');
const fse = require('fs-extra');
const home = os.homedir();
const WEEX_TEMP = '.weex_tmp';
const previewDir = path.join(home,WEEX_TEMP);


if(!fse.ensureDirSync(previewDir)) {
  fse.mkdirsSync(previewDir);
}else{
  fse.removeSync(previewDir);
  fse.mkdirsSync(previewDir)
}
fse.copySync('./vue-template/template',previewDir);

    




