import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../FooterComponent/fotterComponent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Weather from '../WeatherComponent/weatherComponent';

function HomePage() {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    // Main container
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Weather Component */}
      <div className="hidden lg:block absolute top-0 left-0 m-0 p-4 z-50">
        <Weather />
      </div>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-4 sm:p-8 lg:p-12 overflow-x-hidden bg-gradient-to-b from-white to-green-100">
        {/* Header */}
        <h1 className="text-2xl sm:text-4xl font-bold text-green-950 mb-4">
          Welcome to Crops Recommendation System
        </h1>
        <p className="text-base sm:text-lg text-green-950 mb-8">
          Your ultimate guide for choosing the best crops to grow based on your location and conditions.
        </p>

        {/* Container for Image Slider */}
        <div className="w-screen mb-8">
          <Slider {...sliderSettings}>
            <div className="w-full">
              <img 
                src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Slide 1"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full">
              <img 
                src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Slide 2"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full">
              <img 
                src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Slide 3"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Slider>
        </div>

        {/* Container for About and How to Use */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12 mb-8">
          {/* What is the Crop Recommendation System Section */}
          <section className="bg-gradient-to-b from-white to-green-100 text-green-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What is the Crop Recommendation System?</h2>
            <p className="  text-lg italic mb-4">
              Our Crop Recommendation System helps farmers and gardeners select the most suitable crops based on local climate conditions and soil quality. By inputting data such as soil pH, nitrogen levels, and weather conditions, the system provides tailored recommendations to optimize crop yield and health.
            </p>
          </section>

          {/* How to Use the System Section */}
          <section className="bg-gradient-to-b from-white to-green-100 text-green-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">How to Use the System</h3>
            <ul className="list-disc text-lg list-inside italic mb-4">
              <li>Enter your location and current weather conditions.</li>
              <li>Provide details about soil quality, including pH and nutrient levels.</li>
              <li>Review the recommended crops based on the input data.</li>
              <li>Plan and plant your crops with confidence using our tailored suggestions.</li>
            </ul>
          </section>
        </div>

        {/* Get Crop Recommendations Button */}
        <Link to="/recommendationsComponent" className="bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition-colors duration-300 mt-8 block mx-4 sm:mx-8 lg:mx-12 mb-3">
          Get Crop Recommendations
        </Link>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
