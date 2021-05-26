import React, { useRef, useState } from 'react';
import Question from './Question';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function CreateSurvey() {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [numQuestions, setNumQuestions] = useState(1);
	const [loading, setLoading] = useState(false);

	const emailRef = useRef();
	const { currentUser } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		// try {
		// 	setMessage('');
		// 	setError('');
		// 	setLoading(true);
		// 	// await resetPassword(emailRef.current.value);
		// 	setMessage('');
		// } catch {
		// 	setError('Failed to create survey :(');
		// }

		// setLoading(false);
	}

	function addQuestion(e) {
		setNumQuestions((prevNumQuestions) => prevNumQuestions + 1);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Create Survey</h2>
					<div>
						<h4>ToDo</h4>
						<ul>
							<del>
								<li>Add Question & Answer ID's</li>
							</del>
							<li>Switch to useReducer for answer state</li>
							<li>
								Fix duplication of last answer choice when saving questions
							</li>
							<li>Stylistic Changes</li>
							<li>Add firestore to save surveys</li>
						</ul>
					</div>
					{error && <Alert variant='danger'>{error}</Alert>}
					{message && <Alert variant='success'>{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='title'>
							<Form.Label>Survey Title</Form.Label>
							<Form.Control type='text' required />
						</Form.Group>
						{Array.from({ length: numQuestions }).map((question) => (
							<Question key={uuid()} />
						))}
						<div className='w-100 mt-2 btn btn-info' onClick={addQuestion}>
							Add Question
						</div>
						<Button disabled={loading} className='w-100 mt-2' type='submit'>
							Complete Survey
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/'>Back to Dashboard</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}
