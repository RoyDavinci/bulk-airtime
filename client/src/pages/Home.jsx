import React, { useState } from "react";
import "./home.css";
import Header from "../components/Header";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
	const [value, setValue] = useState("");
	const { setData } = useGlobalContext();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const arr = value.split("\n");
		const items = [];
		arr.forEach((item, index) => {
			let details = {};
			details.id = uuidv4();
			details.number = item;
			details.value = "";
			details.provider = "";
			items.push(details);
		});
		setData(items);
		navigate("/request");
	};

	return (
		<div>
			<Header></Header>
			<form action='' onSubmit={handleSubmit}>
				<label htmlFor='exampleFormControlTextarea1' className='form-label'>
					Example textarea
				</label>
				<textarea
					className='form-control'
					id='exampleFormControlTextarea1'
					rows='3'
					value={value}
					name='content'
					onChange={(e) => setValue(e.target.value)}
				></textarea>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Home;
