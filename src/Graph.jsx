/* eslint-disable no-unused-vars */
import React from "react";
import { Chart, Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.defaults.font.size = 13;
ChartJS.defaults.font.family = "Inter";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

function Graph(props) {
	const data = {
		labels: props.time,
		datasets: [
			{
				label: props.label,
				data: props.data,
				fill: false,
				borderColor: "#70AE6E",
				tension: 0.5,
			},
		],
	};
	return (
		<>
			<div className="m-4 box-border flex w-[475px] flex-col items-center gap-4 rounded-lg bg-slate-50 p-2 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
				<h1 className="text-xl font-bold">{props.tittle}</h1>
				<Line data={data} />
			</div>
		</>
	);
}

export default Graph;
