import React  from "react";
import { Button, Container, Jumbotron, Row } from "react-bootstrap";
import history from './../history';

const Home = () => {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Jumbotron>
					<div>
						<h1>Registration stage</h1>
						<p>Two step for personal data, and third one for suggestions.</p>
						<p className="justify-content-center">
							<Button variant="primary"
								onClick={() => history.push('./registration')}>Registration
							</Button>
						</p>
					</div>
				</Jumbotron>
			</Row>
		</Container>
	)
};

export default Home;