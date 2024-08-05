export const signOut = (navigate) => {
  // Clear token from local storage
  localStorage.removeItem("authToken");

  // Optionally, notify backend about the sign-out
  // await axios.post('http://localhost:5000/api/logout', {}, {
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  // });

  // Redirect to login page
  // const navigate = useNavigate();
  navigate("/login"); // Adjust the path as necessary
};
