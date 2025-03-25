import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* This route will handle both main services and subservices */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;