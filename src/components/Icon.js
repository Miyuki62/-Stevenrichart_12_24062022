import React from "react";
import propTypes from "prop-types";

function Icon(props) {
	let iconclassName = "icon ";
	iconclassName += "icon__bg-" + props.backgroundColor; //add the backgroundColor class
	iconclassName += " icon__type-" + props.icontype; //add the icon type class
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
	icontype: propTypes.string,
};
export default Icon;
