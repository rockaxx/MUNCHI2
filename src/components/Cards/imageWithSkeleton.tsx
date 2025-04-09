import React, { useEffect, useState } from "react";
import { Skeleton, Image } from "@heroui/react";

interface ImageWithSkeletonProps {
  src: string;
  alt?: string;
  className?: string;
  removeWrapper?: boolean;
  simulateDelay?: boolean;
  onLoadedChange?: (loaded: boolean) => void;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt = "Image",
  className = "",
  removeWrapper = false,
  simulateDelay = false,
  onLoadedChange,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [showImage, setShowImage] = useState(!simulateDelay);

  useEffect(() => {
    if (simulateDelay) {
      const timeout = setTimeout(() => {
        setShowImage(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [simulateDelay]);

  const handleImageLoad = () => {
    setLoaded(true);
    onLoadedChange?.(true); // inform parent
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {(!loaded || !showImage) && (
        <Skeleton className="absolute inset-0 z-0 w-full h-full rounded-lg" />
      )}

      {showImage && (
        <Image
          removeWrapper={removeWrapper}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageLoad}
          className={`z-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
