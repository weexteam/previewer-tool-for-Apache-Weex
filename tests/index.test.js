var pre = require('../build/index');
var pathTo = require('path');
var fse = require('fs-extra');
var fs = require('fs');
var os = require('os');
var expect = require('expect.js');

var temFile = pathTo.join(os.homedir(), '.weex_tmp');
fse.removeSync('./tests/dist/*');
describe('test .vue file build', function () {
  pre({
    entry: pathTo.resolve('./tests/index.vue'),
    output: './tests/dist'
  });
  pre({
    entry: pathTo.resolve('./tests/test.we'),
    output: './tests/dist'
  });
  this.timeout(10000);
  it('test .we file build', function (done) {
    setTimeout(function () { 
      expect(fs.existsSync('./tests/dist/test.js')).to.equal(true);
      done();
    }, 4000);
    
  });
});

