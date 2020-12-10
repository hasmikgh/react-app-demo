import "regenerator-runtime/runtime";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import reducers from "../reducers/reducers";
import rootSaga from "../sagas/sagas";
import Routes from "./Routes";
import { Alert } from 'react-bootstrap';
import '../i18n';
import { useTranslation } from "react-i18next";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
	const { t, i18n } = useTranslation(['translation', 'lang']);
	const onChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<>
			<Alert variant="primary" className="align-content-center">
				<Alert.Heading>{t('lang:header:title')}</Alert.Heading>
				Small POC for registration
				<Alert.Link href="/" className="float-right">Home</Alert.Link>
				<select onChange={(e) => onChange(e)}>
					<option value='en'>English</option>
					<option value='rus'>Russian</option>
				</select>
			</Alert>
			<Routes/>
		</>
	);
};

export default App;

const wrapper = document.getElementById("root");
wrapper ?
	ReactDOM.render((
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={null}>
					<App/>
				</Suspense>
			</BrowserRouter>
		</Provider>
	), document.getElementById('root')) : false;