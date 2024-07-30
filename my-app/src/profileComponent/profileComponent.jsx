import React, { useState, useEffect } from 'react';
import axios from 'axios';

const domain = 'http://localhost:5000';

const ProfileComponent = () => {
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchToken = () => localStorage.getItem('authToken');

  const handleError = (err) => {
    setError(err.response?.data?.msg || 'An error occurred');
    setLoading(false);
  };

  const fetchProfile = async () => {
    try {
      const token = fetchToken();
      if (!token) {
        setError('No token found');
        return;
      }
      const response = await axios.get(`${domain}/api/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data.profile);
      setBio(response.data.profile.bio || '');
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const token = fetchToken();
      if (!token) {
        setError('No token found');
        return;
      }

      const formData = new FormData();
      formData.append('bio', bio);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const response = await axios.put(`${domain}/api/profile/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfile(response.data.profile);
      setError(null); // Clear any previous error messages
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {profile && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{profile.user.name}</h2>
          <p className="text-gray-700 mb-2">{profile.user.email}</p>
          <p className="text-gray-700 mb-4">{profile.bio}</p>
          {profile.profileImage && (
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Bio:</label>
        <input
          type="text"
          value={bio}
          onChange={handleBioChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Profile Image:</label>
        <input
          type="file"
          onChange={handleProfileImageChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileComponent;
