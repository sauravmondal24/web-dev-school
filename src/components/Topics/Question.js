import React from 'react';
import './Questine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questionList }) => {
	const { question, options, correctAnswer } = questionList;

	const notify = () => {
		toast.info(correctAnswer, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	let right;
	let wrong;

	const getRightAnswer = (item) => {
		if (correctAnswer === item) {
			right = alert('That is Correct answer');
		} else {
			wrong = alert('This is wrong answer');
		}
	};

	return (
		<div
			style={{ backgroundColor: 'rgba(180, 255, 230, 0.521)' }}
			className="card my-4  m-auto p-3 shadow questionList"
		>
			<div className="d-flex justify-content-between align-items-center">
				<h4> {question} </h4>

				<div>
					<button onClick={notify} className="btn text-success">
						<FontAwesomeIcon icon={faEye} />
					</button>
					<ToastContainer />
				</div>
			</div>
			<div className="answerItem p-2 ">
				{options.map((item) => (
					<div className="card  m-1 d-flex questionItem ">
						<button
							onClick={() => getRightAnswer(item)}
							className="btn p-2 fw-semiBold fs-5 "
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
