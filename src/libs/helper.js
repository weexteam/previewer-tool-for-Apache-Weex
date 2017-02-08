const fs = require('fs');

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
    return new Promise((resolve) => {
      const content = fs.readFileSync(filePath, {
        encoding: 'utf-8'
      });
      return resolve(content);
    }).then((content) => {
      regarr.forEach((regObj) => {
        content = content.replace(regObj.rule, () => {
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

