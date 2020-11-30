import { all } from 'redux-saga/effects';
import { registrationDataSaga } from "./registrationSaga";
import { suggestionsSaga, selectSuggestionSaga } from "./suggestionsSaga";
import { profileSaga } from "./profileSaga";

export default function* rootSaga() {
	yield all([
		registrationDataSaga(),
		suggestionsSaga(),
		selectSuggestionSaga(),
		profileSaga(),
	]);
}
