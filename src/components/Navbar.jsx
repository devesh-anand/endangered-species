import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="/">
						Endangered Species
					</a>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<Link to="/">
							<li className="nav-item">
								<a className="nav-link active" id="home" aria-current="page" href="/">
									Home
								</a>
							</li>
							</Link>

							<Link to="/rank">
							<li className="nav-item">
								<a className="nav-link" id="rank" href="/rank">
									Rank
								</a>
							</li>
							</Link>

							<Link to="/donate">
							<li className="nav-item">
								<a className="nav-link" id="donate" href="/donate">
									Donate
								</a>
							</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
        </>
    )
}

export default Navbar
