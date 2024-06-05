import { SearchBar } from "../SearchBar";
import "./homepage.scss";

function Homepage() {
	return (
		<section className="homepage">
			<div className="textContainer">
				<h1>Find Real Estate & Get Your Dream Place</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias
					fugit ab aperiam voluptatum ut. Debitis eaque officiis laudantium
					iusto exercitationem voluptate quo. In, amet necessitatibus eveniet
					harum sunt consequuntur!
				</p>

				<SearchBar />
				<section>
					<div className="box">
						<h2>16+</h2>
						<h5>Years of Experience</h5>
					</div>
					<div className="box">
						<h2>200</h2>
						<h5>Awards Gained</h5>
					</div>
					<div className="box">
						<h2>1200+</h2>
						<h5>Property Ready</h5>
					</div>
				</section>
			</div>
			<div className="imageContainer">
				<img src="bg.png" alt="" />
			</div>
		</section>
	);
}

export default Homepage;
