import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar.jsx';
import Slider from './components/slider';
import Rank from './components/Rank';
import Donation from './components/Donation';


function App() {
	return (
		<>
			<Router>
			<Navbar/>
<<<<<<< HEAD
			{/* <Slider/> */}
			<Rank/>
			{/* <Donation/> */}
=======
				<Switch>
					<Route path="/" exact component={Slider} />
					<Route exact path="/rank" component={Rank} />
					<Route exact path="/donate" component={Donation} />
				</Switch>
			</Router>
>>>>>>> d531958b607864f9464cfa7ac1329e51509be636
		</>
	);
}

export default App;
