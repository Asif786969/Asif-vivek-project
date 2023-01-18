import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid" style={{ color: "white" }}>
				<Link className="navbar-brand" style={{ color: "white" }} >
					EBookies
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								style={{ color: "white" }}
								className="home nav-link active"
								aria-current="page"
								to="/home">
								<p>Home</p>
							</Link>
						</li>
						<div className="nav-item">
							<Link
								//style={{ color: "white" }}
								className="books nav-link"
								to="/book">
								My Books
							</Link>
						</div>
					</ul>

					<div className="nav-item">
						<Link className="login nav-link" to="/login">
							Login
						</Link>
					</div>

					<div className="nav-item">
						<Link className="signup nav-link" to="/signup">
							Signup
						</Link>
					</div>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
