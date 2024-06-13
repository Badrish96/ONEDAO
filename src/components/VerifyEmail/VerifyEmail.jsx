import React from "react";
import "../Register/register.css";
import register_banner from "../../assets/register_background.jpg";
import "./verify.css";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
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
                <h3>Verify your email</h3>
                <h6>Enter the OTP from your register email id</h6>
              </div>
              <div className="EnterOtp_box">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div className="verify_btn">
                <button onClick={handleLogin}>Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
