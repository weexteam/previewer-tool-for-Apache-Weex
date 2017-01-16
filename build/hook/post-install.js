'use strict';

/** create an temp directory for weex file previewing
* 
**/

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var os = require('os');
var path = require('path');
var fse = require('fs-extra');
var chalk = require('chalk');
var home = os.homedir();
var WEEX_TEMP = '.weex_tmp';
var previewDir = path.join(home, WEEX_TEMP);

try {
  if (!fse.ensureDirSync(previewDir)) {
    fse.mkdirsSync(previewDir);
  } else {
    fse.removeSync(previewDir);
    fse.mkdirsSync(previewDir);
  }
  fse.copySync('./vue-template/template', previewDir);
} catch (err) {
  if ((typeof err === 'undefined' ? 'undefined' : (0, _typeof3.default)(err)) == 'object') {
    if (err.code == 'EACCES') {
      console.error('Error:permission denied.Please apply the write premission to the directory: "' + home + '" ');
    }
  }
}