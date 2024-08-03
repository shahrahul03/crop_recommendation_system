import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../FooterComponent/fotterComponent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Weather from '../WeatherComponent/weatherComponent';

function HomePage() {
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
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-900 flex flex-col relative overflow-x-hidden">
      {/* Weather Component */}
      <div className="hidden lg:block absolute top-0 left-0 m-0 p-4 z-50">
        <Weather />
      </div>

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4 sm:p-8 lg:p-12 mb-0 overflow-x-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-1 -mt-3 sm:mb-1">
          Welcome to Crops Recommendation System
        </h1>
        <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
          Your ultimate guide for choosing the best crops to grow based on your location and conditions.
        </p>

        {/* Image Slider Section */}
        <div className="w-screen overflow-hidden mb-1">
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

        {/* What is Crop Recommendation System Section */}
        <section className="bg-white text-green-700 p-6 rounded-lg shadow-lg mx-4 sm:mx-8 lg:mx-12 animate__animated animate__fadeInUp">
          <h2 className="text-2xl font-bold mb-4">What is the Crop Recommendation System?</h2>
          <p className="text-base mb-4">
            Our Crop Recommendation System helps farmers and gardeners select the most suitable crops based on local climate conditions and soil quality. By inputting data such as soil pH, nitrogen levels, and weather conditions, the system provides tailored recommendations to optimize crop yield and health.
          </p>
          <h3 className="text-xl font-semibold mb-2">How to Use the System</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Enter your location and current weather conditions.</li>
            <li>Provide details about soil quality, including pH and nutrient levels.</li>
            <li>Review the recommended crops based on the input data.</li>
            <li>Plan and plant your crops with confidence using our tailored suggestions.</li>
          </ul>
        </section>

        {/* Get Crop Recommendations Button */}
        <Link to="/recommendationsComponent" className="bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition-colors duration-300 mt-8 block mx-4 sm:mx-8 lg:mx-12">
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
