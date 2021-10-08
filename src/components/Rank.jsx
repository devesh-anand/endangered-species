import React from "react";
import "./rank.css";
import SpeciesCard from "./SpeciesCard";

const Rank = () => {
	return (
		<>
			<div className="rank-body" id="rank">
				<h2>The 10 most Endangered species in India</h2>
				<div className="species-list">
					<SpeciesCard />
					<SpeciesCard />
					<SpeciesCard />
					<SpeciesCard />
					<SpeciesCard />
					<SpeciesCard />
					<SpeciesCard />
				</div>
			</div>
		</>
	);
};

export default Rank;
