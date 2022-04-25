import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import Header from "../components/Header";

const BuyData = () => {
	const [item, setItem] = useState("");
	const [bundles, setBundles] = useState([]);
	const [product, setProduct] = useState([]);
	const { bundle, numbers } = useGlobalContext();
	console.log(product, bundle, numbers);

	const handleSelect = (e) => {
		const { name, value } = e.target;
		const item = bundles[0].items.filter((item) => item.allowance === value);
		setProduct(item);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post(
			"http://localhost:5000/get-data/buy-data",
			{ numbers: numbers, item: product[0]?.product_id }
		);
		console.log(data);
	};
	useEffect(() => {
		setBundles(bundle);
	}, [bundle]);

	return (
		<div>
			<Header></Header>
			<form
				onSubmit={handleSubmit}
				action=''
				className='d-flex align-items-center flex-column justify-content-center'
			>
				<select name='data' id='' onChange={handleSelect}>
					{bundles[0]?.items.map((item, index) => {
						return (
							<option value={item.allowance} key={index}>
								{item.allowance}
							</option>
						);
					})}
				</select>
				<button className='btn btn-secondary d-block m-2'>Submit</button>
			</form>
		</div>
	);
};

export default BuyData;
