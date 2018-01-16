#!/usr/bin/env node

const fs = require('fs-extra');
const yargs = require('yargs');
const chalk = require('chalk');
const detect = require('detect-port');
const preview = require('../build/index');

let commandName = 'weex';
const port = '8081';

if (yargs.argv['$0'] === 'weex-previewer') {
  commandName = 'weex-previewer';
}

const userinfo = '\nUsage: ' + commandName + ' <foo/bar/we_file_or_dir_path>  [options]';
// This command help message is for weex-toolkit.
const command = `
where <command> is one of:

  init                                   create a vue project (removed)
  update                                 update weex package version
  debug                                  start weex debugger
  compile                                compile we/vue file
  create                                 create a weexpack project 
  platform <add|remove> <ios|android>    add/remove ios/android platform
  plugin <add|remove> <pluginName>       add/remove weexplugin 
  run <ios|android>                      build your ios/android app and run

  weex <command> --help      help on <command>  
`;

process.on('uncaughtException', (err) => {
  console.error(err.stack)
});
process.on('unhandledRejection', (err) => {
  console.error(err.stack);
});

// Check whether the port is occupied
detect(port).then((open) => {
  const argv = yargs
        .usage(userinfo)
        .option('port', {
          demand: false
        })
        .default('port', open)
        .describe('port', 'http listening port number ,default is 8081')
        .option('wsport', {
          demand: false
        })
        .default('wsport', open + 1)
        .describe('wsport', 'websocket listening port number ,default is 8082')
        .describe('entry', 'the entry file in a folder')
        .epilog(command)
        .argv;
  const inputPath = argv._[0];
  let badWePath = !!(!inputPath || (inputPath.length < 1));
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
