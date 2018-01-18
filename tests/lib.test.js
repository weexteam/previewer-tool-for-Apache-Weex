var helper = require('../src/utils/helper');
var pathTo = require('path');
var fse = require('fs-extra');
var fs = require('fs');
var expect = require('expect.js');

describe('third lib test', function () {
  describe('replace', function () {
    it('replace module', function () {
      var source = pathTo.resolve(pathTo.join('.', 'vue-template/template/app.js')),
        destPath = pathTo.resolve('./tests/dist/app.temp.js'),
        content = '';
      fse.copySync(source, destPath);
      expect(fs.existsSync(destPath)).to.be(true);
      helper.replace(destPath, [{
        rule: '{{$module}}',
        scripts: 'WEEX_REPLACE'
      }]);
      content = fs.readFileSync(destPath, {
        encoding: 'utf-8'
      });
      expect(content.search('WEEX_REPLACE') >= 0).to.be(true);
    });
  });
});
