import React, { useEffect } from 'react';
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import AOS from 'aos';
import * as routes from './constants/routes';
import './App.scss';

// Pages
import HomePage from './pages/home.page';

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path={routes.PATH_HOME} component={HomePage} />

				<Redirect to={routes.PATH_HOME} />
			</Switch>
		</Router>
	);
};

export default App;
