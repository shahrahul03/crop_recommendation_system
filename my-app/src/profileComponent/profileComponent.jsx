import React, { useEffect, useState } from 'react';

const ProfileComponent = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userEmail = 'kishor@gmail.com'; 

        const response = await fetch(`http://localhost:5000/profile?email=${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch profile data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
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
