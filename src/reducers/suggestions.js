import * as actions from '../actions/actions';

export default function suggestions(state = [], action) {
	switch (action.type) {
		case actions.SET_SUGGESTIONS:
			return {...state, suggestions: action.suggestions};
		default:
			return state;
	}
}
