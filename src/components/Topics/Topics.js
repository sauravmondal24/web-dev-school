import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Topics = () => {
	const { data } = useLoaderData();
	const { name, questions } = data;
	return (
		<div>
			<div className="py-3">
				<h2 className="pt-md-5 fs-1 border-bottom border-3 w-50 text-center m-auto border-success pb-2 text-primary fw-bold">
					Quiz of {name}
				</h2>

				<div className="container py-3">
					{questions.map((questionList) => (
						<Question
							key={questionList.id}
							questionList={questionList}
						></Question>
					))}
				</div>
			</div>
		</div>
	);
};

export default Topics;
