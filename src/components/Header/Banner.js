import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

function Banner() {
	return (
		<Carousel fade>
			<Carousel.Item className="bannerPic">
				<img
					className="d-block w-100 m-auto bannerPic"
					src="https://intelog.net/wp-content/uploads/2019/05/Web-Development0.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h2>A JavaScript library for building user interfaces</h2>
					<p>
						React · Declarative. React makes it painless to create interactive
						UIs. · Component-Based. Build encapsulated components that manage
						their own state, then compose
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="bannerPic">
				<img
					className="d-block w-100 "
					src="https://ichef.bbci.co.uk/news/400/cpsprodpb/A1FA/production/_105966414_gettyimages-871919258.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h2>JavaScript is the world's most popular programming language</h2>
					<p>
						JavaScript is a scripting language that enables you to create
						dynamically updating content, control multimedia, animate images,
						and pretty much everything else.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="bannerPic">
				<img
					className="d-block w-100 bannerPic"
					src="https://talktobusiness.com/wp-content/uploads/2022/04/What-Is-Web-Development.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>CSS stands for Cascading Style Sheets</h3>
					<p>
						Cascading Style Sheets (CSS) is a stylesheet language used to
						describe the presentation of a document written in HTML or XML
						(including XML dialects such as SVG, MathML or XHTML).
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Banner;
