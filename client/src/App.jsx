import Navbar from "./Components/Nav"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./Components/Footer";
import Signup from "./pages/Register";
import FloatingChatButton from "./Components/FloatingChatButton";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path="/upload" element={<ProjectUpload />} /> */}
          {/* <Route path="/admin" element={<AdminPanel />} />  */}
        </Routes>
        <FloatingChatButton />
        <Footer/>
      </Router>
    </>
  )
  

export default App
