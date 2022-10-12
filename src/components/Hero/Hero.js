import React from 'react';
import Ratio from 'react-bootstrap/Ratio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="bg-light">
			<div className="container py-5 my-5 ">
				<div className="row">
					<div className="col-md-6 text-start pt-md-5">
						<h1 className="fs-1 fw-bold">
							Our mission is to equip churches to fulfill the Great Commission.
						</h1>
						<p className="fs-5">
							Our world has never been more connected and we believe the Gospel
							can be more readily available to people all over the world through
							Free Church Websites’ church website builder.
						</p>
						<Link
							style={{ textDecoration: 'none' }}
							to="/blog"
							className=" text-success "
						>
							MORE ABOUT US
							<span>
								<FontAwesomeIcon icon={faRightLong} />
							</span>
						</Link>
					</div>
					<div className="col-md-6">
						<div
							className="rounded youtubeVideo"
							style={{ width: 560, height: 'auto' }}
						>
							<Ratio aspectRatio="4x3">
								<embed
									type="image/svg+xml"
									src="https://www.youtube.com/embed/j3MR-8ktxjs?"
								/>
							</Ratio>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
