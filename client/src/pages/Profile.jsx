import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Fetch user data from backend
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/authdb/user'); // Replace with your API endpoint
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Handle profile picture upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('profilePic', selectedFile);

    try {
      setUploading(true);
      const response = await axios.post('http://localhost:5000/api/authdb/uploadProfilePic', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile picture uploaded successfully!');
      setUploading(false);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            {profileData?.profilePic ? (
              <img src={profileData.profilePic} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <div className="text-gray-400 text-center flex items-center justify-center h-full">No Image</div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{profileData?.name || 'John Doe'}</h2>
            <p className="text-gray-600">{profileData?.email || 'johndoe@example.com'}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold">Profile Information</h3>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                value={profileData?.username || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                value={profileData?.email || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                value={profileData?.phone || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                value={profileData?.address || ''}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold">Upload Profile Picture</h3>
          <input
            type="file"
            className="mt-4"
            onChange={handleFileChange}
          />
          <button
            onClick={handleUpload}
            className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
