# README

This repository lets you know how to build servercode with webpack + babel to write in ES2015.

Directory layout:
```
./
 |-- dist
 |   `-- bundle.app.js        the target file to be built
 |-- src
 |   |-- index.js
 |   |-- main.js
 |   |-- sub.js
 |   |-- summary.js
 |   `-- webpage.js
 |-- test
 |   `-- summary.js
 `-- webpack.config.js        webpack config file
```

## Build
```
$ npm i
$ npm start

$ ls dist/
bundle.app.js
```
`bundle.app.js` can be deployed on Kii Cloud.

## Test
```
$ npm test
...
```

## Watch
webpack supports watching.
```
$ npm run watch
...
```
If you update files in `src`, webpack detects it and rebuilds.

