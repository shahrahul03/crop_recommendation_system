import React, { useContext, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 pt-4">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              {/* <Logo className="h-8 w-8 text-indigo-600" /> */}
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <Link to="/homePage" className="text-gray-900 font-medium hover:text-indigo-600">
                Dashboard
              </Link>
              <Link to="/about" className="text-gray-900 font-medium hover:text-indigo-600">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-900 font-medium hover:text-indigo-600">
                Contact Us
              </Link>
              <Link to="/readMe" className="text-gray-900 font-medium hover:text-indigo-600">
                Read Me
              </Link>
              {!isAuthenticated && (
                <Link to="/login" className="text-gray-900 font-medium hover:text-indigo-600">
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center pb-3 space-x-4">
            <button className="bg-white p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <BellIcon className="h-6 w-6" />
            </button>

            {isAuthenticated && (
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://via.placeholder.com/32"
                      alt="User"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleSignOut}
                            className={`${active ? 'bg-gray-100' : ''} block px-4 w-full py-2 text-sm text-gray-700`}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
          <div className="-mr-2 pb-2 pr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/homePage" className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base hover:text-indigo-600">
              Dashboard
            </Link>
            <Link to="/about" className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base hover:text-indigo-600">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base hover:text-indigo-600">
              Contact Us
            </Link>
            <Link to="/readMe" className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base hover:text-indigo-600">
              Read Me
            </Link>
            {!isAuthenticated && (
              <Link to="/login" className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base hover:text-indigo-600">
                Login
              </Link>
            )}
          </div>
          {isAuthenticated && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/32" alt="User" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">User Name</div>
                  <div className="text-sm font-medium text-gray-500">user@example.com</div>
                </div>
                <button className="ml-auto bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <BellIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600">
                  Your Profile
                </Link>
                <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600">
                  Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block px-4 w-full   py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
