import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<Link to="/">
				<img
					src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
					alt="This page is not Found 404"
				/>
			</Link>
		</div>
	);
};

export default Error;
