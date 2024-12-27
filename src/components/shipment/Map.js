import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector } from "react-redux";

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Custom Icons with external URLs
const homeIcon = new L.Icon({
  iconUrl: "https://i.postimg.cc/K8D4MFrD/Group-482108.png",
  iconRetinaUrl: "https://i.postimg.cc/K8D4MFrD/Group-482108.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const flagIcon = new L.Icon({
  iconUrl: "https://i.postimg.cc/9QmCs9Zy/Group-482112.png",
  iconRetinaUrl: "https://i.postimg.cc/9QmCs9Zy/Group-482112.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const Map = () => {
  const start = useSelector(
    (store) => store.shipmentView.selectedShipment?.deliverPoints?.startPoint
  );
  const pickup = useSelector(
    (store) => store.shipmentView.selectedShipment?.deliverPoints?.pickupPoint
  );
  const destination = useSelector(
    (store) =>
      store.shipmentView.selectedShipment?.deliverPoints?.destinationPoint
  );

  const polylinePositions = [start, pickup, destination];

  return (
    <MapContainer
      style={{ height: "500px", width: "100%", marginTop: "2rem" }}
      center={[41.5, -96]} // Center of the map
      zoom={4}
      zoomControl={false} // Disable zoom control buttons
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Markers */}
      <Marker position={start} icon={homeIcon} />
      <Marker position={pickup} icon={flagIcon} />
      <Marker position={destination} icon={flagIcon} />

      {/* Polyline */}
      <Polyline positions={polylinePositions} color="#0076DD" />
    </MapContainer>
  );
};

export default Map;
