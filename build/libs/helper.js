'use strict';

var fs = require('fs-extra');
var pathTo = require('path');

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
    var content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    });
    regarr.forEach(function (regObj) {
      content = content.replace(regObj.rule, function () {
        if (!escape) {
          return regObj.scripts;
        }
        return regObj.scripts.replace(/\\/g, '\\\\');
      });
    });
    return fs.writeFileSync(filePath, content);
  },
  // get web preview vue app.js contents
  getVueAppContent: function getVueAppContent(entryPath) {
    var relativePath = pathTo.resolve(entryPath);
    var contents = '';
    contents += 'var App = require(\'' + relativePath + '\')\n';
    contents += 'App.el = \'#root\'\n';
    contents += 'new Vue(App)\n';
    return contents;
  },
  createVueSrc: function createVueSrc(src, targetDir) {
    src = src || '.';
    if (!this.basename) {
      this.basename = src;
    }
    var self = this;
    if (this.isDir(src)) {
      fs.readdirSync(src).forEach(function (file) {
        var fullpath = pathTo.join(src, file);
        var extname = pathTo.extname(fullpath);
        if (self.isFile(fullpath) && extname === '.vue') {
          var entryFile = pathTo.join(targetDir, pathTo.relative(self.basename, src), pathTo.basename(file, extname) + '.js');
          fs.outputFileSync(pathTo.join(entryFile), self.getVueAppContent(fullpath));
        } else if (self.isDir(fullpath) && file !== 'build' && file !== 'include') {
          var subdir = pathTo.join(src, file);
          self.createVueSrc(subdir, targetDir);
        }
      });
    } else {
      var extname = pathTo.extname(src);
      var entryFile = pathTo.join(targetDir, pathTo.basename(src, extname) + '.js');
      fs.outputFileSync(pathTo.join(entryFile), self.getVueAppContent(src));
    }
  },
  isDir: function isDir(src) {
    var stat = fs.statSync(src);
    return stat.isDirectory();
  },
  isFile: function isFile(src) {
    var stat = fs.statSync(src);
    return stat.isFile();
  }
};