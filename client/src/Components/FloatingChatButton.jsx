import React, { useState } from 'react';
import Chatbot from '../pages/chatbot';

function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-20 lg:right-8 flex flex-col items-end z-50">
      {/* Chat window */}
      {isChatOpen && (

        <div className="w-full max-w-xs lg:max-w-md h-[70vh] lg:h-[60vh] bg-white rounded-lg shadow-lg border border-gray-300 transition-transform transform opacity-100 translate-y-0">
          {/* Chat header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-lg shadow-md">
            <h3 className="font-semibold text-lg">PP bot</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200 ease-in-out"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Chatbot component */}
          <div className="h-full flex flex-col">
            <Chatbot />
          </div>
        </div>
      )}

      {/* Floating chat button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 lg:p-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default FloatingChatButton;
