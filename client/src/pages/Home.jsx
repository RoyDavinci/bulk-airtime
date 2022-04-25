import React, { useState } from "react";
import "./home.css";
import Header from "../components/Header";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Header></Header>
			<div className='btnContainer mt-4'>
				<Link to='/data' className='btn btn-primary mx-3'>
					Buy Data
				</Link>
				<Link to='/airtime' className='btn btn-info'>
					Buy Airtime
				</Link>
			</div>
		</div>
	);
};

export default Home;
