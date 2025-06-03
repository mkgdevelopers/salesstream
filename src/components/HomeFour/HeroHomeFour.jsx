import React, { useState } from 'react';
import heroThumb from '../../assets/images/hero-thumb-6.png';
import PopupVideo from '../PopupVideo.jsx';

function HeroHomeFour() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            <section className="appie-hero-area appie-hero-5-area appie-hero-3-area">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <h1 className="appie-title">
                                    Smarter Affiliate Management for Growing Businesses
                                </h1>
                                <p>
                                    Efficiently manage affiliates, automate commissions, and gain full visibility into performance. Boost productivity, improve cash flow, and scale confidently — all from one centralized platform.
                                </p>
                                <div className="hero-btns">
                                    <a className="main-btn" href="#">
                                        Schedule a Demo
                                    </a>
                                </div>
                                <div
                                    className="thumb mt-80 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <img src={heroThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeFour;
