import React, { useState } from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import Drawer from "../Mobile/Drawer.jsx";
import HeaderNews from "./HeaderNews.jsx";
import HeroNews from "./HeroNews.jsx";
import axios from "axios";

function HelpPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/help", formData);
      alert("Help request submitted!");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to submit help request.");
    }
  };

  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderNews action={drawerAction.toggle} />

      <HeroNews
        title="You're Never Alone"
        subtitle="Our Support is Built Around You"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/help", title: "Help Center" },
        ]}
      />

      <section className="appie-help-page pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="help-card">
                <div className="help-icon">🗂</div>
                <h3>Knowledge Base</h3>
                <p>
                  Step-by-step tutorials, video guides, FAQs, and best practices
                  — at your fingertips.
                </p>
                {/* <div className="search-box">
                                    <input type="text" placeholder="Search help articles..." />
                                    <button>Search</button>
                                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="help-card">
                <div className="help-icon">📞</div>
                <h3>Live Support</h3>
                <p>
                  Have an issue? Submit a request now — and our support team
                  will handle it fast.
                </p>
                <form className="support-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your email"
                      required
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <button type="submit">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HelpPage;
