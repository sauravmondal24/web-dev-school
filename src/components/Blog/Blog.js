import Accordion from 'react-bootstrap/Accordion';

function Blog() {
	return (
		<div className="container py-5">
			<h1 className="mb-5 fs-1 border-bottom border-3 w-50 text-center m-auto border-success pb-2 text-primary fw-bold">
				Frequently Asked Questions
			</h1>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<h4>what is the purpose of the react-router?</h4>
					</Accordion.Header>
					<Accordion.Body>
						React Router is a standard library for routing in React. It enables
						the navigation among views of various components in a React
						Application, allows changing the browser URL, and keeps the UI in
						sync with the URL.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<h4>How does context api work?</h4>
					</Accordion.Header>
					<Accordion.Body>
						The React Context API is a way for a React app to effectively
						produce global variables that can be passed around. This is the
						alternative to "prop drilling" or moving props from grandparent to
						child to parent, and so on. Context is also touted as an easier,
						lighter approach to state management using Redux.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<h4>What is useRef Hook in react?</h4>
					</Accordion.Header>
					<Accordion.Body>
						Essentially, useRef is like a “box” that can hold a mutable value in
						its .current property. You might be familiar with refs primarily as
						a way to access the DOM. If you pass a ref object to React with ,
						React will set its .current property to the corresponding DOM node
						whenever that node changes.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}

export default Blog;
