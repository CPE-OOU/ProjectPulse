import React, { useState } from 'react';
import { FaUser, FaFolderOpen, FaUpload, FaCheckCircle, FaSignOutAlt } from 'react-icons/fa';  // Import icons
import Profile from '../Components/DashPages/Profile';
import Project from '../Components/DashPages/Project';
import Upload from '../Components/DashPages/Upload';
import Review from '../Components/DashPages/Review';
import bg from "../assets/images/bg.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../app/user/user';
import { useNavigate } from 'react-router-dom';

// import ProjectList from './projectList';

const Dashboard = () => { 
  const [view, setView] = useState("profile");
  const [visible, setVisible] = useState(false);
  const [arrow, setArrow] = useState("bx bxs-chevron-left");
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    alert("Logout Successful");
    dispatch(logout());
    navigate("/");

  }
  const Datas = [
    {
      id: 1,
      name: "Profile",
      icon: <FaUser />,
      viiew: "profile",
    },
    {
      id: 2,
      name: "Project Repo",
      icon: <FaFolderOpen />,
      viiew: "project",

    },
    {
      id: 3,
      name: "Upload Project",
      icon: <FaUpload />,
      viiew: "upload",
    },
    // {
    //   id: 4,
    //   name: "Review Submission",
    //   icon: <FaCheckCircle />,
    //   viiew: "review",
    // }
  ]



  return (
    <div className="flex w-full h-screen relative duration-700" >
      <aside className={visible ? "absolute z-50 -left-64 lg:relative w-64 bg-gray-800 text-white h-full p-6 flex flex-col justify-between duration-700" : "absolute z-50 lg:relative w-64 bg-gray-800 text-white h-full p-6 flex flex-col justify-between duration-700"}>
        <div>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <div className="my-1">
            {Datas.map((item) => {
              return(
              <div key={item.id} className="flex items-center text-sm space-x-3 hover:bg-slate-600 px-3 py-3 cursor-pointer duration-500" onClick={() =>{
                 setView(item.viiew) 
                //  setVisible(!visible)
                 setArrow(visible ? "bx bxs-chevron-left" : "bx bxs-chevron-right")}}
                 >
                 {item.icon}
                 <span>{item.name}</span>
              </div>
            )
            })}
          </div>
        </div>
        <button onClick={logOut} className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition duration-200">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
        <div onClick={() => {setVisible(!visible); setArrow(visible ? "bx bxs-chevron-left" : "bx bxs-chevron-right");
        }} 
          className='absolute top-3 -right-12 border-indigo-600 bg-white rounded-full border-2 w-10 h-10 flex items-center justify-center lg:hidden'>
          <i className={`${arrow} text-indigo-600 text-2xl font-bold`}></i>
        </div>
    </aside>
    <main className="w-full h-screen bg-white p-4 lg:p-8" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
       {view === "profile" && <Profile />}
       {view === "project" && <Project />}
       {view === "upload" && <Upload />}
       {view === "review" && <Review />}
      </main>
    </div>
  );
};

export default Dashboard;
