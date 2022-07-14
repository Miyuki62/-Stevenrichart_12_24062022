import propTypes from "prop-types";
//use to display the time of exercice for the day
const CustomTooltipActivity = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}`}kg</p>
				<p className="label">{`${payload[1].value}`}Kcal</p>
			</div>
		);
	}

	return null;
};
CustomTooltipActivity.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array,
};

export default CustomTooltipActivity;
