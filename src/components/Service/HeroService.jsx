import React from 'react';
import thumb from '../../assets/images/fun-fact-thumb.png';

function HeroService() {
    return (
        <div className="appie-page-title-area appie-page-service-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="appie-page-title-item">
                            <span>SaleStream - Affiliate Management System</span>
                            <h4 className="title">
                                Features
                            </h4>
                            <div className="thumb">
                                <img src={thumb} alt="Affiliate management dashboard" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroService;