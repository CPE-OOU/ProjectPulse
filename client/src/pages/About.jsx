import React, { useState } from "react";

import img1 from "../assets/images/download.jpeg"
import img2 from "../assets/images/close-up-man-working-computer-chips.jpg"
import img3 from "../assets/images/medium-shot-colleagues-posing-together.jpg"
import img4 from "../assets/images/medium-shot-colleagues-posing-together.jpg"
import img5 from "../assets/images/close-up-man-working-computer-chips.jpg"
import img6 from "../assets/images/close-up-man-working-computer-chips.jpg"
const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const limitedContent = isExpanded ? section.content : section.content.slice(0, 150) + "...";

  const sections = [
    {
      title: "About Department",
      subtitle: "History of the Department Computer Engineering",
      content: `The Department of Computer Engineering in the College of Engineering, College of Engineering and Environmental Studies Ibogun Campus of Olabisi Onabanjo University was formally commissioned in November 2003 by the Ogun State Government. It has the responsibility for the needs, training and services in Computer Engineering and Technology.
      The Technological developments have brought about revolution in our society. The revolution has the effect on our thinking and social norms. In recognition of these facts, the position of the Department of Computer Engineering is to offer the very highest quality that can ever be achieved in field of Computer Engineering and Technology.`,
      image: img1,
    },
    {
      title: "Philosophy and Objective",
      subtitle: "Our Mission and Goals",
      content: `The aim of the Computer Engineering programme is to produce graduates who can fill the role of engineering practitioners in the computer industry within the global market. This requires that such graduates should be:
      - Well-grounded in the general area of digital electronic engineering
      - Capable to undertake the design, construction and maintenance of digital computers.
      - Versatile in computer and system programming techniques.
      - Able to adopt and adapt exogenous computer technologies for the solution of local problems.
      - Able to undertake independent or research studies in the field of computer technology and applications.`,
      image: img2
    },
    {
      title: "Graduation Requirements",
      subtitle: "Course Requirements and Units",
      content: `All prescribed 100L science courses. Direct entry candidates may however be exempted from some specified courses – (33 units)
      General courses in College of Engineering 'FEG courses' – 23 units
      General courses outside Computer Engineering
      MEG courses –23 units
      EEG courses –15 units
      Compulsory Computer Engineering courses
      200L–1 credit, 300L– 26 units, 400L–12 units, 500L–27 unit
      Electives Departmental Restricted – 4 units
      Electives Free/College Restricted – 4 units
      University requirement: General studies courses GNS – 10 units
      Industrial Experience SIWES – 6 units`,
      image: img3
    },
    {
      title: "About ProjectPulse",
      subtitle: "This Web-Based Repository for Project Management with customized chatbot",
      content: `Welcome to our innovative web-based repository system, designed specifically for efficient project management in the field of Computer Engineering. This platform serves as a centralized hub for students, faculty, and researchers to store, manage, and collaborate on various projects and research papers.`,
      image: img4
    },
      {
      title: "About Team",
      subtitle: "Alayaki Temitope",
      content:'lorem ipsum',
      image:img5
    },
    {
      title: "About Team",
      subtitle: "Jehoakim Vincent",
      content:'lorem ipsum',
      image:img6
    }
    
  ];

  // const GlassContainer = ({ title, subtitle, content, image }) => {
  //   const [isExpanded, setIsExpanded] = useState(false);
  //   const limitedContent = isExpanded ? content : content.slice(0, 150) + "...";

  //   return (
      
  //     <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        
  //       <img src={image} alt={title} className="w-full h-48 object-cover" />
  //       <div className="p-6">
  //         <h2 className="text-2xl font-bold text-blue-800 stroke-gray-950 mb-2">{title}</h2>
  //         <h3 className="text-sm font-semibold text-gray-600 mb-4">{subtitle}</h3>
  //         <p className="text-black text-sm mb-4">{limitedContent}</p>
  //         <button
  //           className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
  //           onClick={() => setIsExpanded(!isExpanded)}
  //         >
  //           {isExpanded ? "Show Less" : "Show More"}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="bg-gradient-to-r from-white via-gray-500 to-blue-700 mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center font-sans text-shadow-3d text-white mb-5">ABOUT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-14">
        {sections.map((section, index) => (
          // <GlassContainer key={index} {...section} />
          <div key={index} className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <img src={section.image} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 stroke-gray-950 mb-2">{section.title}</h2>
              <h3 className="text-sm font-semibold text-gray-600 mb-4">{section.subtitle}</h3>
              <p className="text-black text-sm mb-4">{isExpanded ? section.content : section.content.slice(0, 150) + "..."}</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
