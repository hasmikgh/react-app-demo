import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from "../actions/actions";
import axios from "axios";

function* suggestionsSaga() {
	yield takeEvery(actions.GET_SUGGESTIONS, getSuggestions);
}

function* selectSuggestionSaga() {
	yield takeEvery(actions.SELECT_SUGGESTION, selectSuggestion);
}

function* getSuggestions(action) {
	const { profile, option = 'country' } = action;
	try {
		const { data } = yield call(fetchUsers);
		const users = data.users;
		const byCountry = getSuggestionByOption(users, profile, option);
		const byCity = getSuggestionByOption(users, profile, 'city');
		const byJobTitle = getSuggestionByOption(users, profile, 'jobTitle');
		const byDepartment = getSuggestionByOption(users, profile, 'department');
		const suggestions = [
			{ checked: false, type: 'byCountry', options: byCountry },
			{ checked: false, type: 'byCity', options: byCity },
			{ checked: false, type: 'byDepartment', options: byDepartment },
			{ checked: false, type: 'byJobTitle', options: byJobTitle },
		];
		yield put({ type: actions.SET_SUGGESTIONS, suggestions: suggestions });
	} catch (error) {
		console.warn('Something went wrong');
	}
}


function getSuggestionByOption(users, profile, byOption) {
	return users.filter((user) => {
		return user[byOption] === profile[byOption];
	});
}

function fetchUsers() {
	return axios.get('../json/users.json');
}

function* selectSuggestion(action) {
	const { suggestion, suggestions } = action;
	suggestions.map((item, index) => {
		if (item.type === suggestion.type) {
			item.checked = !item.checked;
		}
	});
	yield put({ type: actions.SET_SUGGESTIONS, suggestions: suggestions });
}

export { suggestionsSaga, selectSuggestionSaga };