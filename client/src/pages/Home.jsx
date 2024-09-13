import React, { useState } from "react";
// import bg from "../assets/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg"
import "./home.css";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg bg-cover bg-center bg-no-repeat">
      {/* Main Overlay */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
        {/* Welcome Section */}
        <div className="w-10/12 md:w-9/12 lg:w-1/2 h-auto text-center p-2 sm:p-6 md:p-6 lg:p-8 rounded-lg backdrop-blur-sm bg-white bg-opacity-20 shadow-2xl my-14">
          <h1 className="font-bold text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            <span className="">WELCOME</span>
          </h1>
          <p className="font-sans font-medium text-white text-sm sm:text-sm md:text-base mb-2">
            <span className=''>To</span>
          </p>
          <h2 className="font-sans font-extrabold text-blue-500 text-3xl lg:text-6xl mb-6 text-shadow-3d">
            PROJECTPULSE
          </h2>
          <p className="font-sans text-white text-xs md:text-sm mb-4">
            <span>
              Experience the future of project management and academic collaboration with our cutting-edge web-based repository system.
            </span>
          </p>
          <a 
            href="/login"
            className="bg-blue-500 w-3/5 sm:w-1/3 md:w-1/3 lg:w-1/3 hover:bg-blue-800 mx-auto my-4 text-white font-semibold block  py-3 px-6 rounded-full text-base shadow-lg transform hover:scale-105 transition duration-200">
              Get Started
          </a>
        </div>

        {/* Features Section */}
        <div className="mt-12 w-full max-w-6xl px-4">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Why Choose ProjectPulse?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4 mb-10">
            {/* Feature 1 */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-sm text-center mx-auto w-2/3 lg:w-full">
              <h4 className="text-xl font-extrabold text-shadow-3d text-white shadow-xl my-1">Seamless Collaboration</h4>
              <p className="text-white mt-4 text-xs leading-5 ">Collaborate with academic and project teams efficiently with real-time project tracking and task management.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white bg-opacity-20  p-6 rounded-lg shadow-lg backdrop-blur-sm text-center mx-auto w-2/3 lg:w-full">
              <h4 className="text-xl font-extrabold text-shadow-3d text-white shadow-xl my-1">Secure Storage</h4>
              <p className="text-white mt-4 text-xs leading-5">Store and access all your project documents and research papers securely in the cloud, accessible anytime, anywhere.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-sm text-center mx-auto w-2/3 lg:w-full">
              <h4 className="text-xl font-extrabold text-shadow-3d text-white shadow-xl my-1">Advanced Analytics</h4>
              <p className="text-white mt-4 text-xs leading-5">Get insights and analytics on project progress, performance, and collaboration metrics with our powerful tools.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12">
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-blue-500 hover:bg-blue-800 text-white font-semibold my-5 mb-16 py-3 px-8 rounded-full text-base shadow-lg transform hover:scale-105 transition duration-200">
              Join Us Today!
          </button>
        </div> */}
      </div>

      {/* Footer
      <footer className="w-full mt-12 bg-blue-900 bg-opacity-90 py-8 text-center text-white">
        <p className="text-sm">&copy; 2024 ProjectPulse. All rights reserved.</p>
      </footer> */}

    </div>
  );
};

export default Home;
