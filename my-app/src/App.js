import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navBar/navbarComponent";
import HomePage from "../src/components/Pages/homePage";
import AboutUsComponent from "./components/Pages/AboutUsComponent";
import ContactUsComponent from "./components/Pages/contactUsComponent";
import ReadMeComponent from "./components/Pages/readMeComponent";
import Login from "./components/LoginComponent/loginComponent";
import Profile from "./components/profileComponent/profileComponent";
import RecommendationsComponent from "./components/Pages/recommendationsComponent";
import { AuthProvider } from "./AuthContext/AuthContext";
import AdminContactPageComponent from "./components/AdminContagePageComponent/AdminContagePageComponent";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="content">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="/about" element={<AboutUsComponent />} />
                <Route path="/contact" element={<ContactUsComponent />} />
                <Route path="/readMe" element={<ReadMeComponent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/recommendationsComponent"
                  element={<RecommendationsComponent />}
                />
                <Route
                  path="/admin-contact"
                  element={<AdminContactPageComponent />}
                />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
