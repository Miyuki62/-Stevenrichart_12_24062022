import React from "react";
import Logo from "../asset/logo.png";

const Horizontalmenu = () => {
	return (
		<div>
			<nav className="Horizontalmenu">
				<img src={Logo} alt="Logo SportSee" />
				<ul className="Horizontalmenu__list">
					<li className="Horizontalmenu__list__item">Accueil</li>
					<li className="Horizontalmenu__list__item">Profil</li>
					<li className="Horizontalmenu__list__item">Réglage</li>
					<li className="Horizontalmenu__list__item">Communauté</li>
				</ul>
			</nav>
		</div>
	);
};

export default Horizontalmenu;
