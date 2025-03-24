import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        {/* Title & Close Button */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <span className="close-btn" onClick={() => setShowLogin(false)}>✖</span>
        </div>

        {/* Input Fields */}
        <div className="login-popup-inputs">
          {currState === "Sign up" && <input type="text" placeholder="Your name" />}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </div>

        {/* Submit Button */}
        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>

        {/* Terms & Conditions */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {/* Switch between Login & Signup */}
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
