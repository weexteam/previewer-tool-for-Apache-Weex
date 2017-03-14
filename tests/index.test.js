var pre = require('../build/index');
require('../build/hook/post-install');
var pathTo = require('path');
var fse = require('fs-extra');
var fs = require('fs');
var os = require('os');
var expect = require('expect.js');

const WEEX_TEMP = '.weex_tmp';
const previewDir = pathTo.join(os.homedir(), WEEX_TEMP);

fse.removeSync('./tests/dist/*');
describe('test main flow', function () {
  pre({
    entry: './tests/index.vue',
 //   temDir: './tests/dist',
    open: false
  });
  this.timeout(10000);
  it('test .vue file build', function (done) {
    setTimeout(function () { 
      expect(fs.existsSync(pathTo.join(previewDir,'index.weex.js'))).to.equal(true);
      done();
    }, 6000);
    
  });
});

