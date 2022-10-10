import React from 'react';

const CourseList = ({ courseItem }) => {
	// console.log(courseItem);
	const { name } = courseItem;

	return (
		<div>
			<h2>Name {name}</h2>
			<h3>this is course list page</h3>
		</div>
	);
};

export default CourseList;
