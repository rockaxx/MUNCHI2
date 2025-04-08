import React from 'react';

interface TopWaveProps {
  backgroundColor?: string;
  fillColor?: string;
  imageUrl?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const TopWave: React.FC<TopWaveProps> = ({
  backgroundColor = '#ffa31a',
  fillColor = '#ffffff', // corrected default to valid hex code
  imageUrl = '', // Optional image URL
  imageWidth = 'auto', // Default width; can be overridden (e.g., "100px", "10rem")
  imageHeight = '4rem', // Default height; adjust as needed
}) => {
  return (
    <div className="relative w-full" style={{ backgroundColor, height: '150px' }}>
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          fill={fillColor}
          d="
            M0,100
            C500,250 600,140 900,100
            C1200,50 1440,150 1440,150
            L1440,0
            L0,0
            Z
          "
        />
      </svg>

      {/* Optional image on top of the wave */}
      {imageUrl && (
        <div className="absolute top-0 flex w-full justify-center">
          <img
            src={imageUrl}
            alt="Top Wave Decoration"
            style={{ width: imageWidth, height: imageHeight }}
          />
        </div>
      )}
    </div>
  );
};

export default TopWave;
