import React from "react";

function Forms() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Let’s Take Your Affiliate Strategy to the Next Level
</h3>
                <p>Ready to upgrade from chaos to control?</p>
                {/* <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    <strong> Islamabad</strong> <br />
                    Office-1 <br />
                    G19, Paris Mall, Lehtrar Road, Near Burma Bridge, Islamabad{" "}
                    <br />
                    Office -2: <br />
                    Upper Storey, Building # 4, Opposite Gulberg Medicine
                    Center, Near Attock Petrol Pump, Islamabad Express Way,
                    Islamabad <br />
                    <br />
                    <strong> Rahimyar khan</strong> <br />
                    89B, Satellite Town, Rahimyar khan <br />
                    <br />
                    <strong> Quetta</strong> <br />
                    Shershar Road, Quetta <br />
                  </p>
                </div> */}
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    +92 300 855 2638
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    sales@thevista.one
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a className="fac" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="twi" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="you" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="lin" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form action="#" method="post" className="row">
                  <div className="col-md-6">
                    <input type="text" name="f-name" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="l-name" placeholder="Last Name" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="suject" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}

export default Forms;
