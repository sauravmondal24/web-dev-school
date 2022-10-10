import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import './Home.css';
import Banner from '../Header/Banner';

const Home = () => {
	const { data } = useLoaderData();

	return (
		<div>
			<Banner></Banner>
			<h2 className="pt-5 fs-1 border-bottom border-3 w-25 text-center m-auto border-success pb-2 text-primary fw-bold">
				Course List
			</h2>
			<div className="itemList container">
				{data.map((topics) => (
					<CourseList topics={topics}></CourseList>
				))}
			</div>
		</div>
	);
};

export default Home;
