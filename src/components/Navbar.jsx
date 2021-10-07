import React from 'react'

const Navbar = () => {

    const navbar = document.querySelector('.nav-link');


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" id="home" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="donate" href="#">
									Donate
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="rank" href="#">
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
