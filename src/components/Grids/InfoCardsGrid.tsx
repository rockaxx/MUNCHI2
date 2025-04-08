import React from 'react';
import InfoCard from '../Cards/InfoCard';

export interface InfoCardData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface InfoCardsGridProps {
  infoCards: InfoCardData[];
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const InfoCardsGrid: React.FC<InfoCardsGridProps> = ({
  infoCards,
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card) => (
            <InfoCard
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-8 px-6 py-3 bg-[#ffa31a] text-white font-medium rounded hover:bg-yellow-600"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default InfoCardsGrid;
