import React from "react";
import "./speciesCard.css";
import Card from "react-bootstrap/Card";

const SpeciesCard = () => {
	return (
		<div className="species-card">
			<div className="species-img">
				<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg" alt="" />
			</div>
			<div className="species-content">
				<div id="species-rank">1</div>
				<h4>Bengal Tiger</h4>
				<div className="species-details">
					<p>Scientific Name: name</p>
					<p>Population: 1020</p>
                    <p>Found in: Maharashtra, Madhya Pradesh, Rajasthan</p>
				</div>
			</div>
		</div>
	);
};

export default SpeciesCard;
