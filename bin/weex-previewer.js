#!/usr/bin/env node
'use strict';

var fs = require('fs-extra');
var yargs = require('yargs');
var chalk = require('chalk');
var detect = require('detect-port');
var preview = require('../build/index');

var commandName = 'weex';
var port = '8081';

if (yargs.argv['$0'] === 'weex-previewer') {
  commandName = 'weex-previewer';
}

var userinfo = '\nUsage: ' + commandName + ' <foo/bar/we_file_or_dir_path>  [options]';
// This command help message is for weex-toolkit.
var command = '\nwhere <command> is one of:\n\n  init                                   create a vue project (removed)\n  update                                 update weex package version\n  debug                                  start weex debugger\n  compile                                compile we/vue file\n  create                                 create a weexpack project \n  platform <add|remove> <ios|android>    add/remove ios/android platform\n  plugin <add|remove> <pluginName>       add/remove weexplugin \n  run <ios|android>                      build your ios/android app and run\n\n  weex <command> --help      help on <command>  \n';

// Check whether the port is occupied
detect(port).then(function (open) {
  var argv = yargs.usage(userinfo).option('port', {
    demand: false
  }).default('port', open).describe('port', 'http listening port number ,default is 8081').option('wsport', {
    demand: false
  }).default('wsport', open + 1).describe('wsport', 'websocket listening port number ,default is 8082').describe('entry', 'the entry file in a folder').epilog(command).argv;
  var inputPath = argv._[0];
  var badWePath = !!(!inputPath || inputPath.length < 1);
  try {
    fs.accessSync(inputPath, fs.F_OK);
  } catch (e) {
    badWePath = true;
  }
  if (badWePath) {
    if (inputPath) {
      /* eslint no-console: ["error", { allow: ["log"] }] */
      console.log(chalk.red('File not found!'));
    }
    yargs.showHelp();
    process.exit(1);
  }

  preview(argv, open);
});