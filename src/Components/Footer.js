import React from "react";

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="site-footer">
        <section className="site-footer__top-panel">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="top-panel__info">
                  <i className="icon-Cancellation"></i>
                  <strong>Free cancellation</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="top-panel__info">
                  <i className="icon-commerce"></i>
                  <strong>No credit card fees</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="top-panel__info">
                  <i className="icon-phone"></i>
                  <strong>24/7 Call Center</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="box-elements">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-3">
                <figure className="footer_logo">
                  <a href="#">
                    <span>
                      <em>Celebrating</em>25<strong>YEARS</strong>
                    </span>
                    <i className="icon-111"></i>
                  </a>
                </figure>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h5>Company</h5>
                <ul className="footer-list">
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="blog-masonry.html">News</a>
                  </li>
                  <li>
                    <a href="#">Emergency Contacts</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h5>Customer Services</h5>
                <ul className="footer-list">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Help renting a car</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="contact-info">
                  <span className="phone_number">
                    <i className="icon-telephone"></i> 1-800-123-4567
                  </span>

                  <span className="location_info">
                    <i className="icon-placeholder-for-map"></i>
                    <em>The Company Name Inc.</em>
                    <em>9870 St Vincent Place,</em>
                    <em>Glasgow, DC 45 Fr 45.</em>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-footer__bottom-panel">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="copyright">
                  &copy; 2017 | <a href="#">Privacy Policy</a> |{" "}
                  <a href="#">Rental policy</a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="social-list">
                  <ul className="social-list__icons">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/Tonytemplates/?ref=hl"
                      >
                        <i className="icon-facebook-logo"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/tonytemplates/"
                      >
                        <i className="icon-twitter-letter-logo"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://plus.google.com/">
                        <i className="icon-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/uas/login?"
                      >
                        <i className="icon-linkedin-logo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a href="#" className="scrollup">
          <i className="icon-arrow-down-sign-to-navigate"></i>
        </a>
      </footer>

      <div className="remodal" data-remodal-id="modal">
        <a data-remodal-action="close" className="remodal-close"></a>
        {/* order-details-form */}
        <form
          className="order-details-form"
          id="bookingForm"
          name="bookingform"
          method="post"
          noValidate
        >
          <div className="inner-form">{/* ... (rest of your code) ... */}</div>
        </form>
        {/* // order-details-form */}
      </div>

      {/* //Footer */}
    </>
  );
};
