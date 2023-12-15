import React from "react";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Blog = () => {
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
                <div className="breadcrumbs__title">Blog Posts</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="index-2.html" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="blog.html" className="breadcrumbs__item-link">
                        Blog Posts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-9 post-list">
              <article className="post-list__item format-standart">
                <figure className="thumbnail post-list__thumbnail">
                  <a href="single-post.html">
                    <img src="assets/images/blog-post-img-1.jpg" alt="" />
                  </a>
                </figure>
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      RentalCars's Cheap One-Way Car Rental Guide
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Leann Rimes bought a one-way ticket on a westbound train,
                      to see how far she could go. Eventually, she might want to
                      make a return trip back east! If she's collected a lot of
                      new possessions while out west, the cheapest option might
                      be a one-way rental vehicle, where she rents...
                    </p>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <article className="post-list__item format-video">
                <figure className="thumbnail post-list__thumbnail video-thumb">
                  <iframe src="https://player.vimeo.com/video/103180506"></iframe>
                </figure>
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      An unlikely endorsement of rental cars from the star of
                      Airplane!e
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Leann Rimes bought a one-way ticket on a westbound train,
                      to see how far she could go. Eventually, she might want to
                      make a return trip back east! If she's collected a lot of
                      new possessions while out west, the cheapest option might
                      be a one-way rental vehicle, where she rents...
                    </p>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <article className="post-list__item format-quote">
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      Premium Credit Cards That Offer Premium Car Rental
                      Benefits
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Rental car companies have a vested interest in credit card
                      users. After all, the companies need to get paid by
                      consumers and the days of cash deposits are long gone.{" "}
                    </p>

                    <blockquote className="post-format-quote">
                      <p>
                        Debit cards are also viewed as undesirable by the rental
                        car companies as a proxy for "non-creditworthy renter"
                        (whether fair or unfair). Using debit cards frequently
                        come with many restrictions, if the rental car company
                        will even accept the debit card at all! Without multiple
                        forms of identification, large security deposits, and a
                        successful credit check (among other provisions), the
                        car renter with a debit card will likely be taking a
                        taxi or Uber instead.
                      </p>
                      <p>
                        A search for a one-way rental at is almost identical to
                        searching for a round-trip rental. The only difference
                        is selecting the option to Return at a different
                        location. Looking for a Fort Lauderdale Airport to
                        Orlando International Airport rental?{" "}
                      </p>
                    </blockquote>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <article className="post-list__item format-gallery">
                <div className="swiper-container-slider-format swiper-container">
                  <div className="swiper-wrapper">
                    <figure className="thumbnail post-list__thumbnail swiper-slide">
                      <img src="assets/images/blog-post-img-2.jpg" alt="" />
                    </figure>
                    <figure className="thumbnail post-list__thumbnail swiper-slide">
                      <img src="assets/images/blog-post-img-3.jpg" alt="" />
                    </figure>
                    <figure className="thumbnail post-list__thumbnail swiper-slide">
                      <img src="assets/images/blog-post-img-4.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="swiper-pagination swiper-pagination-slider-format"></div>
                  <span className="swiper-button-next-blog swiper-button-next">
                    <i className="icon-left-arrow2"></i>
                  </span>
                  <span className="swiper-button-prev-blog swiper-button-prev">
                    <i className="icon-left-arrow"></i>
                  </span>
                </div>
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      RentalCars's Cheap One-Way Car Rental Guide
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Leann Rimes bought a one-way ticket on a westbound train,
                      to see how far she could go. Eventually, she might want to
                      make a return trip back east! If she's collected a lot of
                      new possessions while out west, the cheapest option might
                      be a one-way rental vehicle, where she rents...
                    </p>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <article className="post-list__item format-audio">
                <figure className="thumbnail post-list__thumbnail audio-thumb">
                  <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameborder="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197377286&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
                  ></iframe>
                </figure>
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      Can I Receive Disability Accommodations
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Leann Rimes bought a one-way ticket on a westbound train,
                      to see how far she could go. Eventually, she might want to
                      make a return trip back east! If she's collected a lot of
                      new possessions while out west, the cheapest option might
                      be a one-way rental vehicle, where she rents...
                    </p>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <article className="post-list__item format-link">
                <figure className="thumbnail post-list__thumbnail link-thumb">
                  <a href="single-post.html">
                    <img src="assets/images/blog-post-img-5.jpg" alt="" />
                  </a>
                  <a href="index-2.html" className="post-link">
                    http://www.rentalcarslink.com
                  </a>
                </figure>
                <div className="post-list__item-content">
                  <header className="post-list__item-header">
                    <div className="post-list__item-meta post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h3 className="post-list__item-title">
                      The Fee Detective and the Grace of Rental Car Companies
                    </h3>
                    <span className="post-list__item-author">
                      by <a href="#">Paul Johnson</a>
                    </span>
                  </header>
                  <div className="post-list__item-desc">
                    <p>
                      Leann Rimes bought a one-way ticket on a westbound train,
                      to see how far she could go. Eventually, she might want to
                      make a return trip back east! If she's collected a lot of
                      new possessions while out west, the cheapest option might
                      be a one-way rental vehicle, where she rents...
                    </p>
                  </div>
                  <footer className="post-list__item-footer">
                    <a href="single-post.html" className="btn">
                      READ POST
                    </a>
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
                  </footer>
                </div>
              </article>
              <div className="pagination">
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
              </div>
            </div>
            <aside className="col-xs-12 col-md-4 col-lg-3 sidebar" id="sidebar">
              <div className="sidebar-block">
                <form className="form-default">
                  <div className="tt-form-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <a href="#" type="submit" className="btn">
                      GO
                    </a>
                  </div>
                </form>
              </div>
              <div className="sidebar-block">
                <h3>Archive</h3>
                <div className="calendar">
                  <div className="calendar__header">November 2017</div>
                  <table>
                    <tr>
                      <th>M</th>
                      <th>T</th>
                      <th>W</th>
                      <th>T</th>
                      <th>F</th>
                      <th>S</th>
                      <th>S</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td className="selected">17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                  <div className="calendar__footer">
                    <a href="#">« Sep</a>
                  </div>
                </div>
              </div>
              <div className="sidebar-block">
                <h3>Post Categories</h3>
                <ul className="list-categories">
                  <li>
                    <a href="#">Audios</a> <span className="count">(2)</span>
                  </li>
                  <li>
                    <a href="#">Daily Inspiration</a>{" "}
                    <span className="count">(7)</span>
                  </li>
                  <li>
                    <a href="#">Freelance</a> <span className="count">(3)</span>
                  </li>
                  <li>
                    <a href="#">Links</a> <span className="count">(1)</span>
                  </li>
                  <li>
                    <a href="#">Mobile</a> <span className="count">(1)</span>
                  </li>
                  <li>
                    <a href="#">Photography </a>{" "}
                    <span className="count">(5)</span>
                  </li>
                  <li>
                    <a href="#">Quotes</a> <span className="count">(1)</span>
                  </li>
                  <li>
                    <a href="#">Resources</a> <span className="count">(3)</span>
                  </li>
                  <li>
                    <a href="#">Status</a> <span className="count">(2)</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-block">
                <h3>Popular tags</h3>
                <ul className="list-tags">
                  <li>
                    <a href="#">Car</a>
                  </li>
                  <li>
                    <a href="#">Rentals</a>
                  </li>
                  <li>
                    <a href="#">Mobile App</a>
                  </li>
                  <li>
                    <a href="#">Cheap Rental Cars</a>
                  </li>
                  <li>
                    <a href="#">Thrifty</a>
                  </li>
                  <li>
                    <a href="#">Online Booking</a>
                  </li>
                  <li>
                    <a href="#">Airport Rentals</a>
                  </li>
                  <li>
                    <a href="#">Rental Rates</a>
                  </li>
                  <li>
                    <a href="#">Auto</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-block">
                <h3>Featured Posts</h3>
                <div className="post-block">
                  <figure className="thumbnail">
                    <a href="single-post.html">
                      <img src="assets/images/post-thumb_small-1.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="post-block__content">
                    <div className="post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h4>International Airport Car Rental Guide</h4>
                  </div>
                </div>
                <div className="post-block">
                  <figure className="thumbnail">
                    <a href="single-post.html">
                      <img src="assets/images/post-thumb_small-2.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="post-block__content">
                    <div className="post-block_meta">
                      <span className="date">
                        <i className="icon-clock"></i> 10 February, 2017
                      </span>
                      <a href="#" className="comment">
                        <i className="icon-social"></i> 3
                      </a>
                    </div>
                    <h4>Tampa Airport Rental Car Facility Delayed</h4>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
