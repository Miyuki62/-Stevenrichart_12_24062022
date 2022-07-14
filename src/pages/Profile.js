import { getUserById } from "../services/UserService";
import { USER_ID } from "../assets/data/id";
import Clap from "../assets/Imgs/clap.png";
import calorie from "../assets/icons/calorie.svg";
import carbohydrate from "../assets/icons/carbohydrate.svg";
import lipid from "../assets/icons/lipid.svg";
import protein from "../assets/icons/protein.svg";
import React, { useEffect, useState } from "react";
import KeyData from "../components/keyData";
import Score from "../components/graphs/Score";
import Performance from "../components/graphs/Performance";
import AverageSessions from "../components/graphs/AverageSessions";
import Activity from "../components/graphs/Activity";

const Profile = () => {
	const [user, setuser] = useState({});

	useEffect(() => {
		getUserById(USER_ID[0].CLIENT_ID).then(function (response) {
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
					<Activity />
					<div className="charts">
						<AverageSessions />
						<Performance />
						<Score todayScore={user.todayScore || null} />
					</div>
				</div>
				{user.keyData && (
					<div className="keyDataContainer">
						<KeyData
							element="Calories"
							count={user.keyData.calorieCount + "kCal"}
							img={calorie}
							backgroundColor="red"
							alt="Calorie"
							icontype="keydata"
						/>
						<KeyData
							element="Protéines"
							count={user.keyData.proteinCount + "g"}
							img={protein}
							backgroundColor="blue"
							alt="Protéines"
							icontype="keydata"
						/>
						<KeyData
							element="Glucides"
							count={user.keyData.carbohydrateCount + "g"}
							img={carbohydrate}
							backgroundColor="yellow"
							alt="Glucides"
							icontype="keydata"
						/>
						<KeyData
							element="Lipides"
							count={user.keyData.lipidCount + "g"}
							img={lipid}
							backgroundColor="pink"
							alt="Lipides"
							icontype="keydata"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
