import React, { useEffect } from "react";
import { Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import history from './../history';
import * as actions from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SuggestionList from "./suggestionList";

const SuggestionContainer = () => {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.profile);
	const { suggestions } = useSelector(state => state.suggestions);
	const profileSuggestions = profile.suggestions;

	useEffect(() => {
		if (!profileSuggestions.length) {
			dispatch({ type: actions.GET_SUGGESTIONS, profile });
		}
	}, []);

	const onChange = (suggestion) => {
		dispatch({ type: actions.SELECT_SUGGESTION, suggestion, suggestions });
	};

	const setProfileSuggestions = () => {
		/*
		* in future complete registration will additional actions
		* besides updating suggestions
		* */
		dispatch({ type: actions.SET_PROFILE_SUGGESTIONS, suggestions });
		history.push('/profile');
	};

	const byOptions = profileSuggestions.length ? suggestions : profileSuggestions;
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Jumbotron>
					<h1>Select Suggestions for your profile</h1>
					<p>Press button to complete your registration</p>
					<Row>
						{
							suggestions?.length && suggestions.map((suggestion, index) => {
								return <Col key={index}>
									<input type="checkbox" checked={suggestion.checked} onChange={ () => { onChange(suggestion)} } />
									<label>{suggestion.type}</label>
									<SuggestionList {...suggestion}/>
								</Col>
							})
						}
					</Row>
					<p className="float-right">
						<Button variant="primary"
										onClick={() => setProfileSuggestions()}>
							{profileSuggestions.length ? 'Update Suggestions' : 'Complete Registration'}
						</Button>
					</p>
				</Jumbotron>
			</Row>
		</Container>
	)
};

export default SuggestionContainer;