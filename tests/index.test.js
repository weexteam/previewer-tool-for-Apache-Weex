var pre = require('../build/index');
var pathTo = require('path');
var fse = require('fs-extra');
var fs = require('fs');
var os = require('os');
var expect = require('expect.js');

fse.removeSync('./tests/dist/*');
describe('test .vue file build', function () {
  pre({
    entry: './tests/index.vue',
    temDir: './tests/dist',
    open: false
  });
  this.timeout(10000);
  it('test .we file build', function (done) {
    setTimeout(function () { 
      expect(fs.existsSync('./tests/dist/app.js')).to.equal(true);
      done();
    }, 4000);
    
  });
});

