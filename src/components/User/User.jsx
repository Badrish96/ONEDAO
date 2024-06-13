import React from "react";
import "./user.css";
import user1 from "../../assets/driver1.jpg";
import user2 from "../../assets/driver2.jpg";
import user3 from "../../assets/driver3.jpg";
import user4 from "../../assets/driver4.jpg";
import user5 from "../../assets/driver5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function User() {
  const users = [
    {
      img: user1,
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "simple",
      orderedTime: "04.12.2021 20:30",
      startLocation: "пл. Беш Арача, Furkat Street, Tashkent, O'zbekiston",
      finishLocation: "пл. Беш Арача, Furkat Street, Tashkent, O'zbekiston",
      income: "50 300 000 SUM",
    },
    {
      img: user2,
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "otra",
      orderedTime: "04.12.2021 20:24",
      startLocation: "21 Hamidulla Oripov ko'chasi, Toshkent, O'zbekiston",
      finishLocation: "21 Hamidulla Oripov ko'chasi, Toshkent, O'zbekiston",
      income: "300 000 SUM",
    },
    {
      img: user3,
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      orderedTime: "04.12.2021 20:23",
      startLocation: "76 Farg'ona Yo'li, Toshkent, O'zbekiston",
      finishLocation: "76 Farg'ona Yo'li, Toshkent, O'zbekiston",
      income: "5 300 000 SUM",
    },
    {
      img: user4,
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      orderedTime: "17.11.2021 12:19",
      startLocation: "13 Kumarik ko'chasi, Tashkent 100167, O'zbekiston",
      finishLocation: "13 Kumarik ko'chasi, Tashkent 100167, O'zbekiston",
      income: "5 300 000 SUM",
    },
    {
      img: user5,
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      orderedTime: "04.12.2021 20:30",
      startLocation: "1 Kuyi Talarik ko'chasi, Toshkent 100091, O'zbekiston",
      finishLocation: "1 Kuyi Talarik ko'chasi, Toshkent 100091, O'zbekiston",
      income: "50 300 000 SUM",
    },
  ];

  return (
    <div className="user-table">
      <table className="user_list">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col" className="user_heading">
              User
            </th>
            <th scope="col" className="user_heading">
              Car Comfort
            </th>
            <th scope="col" className="user_heading">
              Ordered Time
            </th>
            <th scope="col" className="user_heading">
              Start Location
            </th>
            <th scope="col" className="user_heading">
              Finish Location
            </th>
            <th scope="col" className="user_heading">
              Income
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td data-label="select">
                <input type="checkbox" />
              </td>
              <td data-label="User">
                <div className="user_info">
                  <img src={user.img} alt="User" />
                  <div className="user_data">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
              </td>
              <td data-label="Car Comfort" className="user_desc">
                {user.comfort}
              </td>
              <td data-label="Ordered Time" className="user_desc">
                {user.orderedTime}
              </td>
              <td data-label="Start Location" className="user_desc">
                {user.startLocation}
              </td>
              <td data-label="Finish Location" className="user_desc">
                {user.finishLocation}
              </td>
              <td data-label="" className="income">
                {user.income}
              </td>
              <span className="income_box"></span>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="next_page">
        <p>1-2 of items</p>
        <div className="page_btns">
          <span className="btns_arrow">
            <FontAwesomeIcon icon={faAngleLeft} className="left_arrow" />
          </span>
          <span className="page1">1</span>
          <span className="page2">2</span>
          <span className="btns_arrow right">
            <FontAwesomeIcon icon={faAngleRight} className="right_arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}
