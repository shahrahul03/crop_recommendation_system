import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navBar/navbarComponent";
import HomePage from "./Pages/homePage";
import AboutUsComponent from "./Pages/AboutUsComponent";
import ContactUsComponent from "./Pages/contactUsComponent";
import ReadMeComponent from "./Pages/readMeComponent";
import Login from "../src/LogiComponent/loginComponent";
import Profile from "./profileComponent/profileComponent";

function App() {
  return (
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
