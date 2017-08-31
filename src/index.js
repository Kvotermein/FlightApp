import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const Top = () => (
    <Switch>
					<Route exact path='/' component={App} />
					<Route path='/Main' component={Main} />
    </Switch>
)

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Top />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);