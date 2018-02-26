#!/usr/bin/env node

const fs = require('fs-extra');
const pkg = require('../package.json');
const exit = require('exit');
const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const detect = require('detect-port');
const preview = require('../lib');
const binname = ((args) => {
  let temp = path.basename(args)
  return temp;
})(process.argv[1]);

const { 
  logger,
  hook,
  helper 
} =  require('../lib/utils')

program
.option('-v, --version', 'output version')
.option('-h, --help', 'output usage information')
.option('-e, --entry [target]', 'set the entry file')
.option('-c, --config [path]', 'set webpack configuration file to override the built-in configuration')
.option('-p, --port [port]', 'set preview server port, default: 8081', '8081')
.option('--telemetry', 'upload usage data to help us improve the toolkit')
.option('--verbose', 'display all logs of debugger server')
.option('--loglevel [loglevel]', 'set log level silent|error|warn|info|log|debug', 'error')
.parse(process.argv)

// Supporting add the file / directory parameter after the command.
program['arguments']('[target]').action(function (target) {
  program.target = target;
});

// Fix tj's commander bug overwrite --help
if (program.help === undefined) {
  program.outputHelp();
  exit(0);
}


// Fix tj's commander bug overwrite --version
if (program.version === undefined) {
  logger.log(pkg.version);
  exit(0);
}

if (program.loglevel) {
  program.loglevel = program.loglevel.toLowercase && program.loglevel.toLowercase()
  if(logger.LOGLEVELS.indexOf(program.loglevel) > -1) {
    logger.setLevel(program.loglevel)
  }
}

if (program.verbose) {
  logger.setLevel('verbose')
}

if (program.telemetry) {
  hook.allowTarck()
}

process.on('uncaughtException', (err) => {
  logger.error(err.stack)
});
process.on('unhandledRejection', (err) => {
  logger.error(err.stack);
});

const pipe = (args) => {
  if (!args || !args[0]) {
    program.outputHelp();
    return false;
  }
  const target = args[0];
  const ext = path.extname(target);
  let result = {
    folder: '',
    entry: ''
  }
  if(!fs.existsSync(target)){
    logger.error(`Not found file ${target}`);
    return false;
  }
  if (!ext) {
    result.folder = target;
    if (!program.entry) {
      logger.error(`Need to config the entry file like: \`${binname} ${target} --entry ${path.join(target, 'index.vue')}\``);
      return false;
    }
    else {
      result.entry = program.entry
    }
  }
  else {
    result.entry = target || ''
  }
  return result;
}

detect(program.port).then((open) => {
  const target = pipe(program.args)
  if (target) {
    // If permission to track use
    let entryCount = 0;
    let fileType;
    let options;
    let optionflags;
    const entryType = {
      2: 'single',
      6: 'folder'
    }
    if (target.entry) {
      entryCount+=2;
      fileType = helper.getFileType(path.basename(target.entry))
    }
    if (target.folder) {
      entryCount+=4;
    }
    optionflags = {
      entry: !!program.entry,
      port:!!program.port,
      verbose:!!program.verbose,
      config:!!program.config,
      loglevel:!!program.loglevel
    }
    hook.record('/weex_tool.weex-previewer.sence', { file_type: fileType, entry: entryType[entryCount], options: options});

    options = {
      config:program.config
    }
    logger.info('Bundling source...')
    preview(target, open, options);
  }
})