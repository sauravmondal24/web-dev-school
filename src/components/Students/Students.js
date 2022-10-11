import React from 'react';
import './Students.css';

const Students = () => {
	return (
		<div className="container pb-5">
			<h4 className="pt-md-5 fs-1 border-bottom border-3 w-50 text-center m-auto border-success pb-2 text-primary fw-bold">
				Job placement success
			</h4>

			<div className=" row justify-content-between g-4 my-3">
				<div className="col-md-4 ">
					<div className="text-center rounded p-5 studentCard">
						<img
							style={{ width: '50px' }}
							className="img-fluid m-auto"
							src="https://www.programming-hero.com/img/document.png"
							alt=""
						/>
						<h1 className="fs-1 text-white">500+</h1>
						<h5 className="text-light">Connected companies</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="text-center p-5 rounded studentCard">
						<img
							style={{ width: '50px' }}
							className="img-fluid m-auto"
							src="https://www.programming-hero.com/img/file.png"
							alt=""
						/>
						<h1 className="fs-1 text-white">1000+</h1>
						<h5 className="text-light">Job placement worldwide</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className=" rounded text-center p-5 studentCard">
						<img
							style={{ width: '50px' }}
							className="img-fluid m-auto"
							src="https://www.programming-hero.com/img/users.png"
							alt=""
						/>
						<h1 className="fs-1 text-white">12+</h1>
						<h5 className="text-light">Dedicated Job Placement Manager</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Students;
