import React from "react";
import { Form, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { actions } from "../../actions/actions";

const FistStep = (props) => {
	const dispatch = useDispatch();
	const { firstName, lastName, gender, email, password } = props;

	const onChange = (event) => {
		const { id, value } = event.target;
		dispatch({type: actions.set[id], [id]: value});
	};

	const onChangeGender = (event) => {
		const { id, name } = event.target;
		dispatch({type: actions.set[id], [id]: name});
	};

	return (
			<>
				<Form.Row>
					<Form.Group as={Col} controlId="firstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control placeholder="Enter Name" value={firstName} onChange={(e) => onChange(e)}/>
					</Form.Group>

					<Form.Group as={Col} controlId="lastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control value={lastName} onChange={(e) => onChange(e)} placeholder="Enter last name"/>
					</Form.Group>

					<Form.Group as={Col} controlId="gender">
						<Form.Label>Gender</Form.Label>
						<Form.Check
							onChange={ (e) => { onChangeGender(e)} }
							type="radio"
							label="Female"
							checked={gender === 'female'}
							name="female"
						/>
						<Form.Check
							type="radio"
							label="Male"
							onChange={ (e) => { onChangeGender(e)} }
							checked={gender === 'male'}
							name="male"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control value={email} onChange={ (e)=> { onChange(e) }} type="email" placeholder="Enter email"/>
					</Form.Group>

					<Form.Group as={Col} controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control value={password} onChange={ (e) => { onChange(e) }} type="password" placeholder="Password"/>
					</Form.Group>
				</Form.Row>
			</>
	);
};

export default FistStep;