Node Js Projects!
-------------------

<p align="center">
    <img src="https://nodejs.org/static/images/logo-light.svg" width="200"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/eslint-airbnb-4B32C3.svg" alt="airbnb-style">
</p>

This project contains my different node projects.

## Getting started / Prerequisites / Dependencies

To run each project :
``` bash
npm install
npm start
```

## Syntax analyser
<a href="https://www.npmjs.com/package/eslint-config-airbnb" >Eslint with airbnb configuration</a> is used to develop applications.
<p>The dependencies are :</p>

``` bash
"eslint": "^4.18.1",
"eslint-config-airbnb-base": "^12.1.0",
"eslint-plugin-import": "^2.9.0",
```
The configuration file .eslintrc.json is :
``` json
{
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": 0
  }
}
```

## Development with ECMAScript 6/7

<a href="https://babeljs.io/docs/en/babel-cli">Babel</a> is used to compile the code.

``` bash
"babel-cli": "^6.26.0",
"babel-plugin-syntax-object-rest-spread": "^6.13.0",
"babel-preset-env": "^1.7.0",
```

The configuration file .babelrc is :
``` json
{
  "presets": [
    ["env"]
  ],
  "plugins": ["syntax-object-rest-spread"],
}
```
