import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./css/base.scss');
require('./css/home.scss');
require('./css/contact.scss');

ReactDom.render(
	<Router history={browserHistory} routes={routes}/>,
	document.querySelector('#app')
);