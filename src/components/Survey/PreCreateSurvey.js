import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function PreCreateSurvey() {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [surveyTitle, setSurveyTitle] = useState('');

	const { currentUser } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
	}

	function updateTitle(e) {
		setSurveyTitle(e.target.value);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Create Survey</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					{message && <Alert variant='success'>{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='title'>
							<Form.Label>Survey Title</Form.Label>
							<Form.Control
								type='text'
								onChange={updateTitle}
								value={surveyTitle}
							/>
						</Form.Group>
						<div className='w-100 text-center mt-3 btn btn-primary'>
							<Link
								to={`/create-survey/${surveyTitle}`}
								style={{ textDecoration: 'none', color: 'white' }}
							>
								Continue
							</Link>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
}
