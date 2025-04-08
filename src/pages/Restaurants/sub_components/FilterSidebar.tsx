import React from 'react';
import {
  FaMapMarkerAlt,
  FaThumbsUp,
  FaMoneyBillWave,
  FaPizzaSlice,
  FaIceCream,
  FaBreadSlice,
  FaMugHot,
} from 'react-icons/fa';
import {
  GiBarbecue,
  GiCroissant,
  GiWorld,
  GiDonerKebab, // Using this for both Kebab and Shawarma filters
  GiGreekTemple,
} from 'react-icons/gi';

const FilterSidebar: React.FC = () => {
  return (
    <aside className="hidden w-64 lg:block">
      <div className="space-y-6 rounded bg-white p-4 shadow">
        {/* Sort by */}
        <div>
          <h3 className="mb-2 font-semibold text-[#292929]">Sort by</h3>
          <div className="flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaMapMarkerAlt />
              </span>
              <span>Near me</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaThumbsUp />
              </span>
              <span>Ratings</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaMoneyBillWave />
              </span>
              <span>Delivery fee</span>
            </button>
          </div>
        </div>

        {/* Your favourite filters */}
        <div>
          <h3 className="mb-2 font-semibold text-[#292929]">Your favourite filters</h3>
          <div className="flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              {/* Use GiDonerKebab as an icon for kebab */}
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiDonerKebab />
              </span>
              <span>Kebab</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaPizzaSlice />
              </span>
              <span>Pizza</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiBarbecue />
              </span>
              <span>Grill</span>
            </button>
          </div>
        </div>

        {/* More filters */}
        <div>
          <h3 className="mb-2 font-semibold text-[#292929]">More filters</h3>
          <div className="flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiCroissant />
              </span>
              <span>Breakfast</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaIceCream />
              </span>
              <span>Desserts</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiWorld />
              </span>
              <span>International</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaBreadSlice />
              </span>
              <span>Sandwich</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              {/* Reusing GiDonerKebab for Shawarma */}
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiDonerKebab />
              </span>
              <span>Shawarma</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <FaMugHot />
              </span>
              <span>Tea &amp; Coffee</span>
            </button>
            <button className="flex items-center space-x-2 text-[#292929] hover:text-[#292929]">
              <span className="rounded-full bg-[#fff7e6] p-2">
                <GiGreekTemple />
              </span>
              <span>Traditional</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
