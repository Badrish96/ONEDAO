import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "../SideBar/sideBar.css";
import Middle from "../MiddleSection/Middle";
import TopDrivers from "../Top Drivers/TopDrivers";
import User from "../User/User";
import "./dashboard.css";

export default function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex">
        {sidebarVisible && (
          <div className="">
            <SideBar />
          </div>
        )}
        <div className="bg-white p-0" style={{ flex: "1" }}>
          <div className="dashboard-content">
            <div className="content bg-white">
              <div className="row bg-white">
                <div className="col-md-8">
                  <Middle toggleSidebar={toggleSidebar} />
                </div>
                <div className="col-md-4">
                  <TopDrivers />
                </div>
              </div>
              <div className="row">
                <div className="col-12 bg-white">
                  <User />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
