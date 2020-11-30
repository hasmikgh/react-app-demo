import * as actions from '../actions/actions';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	gender: '',
	country: '',
	city: '',
	department: '',
	jobTitle: '',
	suggestions: []
};

const {
	firstName: FIRST_NAME, lastName: LAST_NAME,
	gender: GENDER, email: EMAIL, password: PASSWORD, country: COUNTRY,
	city: CITY, department: DEPARTMENT, jobTitle: JOBTITLE
} = actions.actions.set;

export default function profile(state = initialState, action) {
	switch (action.type) {
		case FIRST_NAME:
			return {...state, firstName: action.firstName};
		case LAST_NAME:
			return {...state, lastName: action.lastName};
		case EMAIL:
			return {...state, email: action.email};
		case PASSWORD:
			return {...state, password: action.password};
		case GENDER:
			return { ...state, gender: action.gender };
		case DEPARTMENT:
			return { ...state, department: action.department };
		case COUNTRY:
			return { ...state, country: action.country };
		case CITY:
			return { ...state, city: action.city };
		case JOBTITLE:
			return { ...state, jobTitle: action.jobTitle };
		case actions.SET_PROFILE_SUGGESTION:
			return { ...state, suggestions: action.suggestions };
		default:
			return state;
	}
}
