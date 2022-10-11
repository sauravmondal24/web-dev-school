import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './Banner';

const Header = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-light py-3">
				<div class="container">
					<Link className="navbar-brand fw-bolder fs-3 text-primary" to="/">
						WEB DEV SCHOOL
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link to="/" class="nav-link fw-bold fs-5" aria-current="page">
									Topics
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/statistics" class="nav-link fw-bold fs-5">
									Statistics
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/blog" class="nav-link fw-bold fs-5">
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
