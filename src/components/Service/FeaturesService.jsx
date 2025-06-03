import React from 'react';
import { FaChartLine, FaHandshake, FaMoneyBillWave, FaBook, FaTrophy, FaFileAlt, FaSitemap, FaRocket, FaCogs } from 'react-icons/fa';

function FeaturesService() {
    const features = [
        {
            icon: <FaHandshake />,
            title: "Affiliate & Sales Partner Management",
            problem: "Scattered conversations across emails, chats, and spreadsheets make management chaotic.",
            solution: "Unified dashboard to track, manage, and engage all affiliates and sales partners with complete transparency."
        },
        {
            icon: <FaCogs />,
            title: "Complaint & Request Handling",
            problem: "Missed or delayed responses lead to affiliate dissatisfaction and churn.",
            solution: "Built-in ticketing system ensures that every complaint, request, or query is tracked and resolved quickly."
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Payout Requests & Automated Payments",
            problem: "Manual payouts slow you down and create costly errors.",
            solution: "Affiliates request payments via their dashboard with automated approvals and thresholds."
        },
        {
            icon: <FaBook />,
            title: "Product Resources & Training Hub",
            problem: "New affiliates often lack the knowledge to promote effectively.",
            solution: "Centralized hub for product kits, video tutorials, guides, and marketing assets."
        },
        {
            icon: <FaChartLine />,
            title: "Real-Time Performance Tracking",
            problem: "Without real-time data, you're reacting late — not optimizing early.",
            solution: "Live performance dashboards with instant insights into clicks, conversions, and sales."
        },
        {
            icon: <FaTrophy />,
            title: "Rewards & Incentive System",
            problem: "Affiliates lack motivation to exceed expectations.",
            solution: "Structured bonus tiers, ranking systems, and achievement rewards to gamify your program."
        },
        {
            icon: <FaFileAlt />,
            title: "Advanced Reporting & Analytics",
            problem: "You can't improve what you can't measure.",
            solution: "Detailed breakdowns of traffic, campaign ROI, and affiliate activity with custom reports."
        },
        {
            icon: <FaSitemap />,
            title: "Flexible Multi-Tier Commission Management",
            problem: "Complex sales structures can't fit into rigid systems.",
            solution: "Define commissions by product, region, partner type, or referral path."
        },
        {
            icon: <FaRocket />,
            title: "Scalable, Adaptable & Future-Ready",
            problem: "Most systems buckle under the pressure of scale.",
            solution: "Designed for growth with effortless addition of users, rules, tiers, and integrations."
        }
    ];

    return (
        <section className="appie-service-features-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="appie-section-title text-center">
                            <h3 className="title">Your All-in-One Affiliate Growth Platform</h3>
                        </div>
                    </div>
                </div>
                
               
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="feature-card">
                                <div className="feature-card__header">
                                    <div className="feature-card__icon">
                                        {feature.icon}
                                    </div>
                                    <h4 className="feature-card__title">{feature.title}</h4>
                                </div>
                                
                                <div className="feature-card__body">
                                    <div className="feature-problem">
                                        <div className="feature-label">Problem</div>
                                        <p>{feature.problem}</p>
                                    </div>
                                    <div className="feature-solution">
                                        <div className="feature-label">Solution</div>
                                        <p>{feature.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="row mt-50">
                    <div className="col-lg-12">
                        <div className="appie-feature-comparison">
                            <h3 className="title text-center mb-40">Manual Affiliate Management vs. SaleStream</h3>
                            <div className="comparison-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Feature/Aspect</th>
                                            <th>Manual Management</th>
                                            <th>SaleStream 🌟</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Commission Tracking</td>
                                            <td>Spreadsheet chaos, manual errors</td>
                                            <td>Automated, error-free payouts</td>
                                        </tr>
                                        <tr>
                                            <td>Affiliate Onboarding</td>
                                            <td>Inconsistent, unclear instructions</td>
                                            <td>Guided, structured, learning hub-enabled</td>
                                        </tr>
                                        <tr>
                                            <td>Performance Visibility</td>
                                            <td>Delayed or unavailable</td>
                                            <td>Real-time dashboards and insights</td>
                                        </tr>
                                        <tr>
                                            <td>Multi-Tier Support</td>
                                            <td>Difficult or impossible to manage</td>
                                            <td>Built-in, customizable multi-level system</td>
                                        </tr>
                                        <tr>
                                            <td>Complaint Handling</td>
                                            <td>Lost in email threads</td>
                                            <td>Centralized ticketing system</td>
                                        </tr>
                                        <tr>
                                            <td>Payout Requests</td>
                                            <td>Manual, time-consuming</td>
                                            <td>Automated workflows with approval logic</td>
                                        </tr>
                                        <tr>
                                            <td>Marketing Resources</td>
                                            <td>Scattered or unavailable</td>
                                            <td>Organized training kits and materials</td>
                                        </tr>
                                        <tr>
                                            <td>Affiliate Motivation</td>
                                            <td>Limited tracking, no incentive system</td>
                                            <td>Rewards, bonuses, rankings & gamification</td>
                                        </tr>
                                        <tr>
                                            <td>Reporting & Analytics</td>
                                            <td>Minimal to none</td>
                                            <td>Detailed, exportable, actionable reports</td>
                                        </tr>
                                        <tr>
                                            <td>Integration with Tools</td>
                                            <td>Not integrated; everything is manual</td>
                                            <td>Seamless with CRM, eComm, payments, APIs</td>
                                        </tr>
                                        <tr>
                                            <td>Scalability</td>
                                            <td>Breaks with volume</td>
                                            <td>Grows with your business</td>
                                        </tr>
                                        <tr>
                                            <td>Security & Access Control</td>
                                            <td>Shared access, no roles</td>
                                            <td>Role-based dashboards, secure login</td>
                                        </tr>
                                        <tr>
                                            <td>Support & Help Resources</td>
                                            <td>No documentation or centralized help</td>
                                            <td>Knowledge base, in-app support, live help</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-50">
                    <div className="col-lg-12">
                        <div className="appie-feature-summary text-center">
                            <h4 className="title">Summary</h4>
                            <p className="summary-text">
                                Manual Management costs time, causes errors, and limits growth.<br />
                                SaleStream streamlines everything — so you can grow faster, smarter, and stress-free.
                            </p>
                            <div className="cta-buttons mt-30">
                                <a href="#" className="main-btn">Start Free Trial</a>
                                <a href="#" className="main-btn main-btn-2">Schedule Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesService;