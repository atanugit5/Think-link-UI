import React from "react";
import style from "../Styles/Sidebar.module.css";
import {
  RiAirplayLine,
  RiFileTextLine,
  RiShoppingBag3Line,
  RiGroupLine,
  RiStackLine,
  RiSettings3Line,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <p>
        <span>
          <RiAirplayLine />
        </span>
        Dashboard
      </p>

      <p>
        <span>
          <RiStackLine />
        </span>
        Inventory
      </p>

      <p>
        <span>
          <RiShoppingBag3Line />
        </span>
        Orders
      </p>

      <p>
        <span>
          <RiGroupLine />
        </span>
        Customers
      </p>

      <p>
        <span>
          <RiFileTextLine />
        </span>
        Reports
      </p>

      <p>
        <span>
          <RiSettings3Line />
        </span>
        Settings
      </p>
    </div>
  );
};

export default Sidebar;
