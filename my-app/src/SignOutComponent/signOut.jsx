// signOut.js
export const signOut = (navigate) => {
  // Clear user data from localStorage or sessionStorage
  // localStorage.removeItem('user');
  // localStorage.removeItem('token');

  // Optionally, you can clear sessionStorage as well
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('token');

  // Redirect to login page
  navigate('/login');
};
