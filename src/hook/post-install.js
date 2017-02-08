// create an temp directory for weex file previewing
const os = require('os');
const path = require('path');
const fse = require('fs-extra');

const home = os.homedir();
const WEEX_TEMP = '.weex_tmp';
const previewDir = path.join(home, WEEX_TEMP);

try {
  if (!fse.ensureDirSync(previewDir)) {
    fse.mkdirsSync(previewDir);
  } else {
    fse.removeSync(previewDir);
    fse.mkdirsSync(previewDir);
  }
  fse.copySync('./vue-template/template', previewDir);
} catch (err) {
  if (typeof err === 'object') {
    if (err.code === 'EACCES') {
      console.error('Error:permission denied.Please apply the write premission to the directory: "' + home + '" ');
    }
  }
}
