import React from "react";
import style from "../Styles/Dashboard.module.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BsBasket2 } from "react-icons/bs";
import { TbTruck, TbRefresh } from "react-icons/tb";
import { ImCancelCircle } from "react-icons/im";
import {
  RiShoppingBagLine,
  RiCheckboxCircleLine,
  RiLineChartLine,
} from "react-icons/ri";
import { BiTrendingUp } from "react-icons/bi";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboardHeadUp}>
        <p>Overview</p>
        <div>
          <span>
            <HiOutlinePlusCircle />
          </span>
          <span>ADD NEW WINE</span>
        </div>
      </div>
      <div className={style.dashboardHeadDown}>
        <div>
          <h4>
            Open orders
            <BsBasket2
              style={{
                marginLeft: "55px",
                color: "orange",
                fontSize: "1.3rem",
              }}
            />
          </h4>
          <h2>239</h2>
        </div>
        <div>
          <h4>
            Orders in transit
            <TbTruck
              style={{ marginLeft: "35px", color: "blue", fontSize: "1.3rem" }}
            />
          </h4>
          <h2>126</h2>
        </div>
        <div>
          <h4>
            Fulfilled orders
            <RiShoppingBagLine
              style={{
                marginLeft: "35px",
                marginRight: "0px",
                color: "green",
                fontSize: "1.3rem",
              }}
            />
            <RiCheckboxCircleLine
              style={{
                marginLeft: "-15px",
                marginTop: "5px",
                color: "green",
                fontSize: ".8rem",
              }}
            />
          </h4>
          <h2>1254</h2>
        </div>
        <div>
          <h4>
            Cancelled orders
            <ImCancelCircle
              style={{ marginLeft: "25px", color: "red", fontSize: "1.3rem" }}
            />
          </h4>
          <h2>35</h2>
        </div>
      </div>
      <h4>Sales detail</h4>
      <div className={style.chatMainDiv}>
        <div className={style.chatMainDivHead}>
          <div>
            <h5>Total Sales Overview</h5>
            <p>7 - 13 Aug, 2020</p>
          </div>
          <div>
            <p>
              <TbRefresh
                style={{
                  marginRight: "8px",
                  fontSize: "1rem",
                }}
              />
              Refresh Metrics
            </p>
            <label>Filter By |</label>
            <select>
              <option value="This week">This Week</option>
            </select>
          </div>
        </div>
        <hr />
        <div className={style.chatMain}>
          <div>
            <div className={style.chatHead}>
              <div>
                <h1>$12,545.00</h1>
                <h4>
                  <BiTrendingUp
                    style={{ marginRight: "10px", fontSize: "1.4rem" }}
                  />
                  +23% from last week
                </h4>
              </div>
              <div>
                <p>
                  <RiLineChartLine
                    style={{ color: "green", marginRight: "10px" }}
                  />
                  Highest revenue since 2 weeks ago
                </p>
              </div>
            </div>
            <div className={style.chatBox}>
              {/* <Line
              width={600}
              height={400}
              data={{labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],
              datasets: [{
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]}}
              options={{maintainAspectRatio:false}}
              
              /> */}
            </div>
          </div>
          <div>
            <h5>Total Profit</h5>
            <h1>$12,545.00</h1>
            <h4>
              <BiTrendingUp
                style={{ marginRight: "10px", fontSize: "1.4rem" }}
              />
              +23% from last week
            </h4>
            <h5>Total Products Sold</h5>
            <h2>329</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
