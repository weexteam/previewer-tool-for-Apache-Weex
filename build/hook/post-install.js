'use strict';

/** create an temp directory for weex file previewing
* 
**/
var os = require('os');
var path = require('path');
var fse = require('fs-extra');
var home = os.homedir();
var WEEX_TEMP = '.weex_tmp';
var previewDir = path.join(home, WEEX_TEMP);

if (!fse.ensureDirSync(previewDir)) {
  fse.mkdirsSync(previewDir);
} else {
  fse.removeSync(previewDir);
  fse.mkdirsSync(previewDir);
}
fse.copySync('./vue-template/template', previewDir);