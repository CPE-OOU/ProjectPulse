import React, { useState } from 'react';
// import LoginPopup from '../Components/Loginpopup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { loginStart, loginSuccess, loginFailure } from '../app/user/user';

const Login = () => {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {loading, errorMessage} = useSelector((state) => state.user);
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || username === "" || password === "") {
      dispatch(loginFailure("Please fill in all fields"));
    }

    try {
      dispatch(loginStart())
      axios.post("http://localhost:4000/api/v1/auth/login", {username, password})
      .then((res)=>{
        if (res.status === 200) {
            alert(`Welcome back ${res.data.username}`)
            navigate("/dashboard");
            dispatch(loginSuccess(res.data));
        } else{
          dispatch(loginFailure(res.response.data));
        }
        console.log(errorMessage);
      })
      .catch((err)=>{
        dispatch(loginFailure(err.response.data))
      })
      
    }catch (error) {
      dispatch(loginFailure(error.message));
    }}

  return (
    <div>
      {/* <button onClick={() => setIsLoginOpen(true)}>Open Login</button>
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}

      <div className="h-screen bg-indigo-50 w-full mx-auto lg:mx-0 flex items-center justify-center">
        <div className="border-2 bg-white rounded-lg shadow-xl p-8 w-10/12 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-center font-sans text-blue-700">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              className="rounded-lg w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your full name here"
              // value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              required
              className=" rounded-lg w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Entar your Password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {loading && <div className='w-5 h-5 border-2 border-r-slate-400 border-white rounded-full animate-spin'/>}
              {!loading && 'Login'}
            </button>
              {errorMessage && <div className="text-red-500 text-center rounded-lg bg-red-200 p-1 text-sm">{errorMessage}</div>}
            <p className="text-center">
              Don't have an account?
              <a href="/signup" className="text-sm font-medium text-blue-600">sign up</a>
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Login;