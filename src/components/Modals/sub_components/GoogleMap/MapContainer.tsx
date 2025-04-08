import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '400px',
};

interface MapContainerProps {
  center: google.maps.LatLng | google.maps.LatLngLiteral;
  markerPosition: google.maps.LatLng | google.maps.LatLngLiteral;
  onMarkerDragEnd: (e: google.maps.KmlMouseEvent) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ center, markerPosition, onMarkerDragEnd }) => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
    >
      <Marker
        position={markerPosition}
        draggable
        onDragEnd={onMarkerDragEnd}
      />
    </GoogleMap>
  );
};

export default React.memo(MapContainer);
