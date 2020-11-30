import React, { useState, useEffect } from "react";
import { Form, Container, Row, Jumbotron, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import FistStep from "./fistStep";
import SecondStep from "./secondStep";
import history from "../history";
import { actions } from "../../actions/actions";

const Registration = () => {
	const [inFirstStep, setFirstStep] = useState(true);
	const profile = useSelector(state => state.profile);
	const dispatch = useDispatch();

	const selectSuggestions = (event) => {
		event.preventDefault();
		history.push("/suggestions");
	};

	useEffect(() => {
		dispatch({type: actions.get.registrationData});
	}, []);

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Jumbotron className="col-12 justify-content-center">
					<h1>{`Registration ${inFirstStep ? "First" : "Second" } Step`}</h1>
					<Form onSubmit={selectSuggestions}>
						{
							inFirstStep ? <FistStep {...profile} /> : <SecondStep />
						}
						{
							inFirstStep ?
								<Button className="float-right" variant="primary"
									onClick={(e) => { setFirstStep(false); e.preventDefault() } }>Next Step
								</Button> :
								<Button className="float-right" type="submit"  variant="primary">
									Select Suggestions
								</Button>
						}
						{
							!inFirstStep &&
							<Button className="float-left" variant="primary"
								onClick={(e) => { setFirstStep(true); e.preventDefault() }}>First Step
							</Button>
						}
					</Form>
				</Jumbotron>
			</Row>
		</Container>
	);
};

export default Registration;