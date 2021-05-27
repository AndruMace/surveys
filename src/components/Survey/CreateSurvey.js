import React, { useRef, useState } from 'react';
import Question from './Question';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useParams } from 'react-router-dom';
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

	let { title } = useParams();

	return (
		<>
			<div>
				<h4>ToDo</h4>
				<ul>
					<del>
						<li>Add Question & Answer ID's</li>
					</del>
					<del>
						<li>Switch to useReducer for answer state</li>
					</del>
					<li>Fix duplication of last answer choice when saving questions</li>
					<li>Stylistic Changes</li>
					<li>Add firestore to save surveys</li>
				</ul>
			</div>
			<Card>
				<Card.Body>
					{error && <Alert variant='danger'>{error}</Alert>}
					{message && <Alert variant='success'>{message}</Alert>}
					<h2>{title}</h2>
					<Form onSubmit={handleSubmit}>
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
