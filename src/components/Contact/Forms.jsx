// Forms.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { FaHandshake, FaHeadset, FaLightbulb, FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Forms() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

      const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact--info-area">
                                <h3>🤝 Talk to Our Team</h3>
                                <p className="contact-intro">Have questions, need support, or want to explore how SaleStream can revolutionize your affiliate management? We're here for you — every step of the way.</p>
                                
                                <div className="contact-option">
                                    <div className="option-icon"><FaLightbulb /></div>
                                    <div className="option-content">
                                        <h5>Sales Inquiries</h5>
                                        <p>Want to learn how SaleStream fits your business? Book a personalized demo.</p>
                                    </div>
                                </div>
                                
                                <div className="contact-option">
                                    <div className="option-icon"><FaHeadset /></div>
                                    <div className="option-content">
                                        <h5>Support Requests</h5>
                                        <p>Already a customer? Our tech team is just a message away.</p>
                                    </div>
                                </div>
                                
                                <div className="contact-option">
                                    <div className="option-icon"><FaHandshake /></div>
                                    <div className="option-content">
                                        <h5>Partnership Opportunities</h5>
                                        <p>Let's collaborate to grow something great together.</p>
                                    </div>
                                </div>
                                
                                <div className="contact-methods">
                                    <h4>📬 Reach Us Directly</h4>
                                    <div className="method-item">
                                        <FaEnvelope className="method-icon" />
                                        <span>sales@thevista.one</span>
                                    </div>
                                    <div className="method-item">
                                        <FaPhone className="method-icon" />
                                        <span>+92 300 855 2638</span>
                                    </div>
                                    <div className="method-item">
                                        <FaMapMarkerAlt className="method-icon" />
                                        <span>TheVISTA.One, Islamabad, Pakistan</span>
                                    </div>
                                </div>
                                
                                <div className="demo-cta">
                                    <h4>📅 Book a Live Demo</h4>
                                    <p>Experience SaleStream in action. We'll walk you through everything and answer your questions.</p>
                                    <button className="demo-btn mt-10">
                                        <FaCalendarAlt /> Schedule a Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <h4>💬 Leave Us a Message</h4>
                                <p className="form-subtitle">Fill out the form below — and we'll get back to you within one business day.</p>
                                <form className="row" onSubmit={handleSubmit}>
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" name="phone" placeholder="Phone (Optional)" />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="inquiry-type">
                                            <option value="">Select Inquiry Type</option>
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="privacy-notice">
                                            <p>✅ We respect your privacy. Your data is never shared.</p>
                                            <p>🔒 We're Here to Support You — Securely and Promptly</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="submit-btn">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mission-statement">
                <div className="container">
                    <p>Our mission is to simplify affiliate chaos, not add to it. Whether you're here for help, a question, or a fresh start — SaleStream is your partner in growth.</p>
                </div>
            </div>
        </>
    );
}

export default Forms;