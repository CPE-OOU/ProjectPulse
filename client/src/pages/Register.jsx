import React, { useState } from 'react'; 
import axios from "axios";

const Register = () => {
  // const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    type: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.username || !formData.email || !formData.type || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
    }else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
    }

    try {
      setLoading(!loading)
      axios.post('http://localhost:4000/api/v1/auth/signup', 
      {
        username:formData.username,
        email:formData.email,
        type:formData.type,
        password:formData.password,
      })
      .then((res) => {
          if (res.status === 200) {
            alert(res.data);
            // console.log(res);
            setLoading(false);
          }
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      })
    } catch (error) {
      alert(error.response.data)
      setLoading(false);
    }
  };
  return ( 
    <div  className="h-screen w-full bg-white flex items-center justify-center">
      <div className="bg-white border-2 shadow-lg rounded-lg p-8 w-10/12 lg:w-1/3 mx-auto lg:mx-0">
        <div>
          <h2 className="font-sans mt-2 text-center text-indigo-600 text-xl font-semibold">
            Create Account
          </h2>
        </div>
        <form className="mt-8 w-full\" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm lg:text-base"
                placeholder="Enter your full name here"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm lg:text-base"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <select name="type" id="type" className='w-full text-xs lg:text-base' onChange={handleChange}>
                <option value="">--Select Rgistration type--</option>
                <option value="student">Student</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm lg:text-base"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm lg:text-base"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none mt-5"
              disabled={loading}
            >
              {loading && <div className='w-7 h-7 border-2 border-r-slate-400 border-white rounded-full animate-spin'/>}
              {!loading && 'Register'}
            </button>
            <p className='font-sans text-center text-sm font-semibold mt-4'> 
              Already have an account?{' '}
              <a href="/login" className="text-sm font-medium text-blue-700 hover:text-blue-200">
                Login
              </a>
            </p>
          </div>
        </form>
        <button
          // onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Register