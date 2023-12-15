import React from "react";

export const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="mobile-top-panel"></div>
        <div className="mobile-top-panel__fixed">
          <div className="container">
            <div
              className="navbar navbar-default navbar-fixed-top"
              role="navigation"
            >
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="menu-navigation navbar-collapse collapse">
                {/* <!-- Left nav --> */}
                <ul className="menu-navigation__list nav navbar-nav">
                  <li className="current">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="fleet.html">
                      Fleet <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="fleet-second.html">Fleet page 2</a>
                      </li>
                      <li>
                        <a href="fleet.html">
                          Cars{" "}
                          <i className="icon-arrow-down-sign-to-navigate"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              Executive Sedans{" "}
                              <i className="icon-arrow-down-sign-to-navigate"></i>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">Sub Item 1</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 2</a>
                              </li>
                              <li className="disabled">
                                <a className="disabled" href="#">
                                  Disabled item
                                </a>
                              </li>
                              <li>
                                <a href="#">Sub Item 3</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 4</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 5</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 6</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fleet.html">Luxury Sedans</a>
                          </li>
                          <li>
                            <a href="fleet.html">Limousine</a>
                          </li>
                          <li>
                            <a href="fleet.html">Sport Car</a>
                          </li>
                          <li>
                            <a href="fleet.html">SUV</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="fleet.html">Mini bus</a>
                      </li>
                      <li>
                        <a href="fleet.html">Motobikes</a>
                      </li>
                      <li>
                        <a href="fleet.html">Yachts</a>
                      </li>
                      <li>
                        <a href="fleet.html">Airplane</a>
                      </li>
                      <li>
                        <a href="fleet.html">Helicopter</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="services.html">
                      Services{" "}
                      <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="services-post.html">
                          24 Hour Airport Services
                        </a>
                      </li>
                      <li>
                        <a href="services.html">Business Travel</a>
                      </li>
                      <li>
                        <a href="services.html">Corporate</a>
                      </li>
                      <li>
                        <a href="services.html">Meetings &#38; Events</a>
                      </li>
                      <li>
                        <a href="services.html">Private Tours</a>
                      </li>
                      <li>
                        <a href="services.html">To My Door</a>
                      </li>
                      <li>
                        <a href="services.html">Chauffeur Service</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="rates.html">Rates</a>
                  </li>
                  <li>
                    <a href="ourdrivers.html">Our drivers</a>
                  </li>
                  <li>
                    <a href="tipstesti.html">Tips</a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Blog <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="blog.html">Blog list</a>
                      </li>
                      <li>
                        <a href="blog-masonry.html">Masonry layout</a>
                      </li>
                      <li>
                        <a href="single-post.html">Single Post</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                </ul>
              </div>
              {/* <!--/.nav-collapse --> */}
            </div>
            <div className="social-list">
              <span className="social-list__text">Find us here:</span>
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
        </div>
        <div className="header-container_wrap container">
          <div className="header-container__flex">
            <div className="logo">
              <a href="index-2.html">
                <i className="icon-logo"></i>
                <span>Rental</span>Cars
              </a>
            </div>
            <div className="social-list">
              <span className="social-list__text">Find us here:</span>
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
            <div className="phone_block">
              <span>
                <i className="icon-telephone"></i> 1-800-123-4567
              </span>
              <small>Our Reservation Specialists 24/7</small>
            </div>
          </div>
        </div>
        <div className="header-navigation-wrap stickUp">
          {/* <!-- Navbar fixed top --> */}
          <div
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="menu-navigation navbar-collapse collapse">
                {/* <!-- Left nav --> */}
                <ul className="menu-navigation__list nav navbar-nav">
                  <li className="current">
                    <a href="index-2.html" data-hover="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html" data-hover="About us">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="fleet.html" data-hover="Fleet">
                      Fleet <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="fleet-second.html">Fleet page 2</a>
                      </li>
                      <li>
                        <a href="fleet.html">
                          Cars{" "}
                          <i className="icon-arrow-down-sign-to-navigate"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              Executive Sedans{" "}
                              <i className="icon-arrow-down-sign-to-navigate"></i>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">Sub Item 1</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 2</a>
                              </li>
                              <li className="disabled">
                                <a className="disabled" href="#">
                                  Disabled item
                                </a>
                              </li>
                              <li>
                                <a href="#">Sub Item 3</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 4</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 5</a>
                              </li>
                              <li>
                                <a href="#">Sub Item 6</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fleet.html">Luxury Sedans</a>
                          </li>
                          <li>
                            <a href="fleet.html">Limousine</a>
                          </li>
                          <li>
                            <a href="fleet.html">Sport Car</a>
                          </li>
                          <li>
                            <a href="fleet.html">SUV</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="fleet.html">Mini bus</a>
                      </li>
                      <li>
                        <a href="fleet.html">Motobikes</a>
                      </li>
                      <li>
                        <a href="fleet.html">Yachts</a>
                      </li>
                      <li>
                        <a href="fleet.html">Airplane</a>
                      </li>
                      <li>
                        <a href="fleet.html">Helicopter</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="services.html" data-hover="Services">
                      Services{" "}
                      <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="services-post.html">
                          24 Hour Airport Services
                        </a>
                      </li>
                      <li>
                        <a href="services.html">Business Travel</a>
                      </li>
                      <li>
                        <a href="services.html">Corporate</a>
                      </li>
                      <li>
                        <a href="services.html">Meetings &#38; Events</a>
                      </li>
                      <li>
                        <a href="services.html">Private Tours</a>
                      </li>
                      <li>
                        <a href="services.html">To My Door</a>
                      </li>
                      <li>
                        <a href="services.html">Chauffeur Service</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="rates.html" data-hover="Rates">
                      Rates
                    </a>
                  </li>
                  <li>
                    <a href="ourdrivers.html" data-hover="Our drivers">
                      Our drivers
                    </a>
                  </li>
                  <li>
                    <a href="tipstesti.html" data-hover="Testimonials">
                      Tips
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" data-hover="Blog">
                      Blog <i className="icon-arrow-down-sign-to-navigate"></i>
                    </a>
                    <ul className="sub-menu dropdown-menu">
                      <li>
                        <a href="blog.html">Blog list</a>
                      </li>
                      <li>
                        <a href="blog-masonry.html">Masonry layout</a>
                      </li>
                      <li>
                        <a href="single-post.html">Single Post</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contacts.html" data-hover="Contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--/.nav-collapse --> */}
            </div>
            {/* <!--/.container --> */}
          </div>
        </div>
      </header>
    </>
  );
};
