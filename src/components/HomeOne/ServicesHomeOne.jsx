import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';
import IconFive from '../../assets/images/icon/5.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Trusted by Sales-Driven Teams
                            </h3>
                            <p>Enhance your affiliate operations with accurate tracking, faster payouts, and advanced insights. </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                            </div>
                            <h4 className="appie-title">Efficient Affiliate Onboarding</h4>
                            <p>Set up and activate new partners with minimal effort.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                            </div>
                            <h4 className="appie-title">Real-Time Performance Dashboards
</h4>
                            <p>Always know which affiliates are driving results.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                            </div>
                            <h4 className="appie-title">Automated Commission Handling</h4>
                            <p>Say goodbye to spreadsheets and manual calculations.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                            </div>
                            <h4 className="appie-title">Data Security & Compliance</h4>
                            <p>Safeguard affiliate data with secure, audit-ready records.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-5 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconFive} alt="" />
                            </div>
                            <h4 className="appie-title">Customizable Rules & Workflows</h4>
                            <p>Configure the system around your business model, not the other way around.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
