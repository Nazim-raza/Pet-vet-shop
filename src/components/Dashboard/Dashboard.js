import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomersList from "./CustomersList";
import ServicesList from "./ServicesList";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="mySidenav" class="sidenav">
        <p class="logo">
          <span>PET</span>-VET
        </p>
        <a href="#" class="icon-a">
          <i class="fa fa-dashboard icons"></i> Dashboard
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-users icons"></i> Customers
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-list icons"></i> Projects
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-shopping-bag icons"></i> Orders
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-tasks icons"></i> Inventory
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-user icons"></i> Accounts
        </a>
        <a href="#" class="icon-a">
          <i class="fa fa-list-alt icons"></i> Tasks
        </a>
      </div>
      <div id="main">
        <div class="head">
          <div class="col-div-6"></div>
          <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>
        <br />

        <div class="col-div-3">
          <div class="box">
            <p>
              67
              <br />
              <span>Customers</span>
            </p>
            <i class="fa fa-users box-icon"></i>
          </div>
        </div>
        <div class="col-div-3">
          <div class="box">
            <p>
              88
              <br />
              <span>Projects</span>
            </p>
            <i class="fa fa-list box-icon"></i>
          </div>
        </div>
        <div class="col-div-3">
          <div class="box">
            <p>
              99
              <br />
              <span>Orders</span>
            </p>
            <i class="fa fa-shopping-bag box-icon"></i>
          </div>
        </div>
        <div class="col-div-3">
          <div class="box">
            <p>
              78
              <br />
              <span>Tasks</span>
            </p>
            <i class="fa fa-tasks box-icon"></i>
          </div>
        </div>
        <div class="clearfix"></div>
        <br />
        <br />
        <div class="col-div-8">
          <div class="box-8">
            <div class="content-box">
              <p>
                Top Selling Projects <span>Sell All</span>
              </p>
              <br />
              <table>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="col-div-4">
          <div class="box-4">
            <div class="content-box">
              <p>
                Total Sale <span>Sell All</span>
              </p>

              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle"> 70% </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
      <Routes>
        <Route path="/" element={<CustomersList />} />
        <Route path="/services" element={<ServicesList />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
