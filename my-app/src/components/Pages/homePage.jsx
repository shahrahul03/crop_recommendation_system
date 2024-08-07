import React from 'react';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../FooterComponent/fotterComponent';
import Weather from '../WeatherComponent/weatherComponent';
import Img1 from "../../img/himg1.png";
import Img2 from "../../img/himg2.png";
import Img3 from "../../img/himg3.png";
import { AuthContext } from '../../AuthContext/AuthContext';

function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle button click
  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate('/recommendationsComponent');
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  return (
    // Main container
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-100">
      {/* Weather Component */}
      <div className="hidden lg:block absolute top-11 left-0 m-4 z-50">
        <Weather />
      </div>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-4 sm:p-8 lg:p-12">
        {/* Header */}
        <h1 className="text-3xl sm:text-3xl font-semibold text-green-800 mb-3 max-w-6xl mx-auto">
          Crops Recommendation System
        </h1>
        <p className="text-lg sm:text-base text-green-700 mb-7 max-w-4xl mx-auto">
          Discover the best crops to grow based on your location and soil conditions.
        </p>

        {/* Explore Section Heading */}
        <h2 className="text-2xl sm:text-2xl font-semibold text-green-800 mb-5 max-w-4xl mx-auto">
          Explore the Benefits of Crs
        </h2>

        {/* Image and Content Sections */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-8">
          {/* Mobile First - Display images and content alternately */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center gap-8 mb-8">
              <div className="flex flex-col items-center bg-gradient-to-r from-green-50 to-white p-2 rounded-lg shadow-md">
                <img 
                  src={Img1} 
                  alt="Crop Recommendation"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-800">
                  Optimize Your Crop Selection
                </h3>
                <p className="text-base sm:text-lg text-green-700 text-center">
                  Our advanced system analyzes your soil and climate data to suggest the most suitable crops for your area, ensuring better yields and healthier plants.
                </p>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-r from-green-50 to-white p-2 rounded-lg shadow-md">
                <img 
                  src={Img2} 
                  alt="Crop Benefits"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-800">
                  Tailored Recommendations
                </h3>
                <p className="text-base sm:text-lg text-green-700 text-center">
                  Enter specific data about your environment and get customized crop recommendations that cater to your unique needs.
                </p>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-r from-green-50 to-white p-2 rounded-lg shadow-md">
                <img 
                  src={Img3}
                  alt="Crop Insights"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-800">
                  Make Informed Decisions
                </h3>
                <p className="text-base sm:text-lg text-green-700 text-center">
                  With our detailed insights and recommendations, you can confidently plan your planting and maximize your agricultural success.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Images and content in a grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center bg-gradient-to-r from-green-50 to-white p-4 rounded-lg shadow-md">
              <img 
                src={Img1} 
                alt="Crop Recommendation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Optimize Your Crop Selection
              </h3>
              <p className="text-lg text-green-700">
                Our advanced system analyzes your soil and climate data to suggest the most suitable crops for your area, ensuring better yields and healthier plants.
              </p>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-green-50 to-white p-4 rounded-lg shadow-md">
              <img 
                src={Img2} 
                alt="Crop Benefits"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Tailored Recommendations
              </h3>
              <p className="text-lg text-green-700">
                Enter specific data about your environment and get customized crop recommendations that cater to your unique needs.
              </p>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-green-50 to-white p-4 rounded-lg shadow-md">
              <img 
                src={Img3}
                alt="Crop Insights"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center bg-gradient-to-r from-white to-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Make Informed Decisions
              </h3>
              <p className="text-lg text-green-700">
                With our detailed insights and recommendations, you can confidently plan your planting and maximize your agricultural success.
              </p>
            </div>
          </div>
        </div>

        {/* Get Crop Recommendations Button */}
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-green-500 to-green-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition-colors duration-300 mt-8"
        >
          Get Crop Recommendations
        </button>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
