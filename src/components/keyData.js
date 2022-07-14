import propTypes from "prop-types";
import Icon from "./Icon";

const KeyData = ({ img, backgroundColor, alt, count, element, icontype }) => {
	return (
		<div className="keyData">
			<Icon
				img={img}
				backgroundColor={backgroundColor}
				alt={alt}
				icontype={icontype}
			/>
			<div>
				<p className="keyData__count">{count}</p>
				<p className="keyData__element">{element}</p>
			</div>
		</div>
	);
};

KeyData.propTypes = {
	img: propTypes.string,
	backgroundColor: propTypes.string,
	alt: propTypes.string,
	count: propTypes.string,
	element: propTypes.string,
	icontype: propTypes.string,
};

export default KeyData;
