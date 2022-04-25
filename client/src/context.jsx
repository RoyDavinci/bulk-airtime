import React, { useState, useContext } from "react";
const AirtimeContext = React.createContext();

const AirtimeProvider = ({ children }) => {
	const [data, setData] = useState([]);

	return (
		<AirtimeContext.Provider value={{ data, setData }}>
			{children}
		</AirtimeContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AirtimeContext);
};

export { AirtimeContext, AirtimeProvider };
