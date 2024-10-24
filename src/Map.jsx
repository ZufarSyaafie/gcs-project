/* eslint-disable react/prop-types */
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = (props) => {
	return (
		<>
			<div className="m-auto flex h-[400px] w-full items-center justify-center overflow-hidden border-b-4 border-[#483C46]">
				<MapContainer
					className="h-full w-full"
					center={props.data}
					zoom={15}
					scrollWheelZoom={true}
					ref={props.view}
				>
					<TileLayer url="https://www.google.com/maps/vt?lyrs=s@189&x={x}&y={y}&z={z}" />
					<Marker position={props.data}>
						<Popup>TESTING</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
};

export default MapComponent;
