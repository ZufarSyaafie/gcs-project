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

function Graph() {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "My First Dataset",
				data: [65, 59, 100, 200, 56, 55, 40],
				fill: false,
				borderColor: "#F4743B",
				tension: 0.1,
			},
		],
	};
	return (
		<>
			<div className="m-4 box-border flex w-[475px] flex-col items-center gap-4 rounded-md bg-slate-50 p-2 shadow-md">
				<h1 className="text-xl font-bold">Tittle</h1>
				<Line data={data} />
			</div>
		</>
	);
}

export default Graph;
