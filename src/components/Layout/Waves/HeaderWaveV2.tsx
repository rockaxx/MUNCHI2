import React from 'react';

interface HeaderWaveV2Props {
  backgroundColor?: string;
  fillColor?: string;
  imageUrl?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const HeaderWaveV2: React.FC<HeaderWaveV2Props> = ({
  backgroundColor = '#ffffff',
  fillColor = '#ffa31a',
  imageUrl = '', // Optional image URL
  imageWidth = 'auto', // Default width; can be overridden (e.g., "100px", "10rem")
  imageHeight = '4rem', // Default height; adjust as needed
}) => {
  return (
    <div className="relative w-full" style={{ backgroundColor, height: '100px' }}>
      {/* SVG Wave */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          fill={fillColor}
          d="
            M0,20
            C400,100 1040,100 1440,20
            L1440,100
            L0,100
            Z
          "
        />
      </svg>

      {/* Optional image on top of the wave */}
      {imageUrl && (
        <div className="absolute top-0 flex w-full justify-center">
          <img
            src={imageUrl}
            alt="Wave Decoration"
            style={{ width: imageWidth, height: imageHeight }}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderWaveV2;
