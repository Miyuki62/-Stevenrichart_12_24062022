import React from "react";
import propTypes from "prop-types";

function Icon(props) {
	let iconclassName = "icon ";
	iconclassName += "icon__" + props.backgroundColor;
	return (
		<div className={iconclassName}>
			<img src={props.img} alt={props.alt} />
		</div>
	);
}

Icon.propTypes = {
	img: propTypes.string,
	alt: propTypes.string,
	backgroundColor: propTypes.string,
};
export default Icon;
