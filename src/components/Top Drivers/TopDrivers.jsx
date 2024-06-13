import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import driver1 from "../../assets/driver1.jpg";
import driver2 from "../../assets/driver2.jpg";
import driver3 from "../../assets/driver3.jpg";
import driver4 from "../../assets/driver4.jpg";
import driver5 from "../../assets/driver5.jpg";
import driver6 from "../../assets/driver6.jpg";
import "./topDrivers.css";
import { useNavigate } from "react-router-dom";
export default function TopDrivers() {
  const navigate = useNavigate();

  const drivers = [
    {
      img: driver1,
      name: "Maharrm Hasanli",
      phone: "+99(99)436-46-15",
      orders: 5,
      income: 98,
    },
    {
      img: driver3,
      name: "Gina Garza",
      phone: "+99(99)158-10-15",
      orders: 5,
      income: 15,
    },
    {
      img: driver2,
      name: "Brian Reed",
      phone: "+99(99)489-46-20",
      orders: 5,
      income: 23,
    },
    {
      img: driver4,
      name: "Tammy Spencer",
      phone: "+99(99)785-10-02",
      orders: 5,
      income: 98,
    },
    {
      img: driver5,
      name: "Joseph Brooks",
      phone: "+99(99)489-46-15",
      orders: 5,
      income: 98,
    },
    {
      img: driver6,
      name: "Juan Steward",
      phone: "+99(99)436-46-15",
      orders: 5,
      income: 98,
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="top_drivers">
        <div className="import_icon" onClick={handleLogout}>
          <FontAwesomeIcon icon={faFileImport} className="icon" />
        </div>
        <div className="top_driverHeading">
          <h5>Top Drivers</h5>
          <FontAwesomeIcon icon={faAngleRight} className="top_arrow" />
        </div>
        <div className="driver_list">
          {drivers.map((driver, index) => (
            <div key={index} className="driver_info">
              <div className="driver_img">
                <img src={driver.img} alt="DriverImage" />
                <div className="driver_details">
                  <p>{driver.name}</p>
                  <p>{driver.phone}</p>
                </div>
              </div>
              <div className="driver_income">
                <p>
                  Orders: <span>{driver.orders}</span>
                </p>
                <p>
                  Income: <span>${driver.income}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
