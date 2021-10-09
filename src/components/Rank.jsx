import React from "react";
import "./rank.css";
import SpeciesCard from "./SpeciesCard";
import SpeciesData from "./data.json";
import { useState } from "react";

const Rank = () => {
	const [sData, setSData] = useState(SpeciesData);
	console.log(sData);

	return (
		<>
			<div className="rank-body" id="rank">
				<h2>The 10 most Endangered species in India</h2>
				<div className="species-list">
					{sData.map((data, index) => {
						return <SpeciesCard Name={data.name} 
											sName={data.sName} 
											location={data.location} 
											image={data.image}
											population={data.population}
											audio={data.audio}
											index={index}
											key={data.name} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Rank;
