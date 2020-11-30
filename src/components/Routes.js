import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Registration from "./registration/registration";
import Profile from "./profile/profile";
import SuggestionContainer from "./suggestions/suggestionContainer";
import history from './history';

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/registration' component={Registration}/>
			<Route path='/suggestions' component={SuggestionContainer}/>
			<Route path='/profile' component={Profile}/>
		</Switch>
	</Router>
);

export default Routes;