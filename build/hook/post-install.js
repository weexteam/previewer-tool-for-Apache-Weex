'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// create an temp directory for weex file previewing
var os = require('os');
var path = require('path');
var fse = require('fs-extra');

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
  if ((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
    if (err.code === 'EACCES') {
      /* eslint no-console: ["error", { allow: ["error"] }] */
      console.error('Error:permission denied.Please apply the write premission to the directory: "' + home + '" ');
    }
  }
}