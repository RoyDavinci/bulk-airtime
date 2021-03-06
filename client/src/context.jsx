import React, { useState, useContext } from "react";
const AirtimeContext = React.createContext();

const AirtimeProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [bundle, setBundle] = useState([]);
	const [numbers, setNumbers] = useState([]);

	return (
		<AirtimeContext.Provider
			value={{ data, setData, bundle, setBundle, numbers, setNumbers }}
		>
			{children}
		</AirtimeContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AirtimeContext);
};

export { AirtimeContext, AirtimeProvider };
