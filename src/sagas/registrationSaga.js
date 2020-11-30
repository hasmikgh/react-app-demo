import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from "../actions/actions";
import axios from "axios";

function* registrationDataSaga() {
	yield takeEvery(actions.get.registrationData, getRegistrationData);
}

function* getRegistrationData() {
	try {
		const response = yield call(fetchRegistrationData);
		yield put({ type: actions.set.registrationData, registrationData: response.data });

	} catch (error) {
		console.warn('Something went wrong');
	}
}

function fetchRegistrationData() {
	return axios.get('../json/registrationData.json');
}

export { registrationDataSaga };