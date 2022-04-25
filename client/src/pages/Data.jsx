import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";

const Data = () => {
	const [network, setNetwork] = useState("");
	const [number, setNumber] = useState("");
	const navigate = useNavigate();
	const { setNumbers, setBundle } = useGlobalContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const arr = number.split("\n");
		let items = [];
		let details = {};
		arr.forEach((item) => {
			details.id = uuidv4();
			details.number = item;
			items.push(details);
		});
		const { data } = await axios.post("http://localhost:5000/get-data/data", {
			network: network,
		});
		setBundle([data]);
		setNumbers(items);
		navigate("/buy-data");
	};

	return (
		<div>
			<Header></Header>
			<p>welcome</p>
			<h1>Please select a network</h1>
			<form action='' onSubmit={handleSubmit}>
				<textarea
					name='numbers'
					id=''
					cols='30'
					rows='10'
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				></textarea>
				<select
					name='network'
					value={network}
					onChange={(e) => setNetwork(e.target.value)}
				>
					<option value='Select A network'>Select A Provider</option>
					<option value='9mobile'>9mobile</option>
					<option value='mtn'>Mtn</option>
					<option value='glo'>Glo</option>
					<option value='airtel'>Airtel</option>
				</select>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default Data;
