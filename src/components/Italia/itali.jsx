import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import Carousel from '../carousel.component';
import axios from 'axios';

const Italy = () => {
  const [slides, setSlides] = useState([]);

  // Fetch images from backend not done
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/italy-images');
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="overflow-x-auto max-w-4xl m-auto">
        <div className="w-full text-center mb-14 my-9">
          <h1 className="text-3xl py-5 font-mono">Visit Italy</h1>
        </div>
        <Carousel slides={slides.map(slide => `data:image/jpeg;base64,${slide.imageBase64}`)} />
      </div>

      <div className="bg-white text-gray-800 font-sans mt-16">
        <div className="bg-red-500 text-white py-4 px-6">
          <h1 className="text-xl max-w-4xl mx-auto font-bold">Cities of Italy - A Land of Beauty</h1>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="flex flex-col items-start">
                <p className="px-8 my-auto h-fit text-left text-red-800 max-w-xs">
                  Rome, the capital of Italy, is a city rich in history and culture. From the Colosseum to the Vatican City, it offers an unforgettable experience blending ancient landmarks with modern charm.
                </p>
                <a
                  href="/search?s=rome"
                  className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 text-center hover:bg-red-600"
                >
                  Offers for Rome
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4">
              <img
                src="https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg"
                alt="Rome"
                className="h-64 w-auto ml-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-wrap relative">
              <div className="w-full md:w-1/2 pr-4">
                <img
                  src="https://cdn.getyourguide.com/img/location/5ffeb77aa9674.jpeg/88.jpg"
                  alt="Venice"
                  className="h-64 w-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 pl-4 relative">
                <div className="flex flex-col h-full justify-between">
                  <p className="px-8 my-auto h-fit text-left text-red-800 max-w-xs">
                    Venice, the city of canals, is known for its romantic gondola rides and historic architecture. The Grand Canal and Piazza San Marco are must-visit attractions.
                  </p>
                  <a
                    href="/search?s=venice"
                    className="bg-red-500 text-white py-2 px-4 rounded-md text-center hover:bg-red-600 absolute bottom-0 right-0 m-4"
                  >
                    Offers for Venice
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 pr-4 relative">
                  <div className="flex flex-col items-start h-full">
                    <p className="px-8 my-auto h-fit text-left text-red-800 max-w-xs">
                      Milan, Italy’s fashion capital, is a hub for art, shopping, and business. The Duomo di Milano and Galleria Vittorio Emanuele II are iconic landmarks.
                    </p>
                    <a
                      href="/search?s=milan"
                      className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 text-center hover:bg-red-600 absolute bottom-0 left-0 m-4"
                    >
                      Offers for Milan
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pr-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Piazza_Duomo_Milan.jpg"
                    alt="Milan"
                    className="h-64 w-auto ml-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-600 mt-10">
        <p>Discover Italy</p>
      </footer>

      <Footer />
    </>
  );
};

export default Italy;
