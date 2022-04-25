import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/request' element={<Request />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
