import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import '../styles/HomePage.css'; // We'll add the modal CSS here
const DeliveryLocationModal = lazy(() => import('../components/Modals/DeliveryLocationModal'));
import Categories from '../components/Layout/Categories';
import TopWave from '../components/Layout/Waves/TopWave';
import HeaderWave from '../components/Layout/Waves/HeaderWave';
import RestaurantsGrid from '../components/Grids/RestaurantGrid';
import InfoCardsGrid from '../components/Grids/InfoCardsGrid';
import PartnerGrid from '../components/Grids/PartnerGrid';
import AppAddGrid from '../components/Grids/AppAddGrid';
import munchilogo from '../assets/images/munchilogo.png';
import { useAuth } from '../context/authContext';
import CardCoverImage from '../components/Cards/CardCoverImage';

interface Coordinates {
  lat: number | null;
  lng: number | null;
}

interface Bounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

// Default center around Kolarovo
const defaultCenter: Coordinates = { lat: 47.92294, lng: 17.98467 };

// Rough bounding box for Kolarovo
const kolarovoBounds: Bounds = {
  north: 47.96,
  south: 47.88,
  east: 18.05,
  west: 17.85,
};

const HomePage: React.FC = () => {
  // States
  const [userLocation, setUserLocation] = useState<Coordinates>({ lat: null, lng: null });
  const [userAddress, setUserAddress] = useState<string>('');
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(false);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    console.log('[HomePage] Current user:', currentUser);
    if (!currentUser) {
      console.warn('[HomePage] currentUser is null or undefined.');
    }
  }, [currentUser]);

  // Load the Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_API_KEY', // Verify this key is correct and has proper permissions
    libraries: ['places'],
  });

  useEffect(() => {
    console.log('[HomePage] Google Maps API loaded:', isLoaded);
  }, [isLoaded]);

  const openModal = (): void => {
    console.log('[HomePage] Opening delivery location modal');
    setShowModal(true);
  };

  const closeModal = (): void => {
    console.log('[HomePage] Closing delivery location modal');
    setShowModal(false);
  };

  const handleUseCurrentLocation = (): void => {
    console.log('[HomePage] handleUseCurrentLocation triggered');
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      return;
    }
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log('[HomePage] Retrieved geolocation:', latitude, longitude);
          setUserLocation({ lat: latitude, lng: longitude });
          setLocationError(null);
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          );
          const data = await response.json();
          console.log('[HomePage] Reverse geocoding response:', data);
          if (data.status === 'OK' && data.results.length > 0) {
            const priorityTypes = ['street_address', 'premise', 'subpremise'];
            const bestResult =
              data.results.find((r: any) => priorityTypes.some((t) => r.types.includes(t))) ||
              data.results[0];
            const ac = bestResult.address_components;
            const findType = (type: string): string | undefined =>
              ac.find((c: any) => c.types.includes(type))?.long_name;
            const streetNumber = findType('street_number');
            const route = findType('route');
            const sublocality = findType('sublocality') || findType('sublocality_level_1');
            const locality = findType('locality');
            const adminArea = findType('administrative_area_level_1');
            const postalCode = findType('postal_code');
            const country = findType('country');
            const parts: string[] = [];
            if (streetNumber && route) {
              parts.push(`${streetNumber} ${route}`);
            } else if (route) {
              parts.push(route);
            }
            if (sublocality) parts.push(sublocality);
            if (locality) parts.push(locality);
            if (adminArea) parts.push(adminArea);
            if (postalCode) parts.push(postalCode);
            if (country) parts.push(country);
            let customAddress = parts.join(', ');
            if (!customAddress) {
              customAddress = bestResult.formatted_address;
            }
            console.log('[HomePage] Resolved address:', customAddress);
            setUserAddress(customAddress);
          } else {
            setUserAddress(`Lat: ${latitude}, Lng: ${longitude}`);
          }
        } catch (error: any) {
          console.error('[HomePage] Reverse geocoding error:', error);
          setLocationError(error.message);
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error: GeolocationPositionError) => {
        console.error('[HomePage] Geolocation error:', error);
        setLocationError(error.message);
        setIsLoadingLocation(false);
      }
    );
  };

  const onLoadAutocomplete = (autocompleteInstance: google.maps.places.Autocomplete): void => {
    console.log('[HomePage] Autocomplete loaded:', autocompleteInstance);
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = (): void => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log('[HomePage] Place changed:', place);
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setUserLocation({ lat, lng });
        setUserAddress(place.formatted_address || '');
      }
    } else {
      console.warn('[HomePage] Autocomplete is not loaded.');
    }
  };

  const handleMarkerDragEnd = (e: google.maps.KmlMouseEvent): void => {
    if (!e.latLng) {
      console.error('[HomePage] Marker drag event does not have latLng.');
      return;
    }
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    console.log('[HomePage] Marker dragged to:', newLat, newLng);
    setUserLocation({ lat: newLat, lng: newLng });
  };
  

  const handleUseThisLocation = (): void => {
    console.log('[HomePage] Using current selected location:', userLocation, userAddress);
    closeModal();
  };

  const center: Coordinates = userLocation.lat && userLocation.lng ? userLocation : defaultCenter;

  useEffect(() => {
    console.log('[HomePage] showModal state:', showModal);
  }, [showModal]);

  useEffect(() => {
    console.log('[HomePage] userAddress updated:', userAddress);
  }, [userAddress]);

  const restaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
      imageUrl:
        'https://www.amrest.eu/sites/default/files/styles/big_hero_image/public/2024-05/kfc0.png?itok=SMeJu6gN',
    },
  ];

  const infoCards = [
    {
      id: 1,
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2022/7/AN/ZQ/SM/31988493/food-delivery-640x640-500x500.jpg',
      title: "Your city's top restaurants",
      description:
        'With a great variety of restaurants you can order your favourite food or explore new restaurants nearby.',
    },
  ];

  return (
    <div id="__nuxt">
      <div id="__layout">
        <div className="app-wrapper">
          <Header
            openModal={openModal}
            handleUseCurrentLocation={handleUseCurrentLocation}
            userAddress={userAddress}
            isLoadingLocation={isLoadingLocation}
            locationError={locationError}
          />
          <Categories />
          <HeaderWave backgroundColor="#ffffff" fillColor="#ffa31a" />
          <RestaurantsGrid restaurants={restaurants} title="Top restaurants and more in MUNCHI" />
          <div className="flex min-h-screen items-center justify-center p-6">
            <CardCoverImage />
          </div>
          <InfoCardsGrid
            infoCards={infoCards}
            title="Anything delivered"
            buttonText="Explore stores around you"
            onButtonClick={() => console.log('[HomePage] Explore stores clicked')}
          />
          <AppAddGrid />
          <TopWave
            backgroundColor="#ffa31a"
            fillColor="#ffffff"
            imageUrl={munchilogo}
            imageWidth="150px"
            imageHeight="150px"
          />
          <PartnerGrid />
          <HeaderWave backgroundColor="#292929" fillColor="#ffa31a" />
          <Footer />
          {showModal && (
            <Suspense fallback={<div>Loading modal...</div>}>
              <DeliveryLocationModal
                kolarovoBounds={kolarovoBounds}
                defaultCenter={defaultCenter}
                userLocation={userLocation}
                onMarkerDragEnd={handleMarkerDragEnd}
                onLoadAutocomplete={onLoadAutocomplete}
                onPlaceChanged={onPlaceChanged}
                closeModal={closeModal}
                handleUseThisLocation={handleUseThisLocation}
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
