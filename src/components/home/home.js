import React  from "react";
import { Button, Container, Jumbotron, Row } from "react-bootstrap";
import history from './../history';
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation(['translation', 'lang']);

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Jumbotron>
					<div>
						<h1>{t('lang:title', 'Registration stage')}</h1>
						<p>{t('lang:home:content.text')}</p>
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