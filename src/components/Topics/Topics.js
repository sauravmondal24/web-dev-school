import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
	const { data } = useLoaderData();
	console.log(data);
	return (
		<div>
			<h2>Quiz of {data.name}</h2>
		</div>
	);
};

export default Topics;
