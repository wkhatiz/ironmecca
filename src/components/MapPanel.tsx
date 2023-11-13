interface MapPanelProps {
  latitude: string;
  longitude: string;
}

function MapPanel(props: MapPanelProps) {
  let { latitude, longitude } = props;
  return (
    <div className="container my-auto p-4">
      {latitude && longitude ? (
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            className="absolute inset-0 w-[90%] h-[300px] ml-auto"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude};`}
          ></iframe>
        </div>
      ) : (
        <p>Latitude and longitude are required.</p>
      )}
    </div>
  );
}

export default MapPanel;
