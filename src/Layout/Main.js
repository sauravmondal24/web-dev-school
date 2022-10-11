import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Students from '../components/Students/Students';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Hero></Hero>
			<Students></Students>
			<Footer></Footer>
		</div>
	);
};

export default Main;
