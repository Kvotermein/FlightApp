import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux';
import reducer from './reducers';

import { Provider } from 'react-redux';

const store = createStore(reducer);


const Top = () => (
    <Switch>
		<Route exact path='/' component={App} />
		<Route path='/Main' component={Main} />
    </Switch>
)

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<div>
			<Top />
		</div>
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);