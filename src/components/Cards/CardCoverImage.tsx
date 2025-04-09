import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
} from "@heroui/react";
import dashboardImg from "../../assets/images/dashboard.jpeg";
import landscapeImg from "../../assets/images/places.jpeg";
import ImageWithSkeleton from "./imageWithSkeleton";
import { User } from "@heroui/react";

const CardCoverImage: React.FC = () => {
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [isLoaded3, setIsLoaded3] = useState(false);
  const [isLoaded4, setIsLoaded4] = useState(false);
  const [isLoaded5, setIsLoaded5] = useState(false);

  return (
    <div className="w-full max-w-[900px] mx-auto gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="relative col-span-12 sm:col-span-4 w-full h-[300px]">
      <CardHeader
          className={`absolute top-0 left-0 z-10 w-full px-4 pt-4 pb-2 backdrop-blur-sm bg-black/50 rounded-t-lg transition-opacity duration-300 ${
            isLoaded1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-start w-full">
            {/* Text left side */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 uppercase font-bold">#1 Restaurant Kolárovo</p>
              <h4 className="text-white font-medium text-large">The Bank</h4>
            </div>

            {/* Avatar right side */}
            <div className="shrink-0">
              <User
                avatarProps={{
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eVOvEBxEKG7otYCIzvd8Cb_KtP5mMdDIPA&s",
                  className: "w-12 h-12",
                }}
                name=""
                description=""
              />
            </div>
          </div>
        </CardHeader>
        <ImageWithSkeleton
          src="https://static.vecteezy.com/system/resources/thumbnails/029/211/580/small_2x/luxury-food-service-main-course-served-at-a-restaurant-or-formal-dinner-event-in-classic-english-style-in-the-luxurious-hotel-or-country-estate-generative-ai-photo.jpg"
          alt="Card background"
          removeWrapper
          simulateDelay={true}
          onLoadedChange={setIsLoaded1}
        />
      </Card>

      <Card className="relative col-span-12 sm:col-span-4 w-full h-[300px]">
      <CardHeader
          className={`absolute top-0 left-0 z-10 w-full px-4 pt-4 pb-2 backdrop-blur-sm bg-black/50 rounded-t-lg transition-opacity duration-300 ${
            isLoaded1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-start w-full">
            {/* Text left side */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 uppercase font-bold">Eat for free</p>
              <h4 className="text-white font-medium text-large">Fast Food Gyros</h4>
            </div>

            {/* Avatar right side */}
            <div className="shrink-0">
              <User
                avatarProps={{
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm1ZpKuaCE5itxp7-KRixKYErCuBlkx3kwQ&s",
                  className: "w-12 h-12",
                }}
                name=""
                description=""
              />
            </div>
          </div>
        </CardHeader>
        <ImageWithSkeleton
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fd/2b/16/miller-s-restaurant.jpg?w=800&h=400&s=1"
          alt="Card background"
          removeWrapper
          simulateDelay={true}
          onLoadedChange={setIsLoaded2}
        />
      </Card>

      <Card className="relative col-span-12 sm:col-span-4 w-full h-[300px]">
      <CardHeader
          className={`absolute top-0 left-0 z-10 w-full px-4 pt-4 pb-2 backdrop-blur-sm bg-black/50 rounded-t-lg transition-opacity duration-300 ${
            isLoaded1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-start w-full">
            {/* Text left side */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 uppercase font-bold">get salmonelosa</p>
              <h4 className="text-white font-medium text-large">Paradiso</h4>
            </div>

            {/* Avatar right side */}
            <div className="shrink-0">
              <User
                avatarProps={{
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfUMg_J0mxkYxQMhhCl53F76XzutlKbTUSg&s",
                  className: "w-12 h-12",
                }}
                name=""
                description=""
              />
            </div>
          </div>
        </CardHeader>
        <ImageWithSkeleton
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Card background"
          removeWrapper
          simulateDelay={true}
          onLoadedChange={setIsLoaded3}
        />
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader
          className={`absolute top-0 left-0 z-10 w-full px-4 pt-4 pb-2 backdrop-blur-sm bg-black/50 rounded-t-lg transition-opacity duration-300 ${
            isLoaded1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-start w-full">
            {/* Text left side */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 uppercase font-bold">nice junk food</p>
              <h4 className="text-white font-medium text-large">Kicsindi Plus</h4>
            </div>

            {/* Avatar right side */}
            <div className="shrink-0">
              <User
                avatarProps={{
                  src: "https://graphicsfamily.com/wp-content/uploads/edd/2023/02/Restaurant-Logo-Design-2-1180x664.jpg",
                  className: "w-12 h-12",
                }}
                name=""
                description=""
              />
            </div>
          </div>
        </CardHeader>
        <ImageWithSkeleton
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0EqHI6h5QgFTXGG_1i2FADG1xulRbVtecA&s"
          alt="Card example background"
          removeWrapper
          simulateDelay={true}
          onLoadedChange={setIsLoaded4}
        />
        <CardFooter className={`absolute bottom-0 z-10 justify-between bg-white/30 border-t border-zinc-100/50 transition-opacity duration-300 ${isLoaded4 ? "opacity-100" : "opacity-0"}`}>
        <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader
          className={`absolute top-0 left-0 z-10 w-full px-4 pt-4 pb-2 backdrop-blur-sm bg-black/50 rounded-t-lg transition-opacity duration-300 ${
            isLoaded1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-start w-full">
            {/* Text left side */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60 uppercase font-bold">drop dead</p>
              <h4 className="text-white font-medium text-large">Kitty Gyros</h4>
            </div>

            {/* Avatar right side */}
            <div className="shrink-0">
              <User
                avatarProps={{
                  src: "https://marketplace.canva.com/EAF1XAgJrCg/1/0/1600w/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q.jpg",
                  className: "w-12 h-12",
                }}
                name=""
                description=""
              />
            </div>
          </div>
        </CardHeader>
        <ImageWithSkeleton
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0EqHI6h5QgFTXGG_1i2FADG1xulRbVtecA&s5"
          alt="Relaxing app background"
          removeWrapper
          simulateDelay={true}
          onLoadedChange={setIsLoaded5}
        />
        <CardFooter className={`absolute bottom-0 z-10 justify-between bg-white/30 border-t border-zinc-100/50 transition-opacity duration-300 ${isLoaded4 ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-grow gap-2 items-center">
            <ImageWithSkeleton
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0an2jSSz9PwNpaj73nlIYzK74pqH7mLNW2agIhFeY3uuJNvf0zP0NFuC5BH4XxXZ7tU&usqp=CAU"
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              removeWrapper
              simulateDelay={true}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">Get a good night's sleep.</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardCoverImage;
