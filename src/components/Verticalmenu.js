import Icon from "./Icon";
import Yoga from "../assets/icons/yoga.svg";
import Swimming from "../assets/icons/swimming.svg";
import Bike from "../assets/icons/bike.svg";
import Fitness from "../assets/icons/fitness.svg";

function Verticalmenu() {
	return (
		<nav className="Verticalmenu">
			<div className="Verticalmenu__icon">
				<Icon
					img={Yoga}
					alt="Yoga"
					backgroundColor="white"
					icontype="vertical"
				/>
				<Icon
					img={Swimming}
					alt="Natation"
					backgroundColor="white"
					icontype="vertical"
				/>
				<Icon
					img={Bike}
					alt="Vélo"
					backgroundColor="white"
					icontype="vertical"
				/>
				<Icon
					img={Fitness}
					alt="Fitness"
					backgroundColor="white"
					icontype="vertical"
				/>
			</div>
			<p className="Verticalmenu__copyright">Copyright, SportSee 2020</p>
		</nav>
	);
}

export default Verticalmenu;
