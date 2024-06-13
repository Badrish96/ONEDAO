import React from "react";
import "../Register/register.css";
import register_banner from "../../assets/register_background.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="container d-flex main">
        <div className="wrap">
          <div className="register_banner">
            <img src={register_banner} alt="RegisterBanner" />
          </div>
          <div>
            <div className="register_form">
              <div className="register_heading">
                <h3>Log In to Admin Panel</h3>
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
                  <div className="registerForm_btn">
                    <button onClick={handleDashboard}>Log In</button>
                    <p>
                      {"Don't have an account?"}
                      <a href="" onClick={handleRegister}>
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
