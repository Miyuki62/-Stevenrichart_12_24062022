import { USER_PERFORMANCE } from "../assets/data/Mockdata";
import axios from "axios";

/**
 * Fetch user activity from the API
 * @param { number } id User id
 * @returns { Promise } A promise containing the informations of the user
 */

export const getAverageSessionsByUserId = async (id) => {
	if (process.env.REACT_APP_MOCKED_DATA === "true") {
		const data = await new Promise((resolve) => {
			resolve(USER_PERFORMANCE.find((elt) => elt.userId === id));
		});
		return { data: data };
	} else {
		try {
			const response = await axios.get(
				process.env.REACT_APP_URL + `/user/${id}/average-sessions`
			);
			return response.data;
		} catch (e) {
			alert("Erreur : Le chargement des données moyenne a échoué.");
		}
	}
};
