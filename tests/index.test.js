var pre = require('../src/index');
require('../lib/hook/post-install');
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
    open: false
  });
  this.timeout(10000);
  console.log(previewDir)
  it('test .vue file build', function (done) {
    setTimeout(function () { 
      console.log(fs.existsSync(pathTo.join(previewDir,'index.weex.js')))
      expect(fs.existsSync(pathTo.join(previewDir,'index.weex.js'))).to.equal(true);
      done();
    }, 6000);
  });
});

