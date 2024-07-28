import React from 'react';
import MyImage from "../img/myImage.jpeg";
import Footer from '../FooterComponent/fotterComponent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUsComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set auto-play speed (3 seconds)
    arrows: false, // Optional: hide navigation arrows
    
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Section */}
          <div className="p-8 text-center bg-green-600 text-white">
            <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
            <p className="text-lg">Learn more about our mission and the team behind our success.</p>
          </div>

          {/* Image Slider Section */}
          <div className="relative h-64 bg-gray-200">
            <Slider {...sliderSettings}>
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
              </div>
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
              </div>
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
              </div>
              {/* Add more slides if needed */}
            </Slider>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-green-700 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our Crop Recommendation System! Our mission is to empower farmers with the knowledge and tools they need to make informed decisions about crop selection based on their unique soil and climate conditions.
            </p>
            <p className="text-gray-700 mb-4">
              Our system takes into account various factors such as pH, nitrogen, phosphorus, potassium, temperature, humidity, and rainfall to provide tailored crop recommendations. By leveraging modern technology, we aim to enhance agricultural productivity and sustainability.
            </p>
            <p className="text-gray-700 mb-4">
              Our team is comprised of experts in agriculture, data science, and software development who are dedicated to creating innovative solutions for the farming community. We believe that by providing accurate and reliable information, we can help farmers achieve better yields and improve their livelihoods.
            </p>
            <p className="text-gray-700">
              Thank you for choosing our Crop Recommendation System. We look forward to supporting you in your farming journey!
            </p>
          </div>

          {/* Team Section */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-6">
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img className="w-full h-48 object-cover" src={MyImage} alt="Team Member" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">Rahul Shah</h3>
                    <p className="text-sm text-gray-600">Software Developer and Researcher</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img className="w-full h-48 object-cover" src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6836.jpg?size=338&ext=jpg&ga=GA1.1.1395207783.1722188211&semt=sph" alt="Team Member" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">Deepak Karn</h3>
                    <p className="text-sm text-gray-600">Supervisor and Data Scientist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutUsComponent;
