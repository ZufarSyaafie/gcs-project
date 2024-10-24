import React from "react";
import { useEffect, useRef, useState } from "react";
import Map from "./Map.jsx";
import Graph from "./Graph.jsx";
import Navbar from "./Navbar.jsx";

function App() {
	const [coord, setCoord] = useState([0, 0]);
	const [time, setTime] = useState([]);
	const [alt, setAlt] = useState([]);
	const [yaw, setYaw] = useState([]);
	const [pitch, setPitch] = useState([]);
	const [roll, setRoll] = useState([]);
	const [voltage, setVoltage] = useState([]);
	const [temperature, setTemperature] = useState([]);
	const [id, setId] = useState(0);
	const mapRef = useRef();

	useEffect(() => {
		const Socket = new WebSocket("ws://localhost:3001");

		Socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			setCoord([data.lat, data.lon]);
			console.log([data.lat, data.lon]);

			setId(data.teamID);

			setTime((prevTime) => {
				const updatedTime = [...prevTime, data.time];

				if (updatedTime.length > 10) {
					updatedTime.shift();
				}
				console.log(updatedTime);

				return updatedTime;
			});

			setAlt((prevAlt) => {
				const updatedAlt = [...prevAlt, data.alt];

				if (updatedAlt.length > 10) {
					updatedAlt.shift();
				}
				console.log(updatedAlt);

				return updatedAlt;
			});

			setYaw((prevYaw) => {
				const updatedYaw = [...prevYaw, data.yaw];

				if (updatedYaw.length > 10) {
					updatedYaw.shift();
				}
				console.log(updatedYaw);

				return updatedYaw;
			});

			setPitch((prevPitch) => {
				const updatedPitch = [...prevPitch, data.pitch];

				if (updatedPitch.length > 10) {
					updatedPitch.shift();
				}
				console.log(updatedPitch);

				return updatedPitch;
			});

			setRoll((prevRoll) => {
				const updatedRoll = [...prevRoll, data.roll];

				if (updatedRoll.length > 10) {
					updatedRoll.shift();
				}
				console.log(updatedRoll);

				return updatedRoll;
			});

			setVoltage((prevVoltage) => {
				const updatedVoltage = [...prevVoltage, data.voltage];

				if (updatedVoltage.length > 10) {
					updatedVoltage.shift();
				}
				console.log(updatedVoltage);

				return updatedVoltage;
			});

			setTemperature((prevTemperature) => {
				const updatedTemperature = [...prevTemperature, data.temperature];

				if (updatedTemperature.length > 10) {
					updatedTemperature.shift();
				}
				console.log(updatedTemperature);

				return updatedTemperature;
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
			<Navbar id={id} time={time.slice(-1)[0]}></Navbar>
			<div className="container m-auto mb-4 mt-[5rem] box-border flex flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-200 shadow-xl">
				<Map data={coord} view={mapRef}></Map>
				<div className="flex items-center">
					<p className="mt-4 p-2 text-4xl font-bold">GRAPHICS</p>
				</div>
				<div className="mt-2 flex w-full flex-wrap justify-evenly">
					<Graph
						label="Altitude"
						tittle="Altitude vs Time"
						data={alt}
						time={time}
					></Graph>
					<Graph
						label="Yaw"
						tittle="Yaw vs Time"
						data={yaw}
						time={time}
					></Graph>
					<Graph
						label="Pitch"
						tittle="Pitch vs Time"
						data={pitch}
						time={time}
					></Graph>
					<Graph
						label="Roll"
						tittle="Roll vs Time"
						data={roll}
						time={time}
					></Graph>
					<Graph
						label="Voltage"
						tittle="Battery Voltage vs Time"
						data={voltage}
						time={time}
					></Graph>
					<Graph
						label="Temperature"
						tittle="Temperature vs Time"
						data={temperature}
						time={time}
					></Graph>
				</div>
			</div>
		</>
	);
}

export default App;
