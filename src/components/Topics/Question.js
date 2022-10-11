import React from 'react';
import './Questine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ questionList }) => {
	const { question, options, correctAnswer } = questionList;

	let right;
	let wrong;
	const getRightAnswer = (item) => {
		if (correctAnswer === item) {
			right = alert('This is a right answer');
			// right = `green`;
			// console.log('This is a right answer');
		} else {
			wrong = alert('This is a wrong answer');
			// console.log('this is a wrong answer');
		}
		// {correctAnswer===item}
	};

	const rightAnsHandelar = () => {
		alert(correctAnswer);
	};
	return (
		<div
			style={{ backgroundColor: 'rgba(180, 255, 230, 0.521)' }}
			className="card my-4 w-50 m-auto p-3 shadow "
		>
			<div className="d-flex justify-content-between align-items-center">
				<h4> {question} </h4>

				<button onClick={rightAnsHandelar} className="btn text-success">
					<FontAwesomeIcon icon={faEye} />
				</button>
			</div>
			<div className="answerItem p-2 ">
				{options.map((item) => (
					<div className="card  m-1 d-flex questionItem ">
						<button
							onClick={() => getRightAnswer(item)}
							className="btn p-2 fw-semiBold fs-5"
							// className={correctAnswer === item ? `green` : 'red'}
						>
							{item}
							{right}
							{wrong}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Question;
