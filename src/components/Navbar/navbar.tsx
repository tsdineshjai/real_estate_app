import React from "react";
import "./navbar.scss";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<nav>
			<div className="left">
				<a className="logo">
					<img src="logo.png" alt="" />
					<span>TaSri_Estate</span>
				</a>
				<section className="navsubgroup">
					<a>Home</a>
					<a>About</a>
					<a>Contact</a>
					<a>Agents</a>
				</section>
			</div>
			<div className="right">
				<a> Sign In</a>
				<a className="signup">Sign Up</a>
			</div>

			<img
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className="menu"
				src="menu.png"
				alt="hamburger-menu"
			/>

			<nav className={isMenuOpen ? "showmenu active" : "showmenu"}>
				<a>Home</a>
				<a>About</a>
				<a>Contact</a>
				<a>Agents</a>
				<a>Sign In</a>
				<a>Sign Up</a>
			</nav>
		</nav>
	);
}

export default Navbar;
