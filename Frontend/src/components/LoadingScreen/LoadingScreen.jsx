import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import UrbanCompanyLogo from "../../assets/download/logo.png"; // Update the path as per your assets

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      // onFinish(); // Call the function to hide the loader when loading is complete
    }, 2000);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <img src={UrbanCompanyLogo} alt="Urban Company Logo" className="logo" />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
