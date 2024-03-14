import React from "react";
import "./Home.css";
import gympic from "../../assets/banner-img-1.png";
import dumble from "../../assets/dumble.png";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import "animate.css";
export default function Home() {
  return (
    <>
      <section className="container home mt-5 pt-3" id="first">
        <div className=" d-flex justify-content-between align-items-center hom-mob">
          <div className="txt">
            <h2>
              Exercise is the key to a <br />
              <span>Healthy</span> Lifestyle
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nemo
              <br /> eaque facere nostrum harum accusamus!
            </p>
            <div className="btns wow animate__animated animate__backInLeft">
              <button className="btn_start">Get Started</button>
              <button className="btn_watch">
                <span>
                  <i>
                    <FaPlay />
                  </i>
                </span>{" "}
                Watch Video
              </button>
            </div>
          </div>

          <div className="right-side">
            <div className="img-side">
              <div className="box1">
                <div className="box2">
                  <div className="box3">
                    <img src={gympic} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="dumble wow animate__animated animate__backInRight">
              <img src={dumble} alt="" className="w-100" />
            </div>

            <div className="heart_rates wow animate__animated animate__backInRight">
              <p>Heart Rate</p>
              <span>
                <i>
                  <FaHeartbeat />
                </i>
              </span>
              <p className="mt-2">2345 BPM</p>
            </div>

            <div className="location wow animate__animated animate__backInRight">
              <i>
                <FaLocationDot />
              </i>
              <p>Find a new gym near you</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
