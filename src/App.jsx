import React from "react";
import { useEffect, useRef, useState } from "react";
import Map from "./Map.jsx";
import Graph from "./Graph.jsx";
import Navbar from "./Navbar.jsx";

function App() {
	const [coord, setCoord] = useState([0, 0]);
	const [time, setTime] = useState([]);
	const mapRef = useRef();

	useEffect(() => {
		const Socket = new WebSocket("ws://localhost:3001");

		Socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			setCoord([data.lat, data.lon]);
			console.log([data.lat, data.lon]);

			setTime((prevTime) => {
				const updatedTime = [...prevTime, data.time];

				if (updatedTime.length > 10) {
					updatedTime.shift();
				}
				console.log(updatedTime);

				return updatedTime;
			});
		};

		return () => {
			Socket.close();
		};
	}, []);

	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.setView(coord);
		}
	}, [coord]);
	return (
		<>
			<Navbar></Navbar>
			<div className="container m-auto mb-4 mt-[5rem] box-border flex flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200 shadow-xl">
				<Map data={coord} view={mapRef}></Map>
				<div className="flex items-center">
					<p className="mt-4 p-2 text-4xl font-bold">GRAPHICS</p>
				</div>
				<div className="mt-2 flex w-full flex-wrap justify-evenly">
					<Graph></Graph>
					<Graph></Graph>
					<Graph></Graph>
					<Graph></Graph>
					<Graph></Graph>
					<Graph></Graph>
				</div>
			</div>
		</>
	);
}

export default App;
