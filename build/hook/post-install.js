'use strict';

/** create an temp directory for weex file previewing
* 
**/
var fsUntils = require('../libs/fs-utils');
var os = require('os');
var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var home = os.homedir();
var WEEX_TEMP = '.weex_tmp';
var previewDir = path.join(home, WEEX_TEMP);

if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir);
} else {
  fse.removeSync(previewDir);
  fs.mkdirSync(previewDir);
}

fse.copySync('./vue-template/template', previewDir);