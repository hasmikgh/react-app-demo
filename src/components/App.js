import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import reducers from "../reducers/reducers";
import rootSaga from "../sagas/sagas";
import Routes from "./Routes";
import { Alert } from 'react-bootstrap';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {

	return (
		<>
			<Alert variant="primary" className="align-content-center">
				<Alert.Heading>Welcome to React Application</Alert.Heading>
				Small POC for registration
				<Alert.Link href="/" className="float-right">Home</Alert.Link>
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
			<App/>
			</BrowserRouter>
		</Provider>
	), document.getElementById('root')) : false;