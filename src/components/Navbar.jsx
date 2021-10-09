import React from "react";

const Navbar = () => {
	const state = {
		rankstate: false,
		homestate: false,
		donatestate: false
	};
	const handleClick = () => {
		const pathname = window.location.pathname;
		if(pathname === "/rank"){
			state.rankstate = true;
		}else if(pathname === '/'){
			state.homestate = true;
		}else if(pathname === "/donate"){
			state.donatestate = true;
		}
	};

	handleClick();
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Endangered Species
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className={`nav-link ${state.homestate ? "active" : " "}`} id="home" onClick={()=>handleClick} aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className={`nav-link ${state.rankstate ? "active" : " "}`} id="rank" onClick={()=>handleClick} href="/rank">
									Rank
								</a>
							</li>
							<li className="nav-item">
								<a className={`nav-link ${state.donatestate ? "active" : " "}`} id="donate" onClick={()=>handleClick} href="/donate">
									Donate
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
