import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import Carousel from '../carousel.component';
import axios from 'axios';

const Germany = () => {
  const [slides, setSlides] = useState([]);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/germany-images');
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
          <h1 className="text-3xl py-5 font-mono">Visit Germany</h1>
        </div>
        <Carousel slides={slides.map(slide => `data:image/jpeg;base64,${slide.imageBase64}`)} />
      </div>

      <div className="bg-white text-gray-800 font-sans mt-16">
        <div className="bg-black text-white py-4 px-6">
          <h1 className="text-xl max-w-4xl mx-auto font-bold">Qytetet e Gjermanisë - The Heart of Europe</h1>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <div className="flex flex-col items-start">
                <p className="px-8 my-auto h-fit text-left text-blue-800 max-w-xs">
                  Berlini, kryeqyteti i Gjermanisë, është një qytet plot histori dhe kulturë. Muri i Berlinit, Porta e Brandenburgut dhe Muzeu Pergamon janë vetëm disa nga atraksionet e tij të famshme.
                </p>
                <a
                  href="/search?s=berlin"
                  className="bg-black text-white py-2 px-4 rounded-md mt-4 text-center hover:bg-gray-800"
                >
                  Ofertat për Berlin
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4">
              <img
                src="https://cdn.getyourguide.com/img/tour/5c935f960a5bc.jpeg/99.jpg"
                alt="Berlin"
                className="h-64 w-auto ml-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-wrap relative">
              <div className="w-full md:w-1/2 pr-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Munich_Panorama.jpg/1200px-Munich_Panorama.jpg"
                  alt="Munich"
                  className="h-64 w-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 pl-4 relative">
                <div className="flex flex-col h-full justify-between">
                  <p className="px-8 my-auto h-fit text-left text-blue-800 max-w-xs">
                    Mynihu është i njohur për arkitekturën e tij mahnitëse, festivalin Oktoberfest dhe trashëgiminë bavareze. Një qytet plot jetë dhe kulturë!
                  </p>
                  <a
                    href=""
                    className="bg-black text-white py-2 px-4 rounded-md text-center hover:bg-gray-800 absolute bottom-0 right-0 m-4"
                  >
                    Ofertat për Mynih
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 pr-4 relative">
                  <div className="flex flex-col items-start h-full">
                    <p className="px-8 my-auto h-fit text-left text-blue-800 max-w-xs">
                      Hamburgu, porti më i madh në Gjermani, është një qytet me një histori të pasur detare dhe një jetë nate të gjallë. Vizitoni Speicherstadt, zonën e ruajtjes së vjetër, për një përvojë unike.
                    </p>
                    <a
                      href=""
                      className="bg-black text-white py-2 px-4 rounded-md mt-4 text-center hover:bg-gray-800 absolute bottom-0 left-0 m-4"
                    >
                      Ofertat për Hamburg
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pr-4">
                  <img
                    src="https://www.hotelscombined.com/rimg/dimg/80/38/f66b237f-city-19864-1656e735037.jpg?width=1366&height=768&crop=true"
                    alt="Hamburg"
                    className="h-64 w-auto ml-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-600 mt-10">
        <p>Discover Germany</p>
      </footer>

      <Footer />
    </>
  );
};

export default Germany;
