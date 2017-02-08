'use strict';

var fs = require('fs');

module.exports = {
  // check entry file
  checkEntry: function checkEntry(filename) {
    return (/\.(we|vue)$/.test(filename)
    );
  },
  getFileType: function getFileType(filename) {
    return (/\.vue$/.test(filename) ? 'vue' : 'we'
    );
  },
  /**
  *  use regular expression to replace some file contents
  * @param filePath
  * @param regarr regular expression array
  **/
  replace: function replace(filePath, regarr, escape) {
    return new Promise(function (resolve) {
      var content = fs.readFileSync(filePath, {
        encoding: 'utf-8'
      });
      return resolve(content);
    }).then(function (content) {
      regarr.forEach(function (regObj) {
        content = content.replace(regObj.rule, function () {
          if (!escape) {
            return regObj.scripts;
          }
          return regObj.scripts.replace(/\\/g, '\\\\');
        });
      });
      return fs.writeFileSync(filePath, content);
    });
  }
};