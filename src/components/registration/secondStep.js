import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../actions/actions";

const SecondStep = () => {
	const dispatch = useDispatch();
	const { registrationData } = useSelector(state => state.registrationData);
	const profile = useSelector(state => state.profile);
	const { countries, jobTitles, departments} = registrationData;
	const { country, city, department, jobTitle } = profile;
	/*
	* check if country selected
	* after country select set cities select box
	* */
	const [isCountrySelected, countrySelect] = useState(false);
	const [cities, setCities] = useState([]);

	const onChange = (event) => {
		const { id, value } = event.target;
		dispatch({type: actions.set[id], [id]: value});

		if (id === 'country') {
			setCities([]);
			countrySelect(true);
		}
	};

	useEffect(() => {
		const country = countries.filter((country) => {
			return country.name === profile.country;
		});
		setCities(country[0].cities);
	}, [isCountrySelected, profile.country]);

	return (
		<>
			<Form.Group controlId="country">
				<Form.Label>Country</Form.Label>
				<Form.Control as="select" value={country} onChange={ (e) => onChange(e) }>
					{
						countries.map((country, index) => {
							return <option key={index} value={country.name} >{country.name}</option>
						})
					}
				</Form.Control>
			</Form.Group>

			<Form.Group controlId="city">
				<Form.Label>City</Form.Label>
				<Form.Control as="select" value={city}  onChange={ (e) =>  onChange(e) }>
					<option/>
					{
						cities.map((city, index) => {
							return <option key={index} value={city}>{city}</option>
						})
					}
				</Form.Control>
			</Form.Group>

			<Form.Group controlId="department">
				<Form.Label>Department</Form.Label>
				<Form.Control as="select" value={department}  onChange={ (e) =>  onChange(e) }>
					{
						departments.map((name, index) => {
							return <option key={index}>{name}</option>
						})
					}
				</Form.Control>
			</Form.Group>

			<Form.Group controlId="jobTitle">
				<Form.Label>Job</Form.Label>
				<Form.Control as="select" value={jobTitle} onChange={ (e) =>  onChange(e) }>
					{
						jobTitles.map((title, index) => {
							return <option key={index}>{title}</option>
						})
					}
				</Form.Control>
			</Form.Group>
		</>
	);
};

export default SecondStep;