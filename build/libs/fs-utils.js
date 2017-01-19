'use strict';

var fs = require('fs');

// replace file contents
function replace(filePath, regarr) {
  return new Promise(function (resolve, reject) {
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