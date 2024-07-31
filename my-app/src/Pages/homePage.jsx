import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../FooterComponent/fotterComponent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-900 flex flex-col">
        <main className="flex flex-col items-center justify-center flex-1 text-center p-4 sm:p-8 lg:p-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
            Welcome to CropRecommend
          </h1>
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
            Your ultimate guide for choosing the best crops to grow based on your location and conditions.
          </p>
          
          {/* Image Slider Section */}
          <div className="relative w-screen overflow-hidden mb-8 sm:mb-12">
            <Slider {...sliderSettings}>
              <div className="w-full">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Slide 1"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="w-full">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Slide 2"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="w-full">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Slide 3"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </Slider>
          </div>

          <Link to="/recommendationsComponent" className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-50 mt-8 sm:mt-14">
            Get Crop Recommendations
          </Link>
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default HomePage;
