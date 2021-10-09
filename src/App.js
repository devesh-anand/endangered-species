import React from "react";
import "./App.css";
import Navbar from './components/Navbar.jsx';
import Slider from './components/slider';
import Rank from './components/Rank';
import About from "./components/About";


function App() {

	return (
		<>
			<Navbar/>
			<Slider/>
			<Rank/>
			<About/>
		</>
	);
}

export default App;
