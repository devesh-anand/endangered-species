import React from "react";
import "./App.css";
import Slider from './components/slider';
import Navbar from './components/Navbar.jsx';

import Donation from "./components/Donation";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Donation/>
    </div>
  );
}

export default App;
