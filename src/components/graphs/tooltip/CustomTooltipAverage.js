import propTypes from "prop-types";
//use to display the time of exercice for the day
const CustomTooltipAverage = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};
CustomTooltipAverage.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array,
};

export default CustomTooltipAverage;
