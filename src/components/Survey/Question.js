import React, { useState, useRef, useReducer } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Answer from './Answer';
import { v4 as uuid } from 'uuid';

export default function Question() {
	const [answerState, dispatch] = useReducer(reducer, [
		{
			numAnswers: 0,
			answerType: 'plain text',
			answerContent: '',
		},
	]);

	const [isSaved, setIsSaved] = useState(false);
	const inputRef = useRef();

	function reducer(answerState, action) {
		switch (action.type) {
			case 'add answer':
				return { ...answerState, numAnswers: answerState.numAnswers + 1 };
			case 'answer type changed':
				return { ...answerState, answerType: action.payload };
			case 'answer content updated':
				return { ...answerState, answerContent: action.payload };
			default:
				throw new Error();
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function addAnswer() {
		dispatch({ type: 'add answer' });
		inputRef.current.value = '';
	}

	function selectionChanged(event) {
		dispatch({ type: 'answer type changed', payload: event.target.id });
	}

	function answerContentChanged(event) {
		dispatch({ type: 'answer content updated', payload: event.target.value });
	}

	function saveQuestion() {
		console.info(`
		Answer Information :::
		numAnswers: ${answerState.numAnswers}
		answerType: ${answerState.answerType}
		answerContent: ${answerState.answerContent}
		--FIN--
		`);
		setIsSaved(true);
	}

	if (isSaved) {
		return (
			<>
				<Card className='m-2 bg-light'>
					<Card.Body>
						<h3>Question Title Here</h3>
						{Array.from({ length: answerState.numAnswers }).map((_, index) => (
							<Answer
								type={answerState.answerType}
								content={answerState.answerContent}
								key={uuid()}
							/>
						))}
					</Card.Body>
				</Card>
			</>
		);
	} else {
		return (
			<>
				<Card className='m-2 bg-light'>
					<Card.Body>
						<Form onSubmit={handleSubmit}>
							<Form.Group id='title'>
								<Form.Label>Question Title</Form.Label>
								<Form.Control type='text' required />
							</Form.Group>
							{Array.from({ length: answerState.numAnswers }).map(
								(_, index) => (
									<Answer
										type={answerState.answerType}
										content={answerState.answerContent}
									/>
								)
							)}
							<Form.Group className='mt-4'>
								<div className='mb-3'>
									<h4>Type of Answers:</h4>
								</div>
								<Form.Check
									inline
									label='Plain Text'
									name='answerType'
									type='radio'
									id='plain text'
									checked={
										answerState.answerType === 'plain text' ? true : false
									}
									onChange={selectionChanged}
								/>
								<Form.Check
									inline
									label='Radio'
									name='answerType'
									type='radio'
									id='radio'
									checked={answerState.answerType === 'radio' ? true : false}
									onChange={selectionChanged}
								/>
								<Form.Check
									inline
									label='Checkbox'
									name='answerType'
									type='radio'
									id='checkbox'
									checked={answerState.answerType === 'checkbox' ? true : false}
									onChange={selectionChanged}
								/>
							</Form.Group>
							<Form.Group id='answer-content'>
								<Form.Label>Answer Label:</Form.Label>
								<Form.Control
									onChange={answerContentChanged}
									type='text'
									required
									ref={inputRef}
								/>
							</Form.Group>
							<div
								className='d-flex justify-content-center mt-2 btn btn-info'
								onClick={addAnswer}
							>
								Add Answer
							</div>
							<div
								className='d-block w-100 mt-2 btn btn-primary'
								onClick={saveQuestion}
							>
								Save Question
							</div>
						</Form>
					</Card.Body>
				</Card>
			</>
		);
	}
}
