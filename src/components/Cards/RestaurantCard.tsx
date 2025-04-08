import React from 'react';
import { Link } from 'react-router-dom';
import { FaBicycle } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

interface Rating {
  positive?: number;
  negative?: number;
  [key: string]: any;
}

interface Restaurant {
  id: string;
  name: string;
  image: string; // the image URL is provided as "image" in the restaurant object
  openTime?: string;
  closeTime?: string;
  description?: string;
  categories?: string[];
  link: string;
  ratings?: Rating[];
  [key: string]: any;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

// Helper function: convert "HH:mm" to total minutes.
const convertToMinutes = (timeStr?: string): number => {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const {
    id,
    name,
    image: imageUrl,
    openTime,
    closeTime,
    description,
    categories,
    link,
    ratings,
  } = restaurant;

  let likingPercentage = 0;
  let totalReviews = 0;
  if (ratings && Array.isArray(ratings) && ratings.length > 0) {
    const ratingObj = ratings[0];
    const positive = ratingObj.positive || 0;
    const negative = ratingObj.negative || 0;
    totalReviews = positive + negative;
    likingPercentage = totalReviews > 0 ? Math.round((positive / totalReviews) * 100) : 0;
  }

  // Get current time in Slovakia (Europe/Bratislava)
  const now = new Date();
  const slovakiaTime: string = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Bratislava',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);
  const [currentHour, currentMinute] = slovakiaTime.split(':').map(Number);
  const currentMinutes = currentHour * 60 + currentMinute;

  const openTotal = convertToMinutes(openTime);
  const closeTotal = convertToMinutes(closeTime);

  let statusMessage = '';

  if (currentMinutes < openTotal) {
    statusMessage = `Opens at ${openTime}`;
  } else if (currentMinutes >= openTotal && currentMinutes < closeTotal) {
    statusMessage = closeTotal - currentMinutes <= 60 ? 'Soon closing' : 'Open';
  } else {
    statusMessage = 'Closed';
  }

  return (
    <Link to={link} state={{ restaurant }} className="block">
      <div className="relative w-72 overflow-hidden rounded-lg bg-white shadow transition-shadow duration-200 hover:shadow-lg">
        {/* Top Image */}
        <img src={imageUrl} alt={name} className="h-36 w-full object-cover" />
        {/* Rating Badge */}
        {ratings && (
          <div className="absolute top-2 right-2 flex items-center rounded-md bg-[#ffa31a] px-2 py-1 text-xs font-bold text-white">
            <span>{likingPercentage}%</span>
            <AiOutlineLike className="ml-1" />
            <span className="ml-1">({totalReviews})</span>
          </div>
        )}
        {/* Card Content */}
        <div className="p-4">
          {/* Restaurant Title */}
          <h3 className="text-lg font-bold tracking-wide text-[#292929] uppercase">{name}</h3>
          {/* Optional Description */}
          {description && <p className="text-sm text-gray-600">{description}</p>}
          {/* Category and Open Status */}
          <div className="mt-2 flex items-center justify-between text-xs text-[#808080]">
            <span>{categories && categories.length > 0 ? categories[0] : ''}</span>
            <span className="flex items-center">
              <FaBicycle className="mr-1" />
              {statusMessage}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
