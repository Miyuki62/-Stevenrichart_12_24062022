import { USER_MAIN_DATA } from "../assets/data/Mockdata";
import axios from "axios";

export const getUserById = async (id) => {
	if (process.env.REACT_APP_MOCKED_DATA === "true") {
		const data = await new Promise((resolve) => {
			resolve(USER_MAIN_DATA.find((elt) => elt.id === id));
		});
		return { data: data };
	} else {
		try {
			const response = await axios.get(
				process.env.REACT_APP_URL + `/user/${id}`
			);
			return response.data;
		} catch (e) {
			alert("Erreur : Le chargement des données a échoué.");
		}
	}
};
