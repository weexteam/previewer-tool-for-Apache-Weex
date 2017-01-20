# weex-previewer

[![npm](https://img.shields.io/npm/v/weex-previewer.svg?maxAge=2592000)]() 
[![Build Status](https://travis-ci.org/weexteam/weex-previewer.svg?branch=master)](https://travis-ci.org/weexteam/weex-previewer)

a tool help user to preview their weex files

### how to use

``` bash 
npm install weex-previewer
```

``` js
var preview = require('weex-previewer');
preview({
  host: "192.168.34.19",
  entry: 'src/index.vue'   
});

```

### Options

| name        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| entry     | string | 'src/index.vue' | the efile you want to preview |
| open | boolean     |    true | auto open browser |
| host | string   | 30.30.31.29 | specify an host for mobile device to preview |
| port | string   | 8801 | specify an port for local web server |
| wsport | string   | 8804 | specify an websocket port for hot reload |
| output | string   | dist | specify an directory for bundle files |
