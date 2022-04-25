import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context";
import axios from "axios";

const Request = () => {
	const { data } = useGlobalContext();
	const [state, setState] = useState([]);
	console.log(state);
	const handleSubmit = async (e) => {
		e.preventDefault();
		let { data } = await axios.post("http://localhost:5000/airtime", {
			details: state,
		});
		console.log(data);
	};

	const handleChange = (id) => (e) => {
		const { name, value } = e.target;
		setState((state) =>
			state.map((data) =>
				data.id === id
					? {
							...data,
							[name]: value,
					  }
					: data
			)
		);
	};

	const handleSelect = (id) => (e) => {
		let { name, value } = e.target;

		//sorry hacking my way through everything

		const dataID =
			value === "airtel"
				? (value = "MFIN-1-OR")
				: value === "mtn"
				? (value = "MFIN-5-OR")
				: value === "glo"
				? (value = "MFIN-6-OR")
				: (value = "MFIN-2-OR");
		setState((state) =>
			state.map((data) =>
				data.id === id
					? {
							...data,
							[name]: dataID,
					  }
					: data
			)
		);
	};

	useEffect(() => {
		setState(data);
	}, [data]);
	return (
		<div>
			<Header></Header>
			<form action='' onSubmit={handleSubmit}>
				{state?.map((item, index) => {
					return (
						<div key={item.id}>
							<p>{item.number}</p>
							<select
								name='provider'
								id=''
								value={item.provider}
								onChange={handleSelect(item.id)}
								required
							>
								<option value='Select A Provider'>select a provider</option>
								<option value='airtel'>Airtel</option>
								<option value='mtn'>Mtn</option>
								<option value='glo'>Glo</option>
								<option value='9mobile'>9mobile</option>
							</select>
							<label htmlFor=''>
								Amount:{" "}
								<input
									type='text'
									name='value'
									value={item.value}
									onChange={handleChange(item.id)}
									required
								/>
							</label>
						</div>
					);
				})}
				<button className='btn btn-info'>Send</button>
			</form>
		</div>
	);
};

export default Request;
