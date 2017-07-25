import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './DashBoard';
import FourOhFour from './FourOhFour';
import LoginPage from './LoginPage';
import './style.scss';

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/" component={DashBoard} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

const renderApp = () => {
	render(<App />, document.getElementById('app'));
};

renderApp();
