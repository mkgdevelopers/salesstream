import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="vista-logo" height={100} />
                                    </a>
                                </div>
                                <p>
                                    SaleStream - Affiliate Management System

                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/features">Features</Link>
                                    </li>
                                    <li>
                                        <a href="/#">Pricing</a>
                                    </li>
                                    <li>
                                        <Link to="/help">Help</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">Community</Link>
                                    </li>
                                    <li>
                                        <a href="#">Resources</a>
                                    </li>
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> sales@thevista.one                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +92 300 855 2638
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> G19, Paris Mall, Lehtrar Road, Near Burma Bridge, Islamabad
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="copyright-text">
                                    <p>Copyright © 2025 Sales Stream. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
