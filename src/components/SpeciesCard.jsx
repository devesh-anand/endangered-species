import React from "react";
import "./speciesCard.css";

const SpeciesCard = ({Name, sName, location, population, image, audio, index}) => {
	return (
		<div className="species-card">
			<div className="species-img">
				<img src={image} alt="" />
			</div>
			<div className="species-content">
				<div id="species-rank">{index+1}</div>
				<h4>{Name}</h4>
				<div className="species-details">
					<p>Scientific Name: {sName}</p>
					<p>Population: {population}</p>
                    <p>Found in: {location}</p>
				</div>
			</div>
		</div>
	);
};

export default SpeciesCard;
