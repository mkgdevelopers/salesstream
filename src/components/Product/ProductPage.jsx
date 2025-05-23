import React from 'react';

const ProductPage = () => {
  return (
    <section className="appie-product-area pt-100 pb-100">
      <div className="container">
        <div className="text-center mb-50">
          <h1>Smarter Affiliate Management for Growing Businesses</h1>
          <p className="lead">
            Efficiently manage affiliates, automate commissions, and gain full visibility into performance. Boost productivity, improve cash flow, and scale confidently — all from one centralized platform.
          </p>
          <a href="#demo" className="main-btn">Schedule a Demo</a>
        </div>
        <div className="text-center mb-30">
          <h5>Trusted by Sales-Driven Teams</h5>
          <p>
            Enhance your affiliate operations with accurate tracking, faster payouts, and advanced insights.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Efficient Affiliate Onboarding</h3>
            <p>Set up and activate new partners with minimal effort.</p>
          </div>
          <div className="col-md-6">
            <h3>Real-Time Performance Dashboards</h3>
            <p>Always know which affiliates are driving results.</p>
          </div>
          <div className="col-md-6">
            <h3>Automated Commission Handling</h3>
            <p>Say goodbye to spreadsheets and manual calculations.</p>
          </div>
          <div className="col-md-6">
            <h3>Data Security & Compliance</h3>
            <p>Safeguard affiliate data with secure, audit-ready records.</p>
          </div>
          <div className="col-md-6">
            <h3>Customizable Rules & Workflows</h3>
            <p>Configure the system around your business model, not the other way around.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;