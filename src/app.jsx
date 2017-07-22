import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import FourOhFour from './FourOhFour';
import './style.scss';

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

const renderApp = () => {
	render(<App />, document.getElementById('app'));
};

renderApp();
