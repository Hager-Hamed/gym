import React from "react";
import "./Schedule.css";

import img1 from "../../assets/extended.png";
import img2 from "../../assets/lunges.png";
import img3 from "../../assets/yoga-pose.png";
import "animate.css";

export default function Schedule() {
  return (
    <>
      <section className=" container schedule" id="second">
        <div className="header">
          <h2>
            Benefits Of <span>Exercise</span>
          </h2>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Amet, id earum non beatae placeat quas.
          </p>
        </div>

        <div className="content ">
          <div className="row row-cols-1 row-cols-md-3 g-3 ">
            <div className="col">
              <div className="d-flex col-content wow animate__animated animate__zoomIns">
                <span>
                  <img src={img2} alt="" className="mw-100" />
                </span>
                <div className="txt">
                  <h3>Healthy Life</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, adipisci.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="d-flex col-content  wow animate__animated animate__zoomIns">
                <span>
                  <img src={img1} alt="" className="mw-100" />
                </span>
                <div className="txt">
                  <h3>Reducing blood Pressure</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, adipisci.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="d-flex col-content wow animate__animated animate__zoomIns">
                <span>
                  <img src={img3} alt="" className="mw-100" />
                </span>
                <div className="txt">
                  <h3>Increased Flexibility</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, adipisci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
