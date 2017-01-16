'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

// replace file contents
function replace(filePath, regarr) {
  return new _promise2.default(function (resolve, reject) {
    var content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    });
    return resolve(content);
  }).then(function (content) {
    regarr.forEach(function (regObj) {
      content = content.replace(regObj.rule, function () {
        return regObj.scripts;
      });
    });
    return fs.writeFileSync(filePath, content);
  });
}

module.exports = {
  replace: replace
};