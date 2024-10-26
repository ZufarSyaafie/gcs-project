/* eslint-disable react/prop-types */
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//new marker
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = (props) => {
	return (
		<>
			<div className="m-auto flex h-[400px] w-full items-center justify-center overflow-hidden border-b-4 border-[#483C46]">
				<MapContainer
					className="h-full w-full"
					center={props.data}
					zoom={7}
					scrollWheelZoom={true}
					ref={props.view}
				>
					<TileLayer url="https://www.google.com/maps/vt?lyrs=s@189&x={x}&y={y}&z={z}" />
					<Marker position={props.data}>
						<Popup>Location of The Object</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
};

export default MapComponent;
