import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../FooterComponent/fotterComponent';
function homePage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-900 rounded-md">
     

      <main className="flex flex-col items-center justify-center flex-1 text-center p-8">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to CropRecommend</h1>
        <p className="text-lg text-white mb-12">Your ultimate guide for choosing the best crops to grow based on your location and conditions.</p>
        <Link to="/recommendationsComponent" className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-50">
          Get Crop Recommendations
        </Link>
      </main>

     
    </div>

    <footer className=" footer">
        <Footer/>
      </footer>
  </>
)}

export default homePage;