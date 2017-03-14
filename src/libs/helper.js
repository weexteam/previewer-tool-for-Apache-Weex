const fs = require('fs-extra');
const pathTo = require('path');

module.exports = {
  // check entry file
  checkEntry: function (filename) {
    return /\.(we|vue)$/.test(filename);
  },
  getFileType: function (filename) {
    return /\.vue$/.test(filename) ? 'vue' : 'we';
  },
  /**
  *  use regular expression to replace some file contents
  * @param filePath
  * @param regarr regular expression array
  **/
  replace: function (filePath, regarr, escape) {
    let content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    });
    regarr.forEach((regObj) => {
      content = content.replace(regObj.rule, () => {
        if (!escape) {
          return regObj.scripts;
        }
        return regObj.scripts.replace(/\\/g, '\\\\');
      });
    });
    return fs.writeFileSync(filePath, content);
  },
  // get web preview vue app.js contents
  getVueAppContent: function (entryPath) {
    const relativePath = pathTo.resolve(entryPath);
    let contents = '';
    contents += 'var App = require(\'' + relativePath.replace(/\\/g, '\\\\') + '\')\n';
    contents += 'App.el = \'#root\'\n';
    contents += 'new Vue(App)\n';
    return contents;
  },
  createVueSrc: function (src, targetDir) {
    src = src || '.';
    if (!this.basename) {
      this.basename = src;  
    }
    const self = this;
    if (this.isDir(src)) {
      fs.readdirSync(src).forEach(function (file) {
        const fullpath = pathTo.join(src, file);
        const extname = pathTo.extname(fullpath);
        if (self.isFile(fullpath) && extname === '.vue') {
          const entryFile = pathTo.join(targetDir, pathTo.relative(self.basename, src), pathTo.basename(file, extname) + '.js');
          fs.outputFileSync(pathTo.join(entryFile), self.getVueAppContent(fullpath));
        } else if (self.isDir(fullpath) && file !== 'build' && file !== 'include') {
          const subdir = pathTo.join(src, file);
          self.createVueSrc(subdir, targetDir);
        }
      });
    } else {
      const extname = pathTo.extname(src);
      const entryFile = pathTo.join(targetDir, pathTo.basename(src, extname) + '.js');
      fs.outputFileSync(pathTo.join(entryFile), self.getVueAppContent(src));  
    }
  },
  isDir: function (src) {
    const stat = fs.statSync(src);
    return stat.isDirectory();
  },
  isFile: function (src) {
    const stat = fs.statSync(src);
    return stat.isFile();
  }
};
