import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const CourseList = ({ topics }) => {
	const { id, name, logo, total } = topics;

	return (
		<div className="py-4 courseList">
			<div
				style={{ backgroundColor: 'rgba(180, 255, 230, 0.521)' }}
				class="card courseItems shadow"
			>
				<img src={logo} class="card-img-top" alt="" />
				<div class="card-body">
					<h3 class="card-title">{name}</h3>
					<p>Total Quiz {total}</p>

					<Link to={`/topics/${id}`} href="#" className="btn btn-primary">
						Start Practice <FontAwesomeIcon icon={faRightLong} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseList;
