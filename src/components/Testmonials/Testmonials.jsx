import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "animate.css";
import "./Testmonials.css";
import img1 from "../../assets/portfolio-img3.jpg";
import img2 from "../../assets/portfolio-img6.jpg";
import img3 from "../../assets/portfolio-img8.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="container testmonials">
        <div className="container">
          <div className="header mb-5">
            <h2>Testmonials</h2>
          </div>

          <div className="persons mt-5 wow animate__animated animate__flipInX">
            <Slider {...settings}>
              <div>
                <div className="img">
                  <img src={img2} alt="" className="w-100" />
                </div>
                <div className="content">
                  <h3>Cristena</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sed blanditiis magni ea voluptatem eveniet sint autem sequi
                    laborum explicabo delectus odio facere reiciendis, molestias
                    odit rerum maiores, quidem, vel esse?
                  </p>
                </div>
              </div>

              <div>
                <div className="img">
                  <img src={img1} alt="" className="w-100" />
                </div>
                <div className="content">
                  <h3>Lora</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sed blanditiis magni ea voluptatem eveniet sint autem sequi
                    laborum explicabo delectus odio facere reiciendis, molestias
                    odit rerum maiores, quidem, vel esse?
                  </p>
                </div>
              </div>

              <div>
                <div className="img">
                  <img src={img3} alt="" className="w-100" />
                </div>
                <div className="content">
                  <h3>Cristena</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sed blanditiis magni ea voluptatem eveniet sint autem sequi
                    laborum explicabo delectus odio facere reiciendis, molestias
                    odit rerum maiores, quidem, vel esse?
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
