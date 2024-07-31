import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed

export const signOut = () => {
  // Clear token from local storage
  localStorage.removeItem("authToken");

  // Optionally, notify backend about the sign-out
  // await axios.post('http://localhost:5000/api/logout', {}, {
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  // });

  // Redirect to login page
  const navigate = useNavigate();
  navigate("/login"); // Adjust the path as necessary
};
