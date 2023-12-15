import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const Contactus = () => {
  return (
    <>
      <Header />
      <Tools />
      <Loader />
      {/* <!-- Content  --> */}
      <main id="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs__title">Contacts</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="index-2.html" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a
                        href="contacts.html"
                        className="breadcrumbs__item-link"
                      >
                        Contacts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <section className="contact-map">
          <div id="contacts-map"></div>
          <div className="contact-info-block">
            <div className="logo-contacts">
              <div className="logo">
                <a href="index-2.html">
                  <i className="icon-logo"></i>
                  <span>Rental</span>Cars
                </a>
              </div>
            </div>
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
                  <a target="_blank" href="https://twitter.com/tonytemplates/">
                    <i className="icon-twitter-letter-logo"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://plus.google.com/">
                    <i className="icon-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/uas/login?">
                    <i className="icon-linkedin-logo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="wrap-form">
                <h1>Leave a Message</h1>
                <form
                  id="contactform"
                  className="contact-form comment-form"
                  name="contactform"
                  method="post"
                  novalidate
                >
                  <div id="success">
                    <p>Your message was sent successfully!</p>
                  </div>
                  <div id="error">
                    <p>
                      Something went wrong, try refreshing and submitting the
                      form again.
                    </p>
                  </div>
                  <div className="input-wrapper first-child">
                    <input
                      type="text"
                      className="input-custom input-full"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="input-wrapper last-child">
                    <input
                      type="text"
                      className="input-custom input-full"
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="textarea-wrapper">
                    <textarea
                      className="textarea-custom input-full"
                      name="Comment"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="btn-wrapper">
                    <button type="submit" id="submit" className="btn btn-form">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
