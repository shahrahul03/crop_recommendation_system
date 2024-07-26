import React, { useEffect, useState } from 'react';

const ProfileComponent = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          throw new Error('No token found');
        }
    
        const response = await fetch('http://localhost:5000/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
    
        const data = await response.json();
        setUser(data); // Update state with the fetched user data
      } catch (error) {
        console.error('Error:', error.message);
        setError(error.message); // Set the error message in state
      }
    };
    
    fetchProfileData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Contact: {user.contact}</p>
    </div>
  );
};

export default ProfileComponent;
