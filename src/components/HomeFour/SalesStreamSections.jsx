import React from 'react';
import './SalesStream.css'; // We'll create this CSS file

function SalesStreamSections() {
  return (
    <div className="sales-stream-container">
      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose SaleStream?</h2>
          </div>
          
          <div className="features-grid">
            {[
              { icon: '🌐', title: 'All-in-one affiliate operating system' },
              { icon: '📈', title: 'Proven to 10x program profitability' },
              { icon: '⚙️', title: 'Customizable for your business model' },
              { icon: '💬', title: '24/7 live support and knowledge base' },
              { icon: '🛡️', title: 'Enterprise-grade security and uptime' },
              { icon: '🎯', title: 'Designed to scale — 10 to 10,000 affiliates' }
            ].map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <div>
              <h3>Join 500+ Brands Boosting Affiliate Revenue with SaleStream</h3>
              <p>Start your free trial or book a personalized demo today.</p>
            </div>
            <div className="cta-buttons">
              <button className="primary-button">Start Free Trial</button>
              <button className="secondary-button">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Backed by Results</h2>
          </div>
          
          <div className="testimonials-grid">
            {[
              {
                quote: "SaleStream cut our affiliate admin time by 80% and helped us scale to 500+ partners globally.",
                author: "Digital Marketing Head",
                company: "eComStorePro"
              },
              {
                quote: "The onboarding and support tools alone make it worth it. Our affiliates are finally performing like pros.",
                author: "Founder",
                company: "SaaS Startup"
              }
            ].map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote-mark">“</div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="author">
                  <strong>— {testimonial.author}</strong>, {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Designed for Every Role</h2>
          </div>
          
          <div className="roles-grid">
            {[
              "Marketers – Measure, manage, and multiply your affiliate growth",
              "CEOs – Gain visibility and ROI on affiliate strategy",
              "Sales Teams – Coordinate multi-tier payouts with ease",
              "Affiliate Managers – Automate the entire partner lifecycle"
            ].map((role, index) => (
              <div className="role-card" key={index}>
                <h3>{role.split('–')[0]}</h3>
                <p>{role.split('–')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <h2>Engineered for Efficiency. Designed to Help You Scale.</h2>
            <p className="lead">
              We've been on the other side — buried in spreadsheets, lost in affiliate miscommunication, 
              and overwhelmed by inefficient systems. That's exactly why we created SaleStream.
            </p>
            <p>
              Our mission is to eliminate the guesswork, automate the grind, and give affiliate managers 
              the power and clarity they need to scale confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="section-container">
          <div className="final-cta-content">
            <h2>Don't Let Chaos Stall Your Growth</h2>
            <p className="subtitle">Let SaleStream Take Over</p>
            <button className="cta-button">Schedule a Demo Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesStreamSections;