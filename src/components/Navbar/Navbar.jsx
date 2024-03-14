import React from "react";
import "./Navbar.css";
import logo from "../../assets/dumble.png";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  function openMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("d-none");
  }

  return (
    <>
      <section className="container d-flex justify-content-between align-items-center nav-bar">
        <div className="logo d-flex justify-content-between align-items-center">
          <div className="logo-img me-2 d-flex justify-content-between align-items-center">
            <img className="mw-100" src={logo} alt=""></img>
          </div>
          <h1>Fitbody</h1>
        </div>

        <div className="list">
          <ul className="d-flex justify-content-between align-items-center">
            <li>
              {" "}
              <a href="#first">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#second">Schedule</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#third">Classes</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#fourth">Pricing</a>{" "}
            </li>
          </ul>
        </div>

        <div className="reg-btn d-flex justify-content-between align-items-center">
          <button className="btn btn-primary me-2">Register</button>
          <div className="mobile-icon" id="mobile-icon">
            <i onClick={openMobileMenu}>
              <FaBars />
            </i>
            <ul className="mobile-menu d-none" id="mobile-menu">
              <li>
                {" "}
                <a href="#first">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#second">Schedule</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#third">Classes</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#fourth">Pricing</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
