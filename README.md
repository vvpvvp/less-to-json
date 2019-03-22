# less to json
Covert less file to json

Support ~ to node_modules Folder

## Install

``` shell
$ npm install less-to-json
```

## Use

``` shell
$ lessto --json test.less test.json

$ lessto --js test.less test.js
```

``` javascript
const lessToJson = require('less-to-json');

let result = lessToJson('css/var.less')
```

