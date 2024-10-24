import React from "react";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
	const [coord, setCoord] = useState(null);

	useEffect(() => {
		const Socket = new WebSocket("ws://localhost:3001");

		Socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			setCoord([data.lat, data.lon]);
		};

		return () => {
			Socket.close();
		};
	}, []);

	return (
		<>
			<div className="m-auto flex h-[400px] w-full items-center justify-center overflow-hidden border-b-4 border-[#483C46]">
				<MapContainer
					className="h-full w-full"
					center={coord}
					zoom={15}
					scrollWheelZoom={true}
				>
					<TileLayer url="https://www.google.com/maps/vt?lyrs=s@189&x={x}&y={y}&z={z}" />
					<Marker position={coord}>
						<Popup>TESTING</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
}

export default Map;