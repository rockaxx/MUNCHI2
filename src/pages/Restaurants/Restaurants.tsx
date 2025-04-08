import React, { useEffect, useState } from 'react';
import HeaderV2 from './sub_components/HeaderV2';
import RestaurantCard from '../../components/Cards/RestaurantCard';
import FilterSidebar from './sub_components/FilterSidebar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebase.config';
import loadingAnimation from '../../assets/animation/loading.gif';

// Define an interface for the restaurant data.
interface Restaurant {
  id: string;
  openTime?: string;
  closeTime?: string;
  open_hours?: any;
  contact?: any;
  ratings?: any;
  // Include other properties provided in the document, using an index signature
  [key: string]: any;
}

const RestaurantsPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // 1) Get the main "restaurants" collection
        const restaurantsCol = collection(db, 'restaurants');
        const snapshot = await getDocs(restaurantsCol);

        // 2) For each restaurant document, fetch its "open_hours", "ratings", and "contact" subcollections
        const restaurantData: Restaurant[] = await Promise.all(
          snapshot.docs.map(async (docSnap) => {
            const docData = docSnap.data();
            const docId = docSnap.id;

            // Fetch the open_hours subcollection
            const openHoursSnap = await getDocs(collection(db, 'restaurants', docId, 'open_hours'));
            const openHoursData = openHoursSnap.docs.map((d) => ({
              id: d.id,
              ...d.data(),
            }));

            // Fetch the ratings subcollection
            const ratingsSnap = await getDocs(collection(db, 'restaurants', docId, 'ratings'));
            const ratingsData = ratingsSnap.docs.map((d) => ({
              id: d.id,
              ...d.data(),
            }));

            // Fetch the contact subcollection
            const contactSnap = await getDocs(collection(db, 'restaurants', docId, 'contact'));
            const contactData = contactSnap.docs.map((d) => ({
              id: d.id,
              ...d.data(),
            }));

            // Determine today's day in Slovakia timezone.
            const currentDay = new Date().toLocaleString('en-US', {
              weekday: 'long',
              timeZone: 'Europe/Bratislava',
            });

            // Default open and close times if not found
            let openTime = '';
            let closeTime = '';

            // Check if open_hours data exists and today's schedule is available.
            if (openHoursData.length > 0) {
              // Assuming the first document contains the required object.
              const hoursObj = openHoursData[0]; // e.g., { Monday: ['08:00', '20:00'], ... }
              const todaysHours = hoursObj[currentDay];
              if (todaysHours && todaysHours.length === 2) {
                openTime = todaysHours[0];
                closeTime = todaysHours[1];
              }
            }

            // Combine restaurant data with today's open/close times and contact info.
            return {
              id: docId,
              ...docData,
              openTime,
              closeTime,
              open_hours: openHoursData,
              contact: contactData,
              ratings: ratingsData,
            } as Restaurant;
          })
        );

        console.log('Fetched restaurants with open times and contacts:', restaurantData);
        setRestaurants(restaurantData);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <HeaderV2 />
      {/* Main Content */}
      <main className="mx-auto mt-6 flex max-w-7xl space-x-6 px-4">
        <FilterSidebar />
        <section className="flex-1">
          <h2 className="mb-4 text-2xl font-bold text-[#292929]">Food</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {loading ? (
              <img src={loadingAnimation} width="320" height="240" alt="Loading animation" />
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantsPage;
