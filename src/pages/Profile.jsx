import { getUserById } from "../services/Userservice";
import Clap from "../assets/Imgs/clap.png";
import React, { useEffect, useState } from "react";

function Profile() {
	const [user, setuser] = useState({});

	useEffect(() => {
		getUserById(process.env.REACT_APP_USER_ID).then(function (response) {
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
		</div>
	);
}

export default Profile;
