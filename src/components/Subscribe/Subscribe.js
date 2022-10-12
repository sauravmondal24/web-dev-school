import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
	return (
		<div style={{ backgroundColor: '#D8FFF2' }} className=" py-5 my-5">
			<div className="container">
				<h2 className="text-primary fs-1 fw-bold">Subscribe</h2>
				<h6>Subscribe our newsletter to stay updated every moment.</h6>
				<div class="input-group m-auto my-3 subscribeInput">
					<input
						type="text"
						className="form-control py-2"
						placeholder="Enter a valid email address"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<button class="btn btn-success px-3" type="button" id="button-addon2">
						SUBMIT
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
