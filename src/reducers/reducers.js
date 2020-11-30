import { combineReducers } from 'redux'
import profile from './profile'
import registrationData from './registrationData';
import suggestions from './suggestions';

export default combineReducers({
	profile,
	registrationData,
	suggestions
});