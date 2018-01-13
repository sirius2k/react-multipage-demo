## Synopsis

This project is demo for react which renders mutiple pages without using create-react-project. It will shows how we can setup react project from scratch.

## Code Example
Initial project create and push it to the git repository
```bash
$ npm init
$ git init
$ git remote add origin https://github.com/sirius2k/react-multipage-demo.git
$ git add .
$ git commit -m "initial commit"
$ git push -u origin master
```

Install dependencies for the core React, plus serving and routing
```bash
$ npm i --save react react-dom react-router
$ npm i --save express body-parser
```

Let's get webpack installed with a few dependencies for transpiling scss and jsx into css and js
```bash
$ npm i --save webpack webpack-dev-server webpack-dev-middleware webpack-hot-middleware
$ npm i --save extract-text-webpack-plugin@2.0.0-rc.3
$ npm i --save babel-core babel-loader babel-preset-es2015 babel-preset-react node-sass sass-loader css-loader style-loader
```
(Note : It's important to install the non-default version of extract-text-plugin as it's not compatible with the latest version of Webpack.)

## Routing
react-router to get React to show different views for different URLs.

```javascript

```
