import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    
  return (
    <>
    <footer className=" w-full bg-white bg-gradient-to-r  from-white to-blue-400 shadow">
        <div className="w-full p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white-500 sm:text-center">© {year} <a href="">Projectpulse.</a> <br /> All Rights Reserved.
            </span>
            <ul className="flex flex-wrap text-white-500 items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                
                <li>
                    <Link to="/signup" className="hover:underline me-4 md:me-6">Signup</Link>
                </li> 
                <li>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                </li>
            </ul>
        </div>
    </footer>

    </>
  )
}
