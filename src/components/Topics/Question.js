import React from 'react';
import './Questine.css';

const Question = ({ questionList }) => {
	const { question, options } = questionList;
	return (
		<div className="card my-5 p-4 shadow">
			<h4> {question} </h4>
			<div className="answerItem p-4 ">
				{options.map((item) => (
					<div className="card p-2 m-2 shadow">
						<p className="fw-semiBold fs-5">{item}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Question;
