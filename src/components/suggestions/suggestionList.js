import React from "react";
import { ListGroup } from "react-bootstrap";

const SuggestionList = (props) => {

	return (
		<>
			<ListGroup>
				{
					props.options.map((option, index) => {
						const {
							firstName,
							lastName,
							country,
							city,
							department,
							jobTitle
						} = option;
						return <ListGroup.Item key={index}>
							{firstName} {lastName} {country} {city} {department} {jobTitle}
						</ListGroup.Item>
					})
				}
			</ListGroup>
		</>
	)
};

export default SuggestionList;