import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Answer(props) {
	const [inputType, setInputType] = useState(props.type);
	const [content, setContent] = useState(props.content);

	switch (inputType) {
		case 'plain text':
			return (
				<div className='d-block'>
					<p>{content}</p>
					<Form.Group id='answer-text'>
						<Form.Control type='text' required />
					</Form.Group>
				</div>
			);
			break;
		case 'radio':
			return (
				<div className='d-block'>
					<p>{content}</p>
					<Form.Check inline name='answerRadio' type='radio' id='answerRadio' />
				</div>
			);
		case 'checkbox':
			return (
				<div className='d-block'>
					<p>{content}</p>
					<Form.Check
						inline
						name='answerRadio'
						type='checkbox'
						id='answerCheck'
					/>
				</div>
			);
		default:
			break;
	}
}
