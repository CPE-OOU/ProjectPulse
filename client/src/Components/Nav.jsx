import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import logo from '../assets/images/picture.png';
import coesa from '../assets/images/coesa.png';
import {useSelector} from "react-redux";
import avatar from '/profile/avatar.png';

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const {currentUser} = useSelector((state) => state.user);
  const [profilePics, setProfilePics] = useState(avatar);

  // State for managing the LoginPopup visibility
  // const [isLoginOpen, setLoginOpen] = useState(false);

  // Function to handle opening and closing the LoginPopup
  const openLoginPopup = () => setLoginOpen(true);
  const closeLoginPopup = () => setLoginOpen(false);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Sample search logic
    const results = ['Result 1', 'Result 2', 'Result 3'].filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);

    console.log(`Searching for: ${searchTerm}`);
  };

  const NavLink = ({ href, children }) => {
    const isActive = location.pathname === href;
    return (
      <Navbar.Link 
        as={Link} 
        to={href}
        className={`
          transition-colors duration-200
          ${isActive 
            ? 'text-blue-700 hover:text-blue-800' 
            : 'text-gray-700 hover:text-blue-600'
          }
         text-gray-700 hover:text-blue-600`
        }
      >
        {children}
      </Navbar.Link>
    );
  };

  return (
    <>
      <Navbar fluid className="shadow-md text-white bg-gradient-to-r from-white to-blue-400 dark:bg-gray-900 transition duration-300 ease-in-out">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo} // Path to the image in the public directory
            alt="logo"
            className="h-10 w-auto"
          />
          <img src={coesa} className=" w-10 ml-2" alt="logo" />
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-blue-700 px-4 py-2 rounded-lg ">
            ProjectPulse
          </span>
        </Navbar.Brand>
        {/* <div className="relative flex items-center mx-auto w-1/2 lg:w-1/3">
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm transition-all duration-300 ease-in-out"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          
          {searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
        <div className='flex flex-rown items-center'>
          <Navbar.Toggle />
          <Navbar.Collapse className="mr-10 text-white font-sans font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            {currentUser === null && <NavLink href="/login">Get Started</NavLink>}
          </Navbar.Collapse>
          {currentUser && <a href="/dashboard" className='ml-2'><div className='w-6 h-6 mr-3 rounded-full overflow-hidden'><img src={avatar} /></div></a>}

        </div>
        
      </Navbar>
      {/* <LoginPopup isOpen={isLoginOpen} onClose={closeLoginPopup} /> */}
    </>
  );
}
