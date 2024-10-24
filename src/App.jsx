import React from "react";
import Map from "./Map.jsx";
import Graph from "./Graph.jsx";
import Navbar from "./Navbar.jsx";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<div className="container m-auto mb-4 mt-[5rem] box-border flex flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200 shadow-xl">
				<Map></Map>
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
