import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="#">
					WEB DEV SCHOOL
				</a>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link active"
								aria-current="page"
								href="#"
							></Link>
						</li>
						<li className="nav-item">
							<Link to="/topics" className="nav-link" href="#">
								Topics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/statistics" className="nav-link" href="#">
								Statistics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link" href="#">
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		// <nav>
		// 	<Link to="/"></Link>
		// 	<Link to="/topics">Topics</Link>
		// 	<Link to="/statistics">Statistics</Link>
		// 	<Link to="/blog">Blog</Link>
		// </nav>
	);
};

export default Header;
