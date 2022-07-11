import { getUserById } from "../services/Userservice";
import Clap from "../assets/Imgs/clap.png";
import calorie from "../assets/icons/calorie.svg";
import carbohydrate from "../assets/icons/carbohydrate.svg";
import lipid from "../assets/icons/lipid.svg";
import protein from "../assets/icons/protein.svg";
import React, { useEffect, useState } from "react";
import KeyData from "../components/keyData";
import Score from "../components/graphs/Score";

const Profile = () => {
	const [user, setuser] = useState({});

	useEffect(() => {
		getUserById(12).then(function (response) {
			setuser(response.data);
		});
	}, []);
	return (
		<div className="profile">
			<div className="userInfos">
				<h1 className="userInfos__title">
					Bonjour{" "}
					{user.userInfos && (
						<span className="userInfos__title__color">
							{user.userInfos.firstName}
						</span>
					)}
				</h1>
				<p className="userInfos__text">
					Félicitation ! Vous avez explosé vos objectifs hier !
					<img
						src={Clap}
						alt="applaudissements"
						className="userInfos__text__clap"
					></img>
				</p>
			</div>
			<div className="statContainer">
				<div>
					{/* activité */}
					<div className="charts">
						{/* perf */}
						{/* average */}
						<Score todayScore={user.todayScore || null} />
					</div>
					{user.keyData && (
						<div className="keyDataContainer">
							<KeyData
								element="Calories"
								count={user.keyData.calorieCount + "kCal"}
								img={calorie}
								backgroundColor="bg-red"
								alt="Calorie"
							/>
							<KeyData
								element="Protéines"
								count={user.keyData.proteinCount + "g"}
								img={protein}
								backgroundColor="bg-blue"
								alt="Protéines"
							/>
							<KeyData
								element="Glucides"
								count={user.keyData.carbohydrateCount + "g"}
								img={carbohydrate}
								backgroundColor="bg-yellow"
								alt="Glucides"
							/>
							<KeyData
								element="Lipides"
								count={user.keyData.lipidCount + "g"}
								img={lipid}
								backgroundColor="bg-pink"
								alt="Lipides"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Profile;
