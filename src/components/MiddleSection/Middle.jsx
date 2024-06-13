import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFolderMinus,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./middle.css";
import Statistic from "../Statistic/Statistic";

export default function Middle({ toggleSidebar }) {
  return (
    <div id="middle">
      <div className="middle_section">
        <div className="middle_heading">
          <FontAwesomeIcon
            icon={faBars}
            className="menuBar"
            onClick={toggleSidebar}
          />
          <h3>Good Morning, Maharram 👋</h3>
          <span>
            you have <a href="">1 new message</a>
          </span>
        </div>
        <div className="knowledge_section">
          <h5>Knowledge base</h5>
          <div className="Knowledge_cards">
            <div className="total_orders totalColor">
              <div className="orderData">
                <div className="order_subData">
                  <FontAwesomeIcon
                    icon={faFolderMinus}
                    className="total_icon"
                  />
                  <span>Total Orders</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className="total_orders earningsColor">
              <div className="orderData">
                <div className="order_subData">
                  <FontAwesomeIcon
                    icon={faFolderMinus}
                    className="earnings_icon"
                  />
                  <span>Total Earnings</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className="total_orders profitColor">
              <div className="orderData">
                <div className="order_subData">
                  <FontAwesomeIcon
                    icon={faFolderMinus}
                    className="profit_icon"
                  />
                  <span>ProfitM</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Statistic />
      </div>
    </div>
  );
}
