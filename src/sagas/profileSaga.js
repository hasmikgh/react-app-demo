import { put, takeEvery } from 'redux-saga/effects';
import * as actions from "../actions/actions";

function* profileSaga() {
	yield takeEvery(actions.SET_PROFILE_SUGGESTIONS, setProfileSuggestions);
}

function* setProfileSuggestions(action) {
	const suggestions = action.suggestions.filter((suggestion) => {
		return suggestion.checked;
	});
	yield put({ type: actions.SET_PROFILE_SUGGESTION, suggestions });
}

export { profileSaga };