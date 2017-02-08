'use strict';

var fs = require('fs');
var os = require('os');
var _ = require("underscore");
var localIP = require('quick-local-ip');

// third tool helper

module.exports = {
  /**
  *  use regular expression to replace some file contents
  * @param filePath
  * @param regarr regular expression array  
  **/
  replace: function replace(filePath, regarr) {
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
  },

  getLocalIP: function getLocalIP() {
    return localIP.getLocalIP4();
  }

};