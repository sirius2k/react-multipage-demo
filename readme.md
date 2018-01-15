## Synopsis
This is demo prject for react which renders mutiple pages without using create-react-project. It will shows how we can setup react project from scratch.

## Initialize project
Create initial project and push it to the git repository
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
Used react-router to get React to show different views for different URLs. index.jsx set up router and import right SCSS files. And, routes.jsx to actually define them.

index.jsx
```javascript
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./css/base.scss');
require('./css/home.scss');
require('./css/contact.scss');

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
```

```javascript
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Contact from './components/views/contact';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);
```
As you can see, the / path will get routed to app.jsx, and we'll set up two views for / (home.jsx) and /contact (contact.jsx). We also specify that any URL not specified should server up {home}.

## Views and controllers
We can actually setup some of the simple controllers for the different pages we want to serve.

```javascript
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
```

It does nothing but set up a sacffold to show the views we'll set up as follows. Start with home.jsx

```javascript
import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        This is the home page.
      </div>
    );
  }
}
```

This will catch all view and change the URL to / if someone hits this view. (e.g. If someone requests /test, it will server up the Home view and change the URL to /.)







