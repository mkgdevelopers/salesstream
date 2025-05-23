import React from 'react';
import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Fast Development
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>App, UX
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>20-30 Employees
                                        </li>
                                        <li>
                                            <i className="fal fa-bookmark"></i>Appie Template
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>quomodosoft.com/appie
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-download"></i>
                                        <span>Download docs</span>
                                    </a>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-file-pdf"></i>
                                        <span>Characteristics</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
    <h3 className="title">What We're Building</h3>
    <p>
        SaleStream is your all-in-one affiliate management system — designed to simplify tracking, automate reporting, and grow your business through smart affiliate programs.
    </p>
    <span>
        With SaleStream, brands can manage affiliates, track conversions in real time, and get detailed analytics — all from one unified dashboard.
    </span>
    <p>
        Whether you're a startup launching your first referral campaign or a company scaling globally, SaleStream provides the tools to recruit, reward, and retain top affiliate partners.
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

export default DetailsService;
