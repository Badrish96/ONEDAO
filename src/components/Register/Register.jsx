import React from "react";
import register_banner from "../../assets/register_background.jpg";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleVerify = () => {
    navigate("/verify");
  };

  return (
    <div className="container d-flex main">
      <div className="wrap">
        <div className="register_banner">
          <img src={register_banner} alt="RegisterBanner" />
        </div>
        <div>
          <div className="register_form">
            <div className="register_heading">
              <h3>Register to Admin Panel</h3>
              <h6>Enter your phone number and password below</h6>
            </div>
            <div className="form_inputs">
              <form>
                <label>EMAIL ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email id"
                />
                <label>PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <label>CONFIRM PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your confirm password"
                />
                <div className="registerForm_btn">
                  <button onClick={handleVerify}>Register</button>
                  <p>
                    Already have an account?
                    <a href="" onClick={handleLogin}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
