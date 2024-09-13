import React, { useState } from 'react';
import { FaFileAlt, FaUpload, FaChevronRight } from 'react-icons/fa';

const Project = () => {
  const [papers, setPapers] = useState([
    { id: 1, title: 'AI in Healthcare', abstract: 'This paper explores...', result: 'We found that...', conclusion: 'In conclusion...' },
    { id: 2, title: 'Quantum Computing Advances', abstract: 'Recent developments in...', result: 'Our experiments show...', conclusion: 'These findings suggest...' },
    { id: 3, title: 'Machine Learning in Finance', abstract: 'This project provided...', result: 'With the success of the project...', conclusion: 'These findings suggest...' },
  ]);

  const [selectedPaper, setSelectedPaper] = useState(null);

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
  };

  const handleUpload = () => {
    // Implement upload functionality
    console.log('Upload clicked');
  };

  const handleViewMore = (id) => {
    // Implement view more functionality
    console.log('View more clicked for paper with id:', id);
    // You can add navigation to a detailed view or expand the current view
  };

  return (
    <div className="container rounded-xl bg-gradient-to-tr from-white to-gray-300 mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-shadow-3d font-sans text-blue-700 sc">Project Papers</h1>
        <p className="text-lg text-gray-600 mt-2 shadow-xl rounded-2xl">Browse and manage your research documents</p>
      </div>
      
      <div className="flex">
        {/* Sidebar: Paper List */}
        <div className="w-1/3 pr-4 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Available Papers</h2>
          <ul className="space-y-4">
            {papers.map((paper) => (
              <li 
                key={paper.id} 
                className="cursor-pointer bg-white p-4 shadow-lg rounded-lg hover:bg-blue-50 transition duration-200 ease-in-out"
                onClick={() => handlePaperClick(paper)}
              >
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-blue-600"/>
                  <span className="text-gray-800 font-medium">{paper.title}</span>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
        
        {/* Main Content: Paper Details */}
        <div className="w-2/3 pl-4">
          {selectedPaper ? (
            <div className="bg-white shadow-lg p-6 rounded-lg transition-all ease-in-out duration-300">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">{selectedPaper.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Abstract</h3>
                <p className="text-gray-600">{selectedPaper.abstract}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Result</h3>
                <p className="text-gray-600">{selectedPaper.result}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Conclusion</h3>
                <p className="text-gray-600">{selectedPaper.conclusion}</p>
              </div>
              
              <button 
                onClick={() => handleViewMore(selectedPaper.id)}
                className="mt-4 inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all ease-in-out"
              >
                View More
                <FaChevronRight className="ml-2" />
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 font-sans font-bold">Select a paper to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
