import propTypes from "prop-types";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

function Score({ todayScore }) {
	const data = [
		{
			name: "todayScore",
			todayScore: 1 - todayScore,
			fill: "#FBFBFB", //white
		},
		{
			name: "todayScore",
			todayScore: todayScore,
			fill: "#E60000", //red
			stroke: "#E60000", //red
		},
	];

	return (
		<div className="score">
			<p className="score__title">Score</p>
			{todayScore && (
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={data}
							dataKey="todayScore"
							nameKey="name"
							startAngle={-180}
							endAngle={180}
							innerRadius={60}
							outerRadius={60}
						/>
					</PieChart>
				</ResponsiveContainer>
			)}
			<p className="score__content">
				<span className="strong">{todayScore * 100}%</span> de votre objectif
			</p>
		</div>
	);
}

Score.propTypes = {
	todayScore: propTypes.number,
};

export default Score;
