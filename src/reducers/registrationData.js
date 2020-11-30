import { actions } from '../actions/actions';

const initialState = {
	registrationData: {
		countries: [],
		jobTitles: [],
		departments: [],
	}
};

const { registrationData: SET_REGISTRATION_DATA } = actions.set;

export default function registrationData(state = initialState, action) {
	switch (action.type) {
		case SET_REGISTRATION_DATA:
			return {...state, registrationData: action.registrationData};
		default:
			return state;
	}
}
