import React from 'react'
import Rank from './Rank';

const Navbar = () => {

    // const navbar = document.querySelector('.nav-link');


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid">
					<a className="navbar-brand" to="#">
						Endangered Species
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" id="home" aria-current="page" to="#slider">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="donate" to="#">
									Donate
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="rank" to="#rank">
									Rank
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </>
    )
}

export default Navbar
