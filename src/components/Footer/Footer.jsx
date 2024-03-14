import React from "react";
import "./Footer.css";
import logo from "../../assets/dumble.png";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-3 col-md-6">
              <div>
                <div className="logo d-flex">
                  <div className="logo-img me-2 d-flex justify-content-between align-items-center">
                    <img className="mw-100" src={logo} alt=""></img>
                  </div>
                  <h1 className="foot-title">Fitbody</h1>
                </div>
                <p className="text-secondary me-4 mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam commodi necessitatibus incidunt fugit natus
                  consequuntur.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div>
                <h3 className="foot-title">Company</h3>

                <ul className="footUl">
                  <li>
                    <a href="#">Our program</a>
                  </li>
                  <li>
                    <a href="#">Our plan</a>
                  </li>
                  <li>
                    <a href="#">Become a member</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div>
                <h3 className="foot-title">Quick links</h3>

                <ul className="footUl">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div>
                <h3 className="foot-title">Company</h3>

                <ul className="footUl">
                  <li>
                    <a href="#">Our program</a>
                  </li>
                  <li>
                    <a href="#">Our plan</a>
                  </li>
                  <li>
                    <a href="#">Become a member</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
