import React from 'react';

interface LocationSelectorProps {
  openModal: () => void;
  handleUseCurrentLocation: () => void;
  userAddress: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  openModal,
  handleUseCurrentLocation,
  userAddress,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '10px 16px',
        maxWidth: '600px',
        margin: '20px auto 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.75" stroke="#555" fill="none" />
          <path
            d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z"
            stroke="#555"
            fill="none"
          />
        </svg>
        <div
          onClick={openModal}
          style={{
            padding: '8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '800',
            color: '#000',
            backgroundColor: '#fff',
          }}
        >
          {userAddress || 'Write your address...'}
        </div>
      </div>
      <button
        onClick={handleUseCurrentLocation}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#EAF8F3',
          border: 'none',
          borderRadius: '999px',
          padding: '6px 12px',
          cursor: 'pointer',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M2 12L22 2L14 22L11 13L2 12Z" fill="#00997A" />
        </svg>
        <span style={{ color: '#00997A', fontSize: '14px', fontWeight: '700' }}>
          Use current location
        </span>
      </button>
    </div>
  );
};

export default LocationSelector;
