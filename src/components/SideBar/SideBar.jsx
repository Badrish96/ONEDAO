import React, { useState } from "react";
import profile_pic from "../../assets/DJV MAR 1011-02.jpg";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserClock,
  faUsers,
  faUserTie,
  faGlobe,
  faCarRear,
  faCodeBranch,
  faSliders,
  faGrip,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const [active, setActive] = useState("Dashboard");

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <div className="menu">
      <div className="user">
        <div className="user_image">
          <img src={profile_pic} alt="UserImage" />
        </div>
        <div className="users_info">
          <p>Maharram</p>
          <p>{"+998(99)436-46-15"}</p>
        </div>
      </div>
      <p className="main_menu">MAIN MENU</p>
      <div className="menu_items">
        <ul className="nav flex-column">
          <li
            className={`nav-item ${active === "Dashboard" ? "active" : ""}`}
            onClick={() => handleClick("Dashboard")}
          >
            <a className="nav-link" aria-current="page" href="#">
              <FontAwesomeIcon icon={faGrip} className="icon_size" />
              <span>Dashboard</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Orders" ? "active" : ""}`}
            onClick={() => handleClick("Orders")}
          >
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faBook} className="icon_size" />
              <span>Orders</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Rides" ? "active" : ""}`}
            onClick={() => handleClick("Rides")}
          >
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faUserClock} className="icon_size" />
              <span>Rides</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Clients" ? "active" : ""}`}
            onClick={() => handleClick("Clients")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faUsers} className="icon_size" />{" "}
              <span>Clients</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Drivers" ? "active" : ""}`}
            onClick={() => handleClick("Drivers")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faUserTie} className="icon_size" />
              <span>Drivers</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Shift" ? "active" : ""}`}
            onClick={() => handleClick("Shift")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faDollarSign} className="icon_size" />
              <span>Shift</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Live Map" ? "active" : ""}`}
            onClick={() => handleClick("Live Map")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faGlobe} className="icon_size" />
              <span>Live Map</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Car Classes" ? "active" : ""}`}
            onClick={() => handleClick("Car Classes")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faCarRear} className="icon_size" />
              <span>Car Classes</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Branches" ? "active" : ""}`}
            onClick={() => handleClick("Branches")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faCodeBranch} className="icon_size" />
              <span>Branches</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Moderators" ? "active" : ""}`}
            onClick={() => handleClick("Moderators")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faUsers} className="icon_size" />
              <span>Moderators</span>
            </a>
          </li>
          <li
            className={`nav-item ${active === "Settings" ? "active" : ""}`}
            onClick={() => handleClick("Settings")}
          >
            <a className="nav-link" aria-disabled="true">
              <FontAwesomeIcon icon={faSliders} className="icon_size" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
