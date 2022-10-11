import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import react from '../../img/react.jpg';
import JavaScript from '../../img/javascript.jpg';
import css from '../../img/css.jpg';
import git from '../../img/git.jpg';

function Banner() {
	return (
		<Carousel fade>
			<Carousel.Item className="bannerPic">
				<img
					className="d-block w-100 img-fluid"
					src={react}
					alt="First slide"
				/>
				<Carousel.Caption className="sliderInfo text-start">
					<h2 className="title">
						A JavaScript library for building user interfaces
					</h2>
					<p className="subTitle">
						React · Declarative. React makes it painless to create interactive
						UIs. · Component-Based. Build encapsulated components that manage
						their own state, then compose
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="bannerPic">
				<img
					className="d-block w-100 img-fluid"
					src={JavaScript}
					alt="Second slide"
				/>

				<Carousel.Caption className="sliderInfo text-start">
					<h2 className="title">
						JavaScript is the world's most popular programming language
					</h2>
					<p className="subTitle">
						JavaScript is a scripting language that enables you to create
						dynamically updating content, control multimedia, animate images,
						and pretty much everything else.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="bannerPic">
				<img className="d-block w-100 img-fluid" src={css} alt="Third slide" />

				<Carousel.Caption className="sliderInfo text-start">
					<h3 className="title">CSS stands for Cascading Style Sheets</h3>
					<p className="subTitle">
						Cascading Style Sheets (CSS) is a stylesheet language used to
						describe the presentation of a document written in HTML or XML
						(including XML dialects such as SVG, MathML or XHTML).
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="bannerPic">
				<img className="d-block w-100 img-fluid" src={git} alt="Third slide" />

				<Carousel.Caption className="sliderInfo text-start">
					<h3 className="title">
						Git is a distributed, open-source version control system (VCS)
					</h3>
					<p className="subTitle">
						Git is free and open source software for distributed version
						control: tracking changes in any set of files, usually used for
						coordinating work among programmers collaboratively developing
						source code during software development.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Banner;
