import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar.jsx';
import Slider from './components/slider';
import Rank from './components/Rank';
<<<<<<< HEAD
import About from "./components/About";
=======
import Donation from './components/Donation';
>>>>>>> 2b1b2a23694784ce0f9bb09d14e2c0f0c43f25a0


function App() {
	return (
		<>
			<Router>
			<Navbar/>
<<<<<<< HEAD
			<Slider/>
			<Rank/>
			<About/>
=======
				<Switch>
					<Route path="/" exact component={Slider} />
					<Route exact path="/rank" component={Rank} />
					<Route exact path="/donate" component={Donation} />
				</Switch>
			</Router>
>>>>>>> 2b1b2a23694784ce0f9bb09d14e2c0f0c43f25a0
		</>
	);
}

export default App;
