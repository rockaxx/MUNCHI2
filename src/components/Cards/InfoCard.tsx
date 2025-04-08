import React from 'react';

interface InfoCardProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="p-6">
      {imageUrl && (
        <img className="mx-auto mb-4" src={imageUrl} alt={title} />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
