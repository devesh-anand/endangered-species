import React from "react";
import "./App.css";
import Navbar from './components/Navbar.jsx';
import Slider from './components/slider';
import Rank from './components/Rank';
import Donation from './components/Donation';


function App() {

	return (
		<>
			<Navbar/>
			<Slider/>
			<Rank/>
			<Donation/>
		</>
	);
}

export default App;
