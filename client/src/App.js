import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Data from "./pages/Data";
import BuyAirtime from "./pages/BuyAirtime";
import BuyData from "./pages/BuyData";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/request' element={<Request />}></Route>
					<Route path='/data' element={<Data />}></Route>
					<Route path='/buy-data' element={<BuyData />}></Route>
					<Route path='/airtime' element={<BuyAirtime />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
