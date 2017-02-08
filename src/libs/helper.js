const fs = require('fs');
const localIP = require('quick-local-ip');

module.exports = {
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
  },
  // get local network ip
  getLocalIP: function () {
    return localIP.getLocalIP4();
  }
};

