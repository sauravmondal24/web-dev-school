import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import CourseList from '../CourseList/CourseList';
import Banner from '../Header/Banner';

const Home = () => {
	const courseData = useLoaderData();
	console.log(courseData.length);

	return (
		<div>
			<Banner></Banner>
			<h3>This is Home page </h3>
			{/* {courseData.map((courseItem) => (
				<CourseList courseItem={courseItem}></CourseList>
			))} */}
		</div>
	);
};

export default Home;
