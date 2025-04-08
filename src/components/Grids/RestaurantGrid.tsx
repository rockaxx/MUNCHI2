import React from 'react';
import RestaurantBlob from '../Cards/RestaurantBlob';
import { Link } from 'react-router-dom';

export interface Restaurant {
  id: number;
  name: string;
  imageUrl: string;
}

interface RestaurantsGridProps {
  restaurants: Restaurant[];
  title: string;
}

const RestaurantsGrid: React.FC<RestaurantsGridProps> = ({ restaurants, title }) => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-black">{title}</h2>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-4">
          {restaurants.map((restaurant) => (
            <RestaurantBlob
              key={restaurant.id}
              imageUrl={restaurant.imageUrl}
              name={restaurant.name}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/restaurants"
            className="rounded-md bg-[#ffa31a] px-6 py-3 text-lg text-white shadow-md transition-colors hover:bg-[#e69517]"
          >
            Show all restaurants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsGrid;
