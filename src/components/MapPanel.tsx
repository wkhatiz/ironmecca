// MapPanel.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

type MapPanelProps = {
  businessLocation: { lat: number; lng: number };
  popupTxt: string;
};

function MapPanel(props: MapPanelProps) {
  let { businessLocation, popupTxt } = props;

  const defaultIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconRetinaUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadowUrl,
    shadowSize: [41, 41],
  });

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[businessLocation.lat, businessLocation.lng]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[businessLocation.lat, businessLocation.lng]}
          icon={defaultIcon}
        >
          <Popup>{popupTxt}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPanel;
