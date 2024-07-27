import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import logo from "../img/logo.png"

const Footer = ({ closeMenu }) => {
  return (
    <footer className="bg-gray-900 mb-0 rounded-md text-white py-8">
      <div className="container mx-auto  px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            
            <h5 className="text-xl font-semibold mb-4">About Crops Recommendation System</h5>
            <div className='flex justify-center mb-3'>
              {/* <img src={logo} alt='logo of company' className='w-20 h-11 rounded-2xl'></img> */}
            </div>
            <div className=" p-2 rounded-lg shadow-md">
  <p className="text-white text-lg leading-relaxed">
    <span className="font-bold text-red-700">Welcome to crops recommendation system </span>, your one-stop solution for all your Agricultures needs! 
  </p>
</div>

          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Customer Service</h5>
            <ul className="space-y-2">
              <li><Link to="/login" onClick={closeMenu} className="hover:underline">Login</Link></li>
              <li><Link to="/homePage" onClick={closeMenu} className="hover:underline">Dashboard</Link></li>
              <li><Link to="/about" onClick={closeMenu} className="hover:underline">About</Link></li>
              
              <li><Link to="/contact" onClick={closeMenu} className="hover:underline">Contact</Link></li>
              
              <li><Link to="/readMe" className="hover:underline">Read Me?</Link></li>
             
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Press</Link></li>
              <li><Link to="#" className="hover:underline">Affiliate Program</Link></li>
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6  md:mb-0">
            <h5 className="text-xl font-semibold mb-4 ">Follow Us</h5>
            <div className="flex  space-x-4 justify-center flex-row">
              <Link to="https://facebook.com/yourprofile" className=" hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://twitter.com/yourprofile" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="https://instagram.com/yourprofile" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="https://linkedin.com/in/yourprofile" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Crops Recommendation System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
