import React from "react";
import Logo from "../assets/logo.png";

const Horizontalmenu = () => {
	return (
		<nav className="Horizontalmenu">
			<img src={Logo} alt="Logo SportSee" />
			<ul className="Horizontalmenu__list">
				<li className="Horizontalmenu__list__item">Accueil</li>
				<li className="Horizontalmenu__list__item">Profil</li>
				<li className="Horizontalmenu__list__item">Réglage</li>
				<li className="Horizontalmenu__list__item">Communauté</li>
			</ul>
		</nav>
	);
};

export default Horizontalmenu;
