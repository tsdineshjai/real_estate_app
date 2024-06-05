import React from "react";
import "./searchbar.scss";

const buttons = ["buy", "rent"];

function Searchbar() {
	const [selected, setSelected] = React.useState("");

	return (
		<div className="searchBar">
			<div className="buyandRent">
				{buttons.map((btn) => (
					<button
						className={selected == btn ? "active" : ""}
						key={btn}
						onClick={() => setSelected(btn)}
					>
						{btn}
					</button>
				))}
			</div>

			<div className="form">
				<input type="text" placeholder="City Location" />
				<input min={1} max={1000000} placeholder="Min Price" />
				<input min={10} max={1000000} placeholder="Max Price" />

				<button className="search">
					<img src="search.png" alt="" />
				</button>
			</div>
		</div>
	);
}

export default Searchbar;
