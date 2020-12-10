import React from "react";
import { Row, Jumbotron, Button, Container } from 'react-bootstrap';
import history from "../history";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Profile = () => {
	const { t } = useTranslation(['translation', 'lang']);
	const profile = useSelector(state => state.profile);

	const { firstName, lastName } = profile;

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Jumbotron>
					<h1>{t('lang:profile:welcome')} {firstName} {lastName}</h1>
					<Button variant="primary"
						onClick={() => history.push('./suggestions')}>Edit Suggestions
					</Button>
				</Jumbotron>
			</Row>
		</Container>
	);
};

export default Profile;