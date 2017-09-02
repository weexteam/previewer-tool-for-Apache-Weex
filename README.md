# weex-previewer

[![npm](https://img.shields.io/npm/v/weex-previewer.svg?maxAge=2592000)]() 
[![Build Status](https://travis-ci.org/weexteam/weex-previewer.svg?branch=master)](https://travis-ci.org/weexteam/weex-previewer)

a tool help user to preview their weex files

### how to use

``` bash 
npm install weex-previewer --save
```

``` js
var preview = require('weex-previewer');
preview({
  entry: 'src/index.vue',
  port: 8081
});

```

#### use command line 
``` bash 
npm install weex-previewer -g
```

``` bash
weex-previewer src/index.vue
```



### Options

| name        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| entry     | string | 'src/index.vue' | the efile you want to preview |
| open | boolean     |    true | auto open browser |
| port | string   | 8801 | specify an port for local web server |
| wsport | string   | 8804 | specify an websocket port for hot reload |

### ChangeLog

1.3.9

- Fix ip address on server.
- Replace quick-local-ip module with ip module.