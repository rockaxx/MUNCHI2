import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import MapContainer from './sub_components/GoogleMap/MapContainer'; 
import '../../styles/DeliveryLocationModal.css';

interface Bounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

interface Coordinates {
  lat: number | null;
  lng: number | null;
}

interface DeliveryLocationModalProps {
  kolarovoBounds: Bounds;
  defaultCenter: Coordinates;
  userLocation: Coordinates;
  onMarkerDragEnd: (e: google.maps.MouseEvent) => void;
  onLoadAutocomplete: (autocompleteInstance: google.maps.places.Autocomplete) => void;
  onPlaceChanged: () => void;
  closeModal: () => void;
  handleUseThisLocation: () => void;
}

const DeliveryLocationModal: React.FC<DeliveryLocationModalProps> = ({
  kolarovoBounds,
  defaultCenter,
  userLocation,
  onMarkerDragEnd,
  onLoadAutocomplete,
  onPlaceChanged,
  closeModal,
  handleUseThisLocation,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width: '600px', maxWidth: '90%' }}>
        {/* Close Icon */}
        <button
          onClick={closeModal}
          className="modal-close-button"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 style={{ marginTop: 0 }}>Where shall we deliver to?</h2>

        {/* Autocomplete Input (restricted to Kolarovo) */}
        <Autocomplete
          onLoad={onLoadAutocomplete}
          onPlaceChanged={onPlaceChanged}
          options={{
            bounds: {
              north: kolarovoBounds.north,
              south: kolarovoBounds.south,
              east: kolarovoBounds.east,
              west: kolarovoBounds.west,
            },
            strictBounds: true,
            componentRestrictions: { country: 'sk' },
          }}
        >
          <input
            type="text"
            placeholder="Search address"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#000',
            }}
          />
        </Autocomplete>

        {/* Map */}
        <div style={{ width: '100%', height: '400px', marginBottom: '1rem' }}>
          <MapContainer
            center={userLocation.lat ? userLocation : defaultCenter}
            markerPosition={userLocation.lat ? userLocation : defaultCenter}
            onMarkerDragEnd={onMarkerDragEnd}
          />
        </div>

        {/* "Use this location" Button */}
        <button
          onClick={handleUseThisLocation}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '1rem',
            backgroundColor: '#EAF8F3',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            color: '#00997A',
          }}
        >
          Use this location
        </button>
      </div>
    </div>
  );
};

export default DeliveryLocationModal;
