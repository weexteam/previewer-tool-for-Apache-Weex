const fs = require('fs');


// replace file contents
function replace(filePath,regarr) {
  return new Promise((resolve,reject) => {
    let content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    });
    return resolve(content);
  }).then((content) => {
      regarr.forEach((regObj) => {
        content = content.replace(regObj.rule, function () {
          return regObj.scripts;
        });  
      })
      return fs.writeFileSync(filePath,content);
  })
}


module.exports = {
  replace: replace,
}