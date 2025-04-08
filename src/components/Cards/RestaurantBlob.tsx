import React from 'react';
// import LazyImage from './LazyImage'; // Ensure the path to LazyImage is correct

interface RestaurantBlobProps {
  imageUrl: string;
  name: string;
}

const RestaurantBlob: React.FC<RestaurantBlobProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ position: 'relative', height: '88px', width: '88px' }}>
        {/* Background Blob */}
        <div
          style={{
            backgroundColor: '#808080', // Using palette: grey (#808080)
            borderRadius: '70% 30% 30% 70%/40% 60% 60% 40%', // New blob shape
            position: 'absolute',
            top: 0,
            left: 0,
            height: '88px',
            width: '88px',
            zIndex: 0,
          }}
        />
        {/* Foreground Image Blob */}
        <div
          style={{
            backgroundColor: '#292929', // Using palette: dark grey (#292929)
            borderRadius: '46% 54% 54% 46%/58% 56% 44% 42%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '88px',
            width: '88px',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          {/* <LazyImage
            src={imageUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          /> */}
        </div>
      </div>
      {/* Restaurant Name Label */}
      <span
        style={{
          marginTop: '0.5rem',
          backgroundColor: '#ffa31a', // Using palette: orange (#ffa31a)
          color: '#292929', // Using palette: dark grey (#292929)
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontWeight: 600,
          fontSize: '0.875rem',
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default RestaurantBlob;
