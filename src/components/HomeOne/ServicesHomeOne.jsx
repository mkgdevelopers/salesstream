import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

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
            </div>
        </section>
    );
}

export default ServicesHomeOne;
