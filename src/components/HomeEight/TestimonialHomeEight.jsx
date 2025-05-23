import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import user from "../../assets/images/testimonial-user-1.png";
import { client } from "../../../sanityClient";
import { useEffect } from "react";
import { useState } from "react";

function TestimonialHomeEight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const fetchFeatures = async () => {
      const response = await client.fetch(`*[_type == 'feature']`);
      setFeatures(response);
    };
    fetchFeatures();
  }, []);
  const articleCarosel = useRef();
  const peopleCarosel = useRef();
  const sliderNext = () => {
    articleCarosel.current?.slickNext();
    peopleCarosel.current?.slickNext(); // only runs if current exists
  };

  const sliderPrev = () => {
    articleCarosel.current?.slickPrev();
    peopleCarosel.current?.slickPrev(); // only runs if current exists
  };
  const settingsForArticle = {
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentIndex(index),
  };

  const settingsForPeople = {
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="appie-testimonial-about-area pb-45 mt-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className={`appie-section-title text-center`}>
                <h3 className="appie-title">
                  All-in-One Affiliate Management Platform
                </h3>
                {/* <p>The app provides design and digital marketing.</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="testimonial-about-slider-active"
                style={{ position: "relative" }}
              >
                <span
                  onClick={sliderPrev}
                  className="prev slick-arrow"
                  style={{ display: "block" }}
                >
                  <i className="fal fa-arrow-left"></i>
                </span>

                <Slider {...settingsForArticle} ref={articleCarosel}>
                  {features.map((feature) => (
                    <div className="testimonial-parent-item" key={feature._id}>
                      <div className="testimonial-box">
                        <h3>{feature.heading}</h3>
                        <ul>
                          <li>{feature.para1}</li>
                          <li>{feature.para2}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </Slider>
                
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  {currentIndex + 1} / {features.length}
                </div>

                <span
                  onClick={sliderNext}
                  className="next slick-arrow"
                  style={{ display: "block" }}
                >
                  <i className="fal fa-arrow-right"></i>
                </span>
              </div>
            </div>
{/* <div className="text-center mt-5">
  <h4 className="h4 fw-semibold mb-2">Ready to get started?</h4>
  <button className="btn btn-primary px-4 py-2">Get Started Free</button>
</div> */}

          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialHomeEight;
