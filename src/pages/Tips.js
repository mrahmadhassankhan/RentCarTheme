import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const Tips = () => {
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
                <div className="breadcrumbs__title">Rental Car Tips</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="/" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="/tips" className="breadcrumbs__item-link">
                        Tips &#38; Testimonials
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
          <div className="box-tips">
            <div className="row">
              <div className="col-xs-12">
                <p className="center-text">
                  The tips below and our recommended search website will help
                  you find your best deal so you can hit the road and start
                  exploring.
                </p>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">1</span>
                  <div className="block-tips__inner">
                    <h6>Book in advance</h6>
                    <p>
                      When you book online in advance you will almost always get
                      a better deal than at the counter. And it’s easier and
                      quicker. The last thing you want to do after a long flight
                      is deal with rental car companies at the airport and
                      negotiate a deal. Be sure to take all your documents with
                      you as proof of hire and your rates to avoid any hassles
                      (scan and save in your email account).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">2</span>
                  <div className="block-tips__inner">
                    <h6>Check prices frequently</h6>
                    <p>
                      Just like when you search for flights it pays to check
                      prices frequently as they do change – different days can
                      have different rates. If you use an aggregator site that
                      searches all the major rental car companies at once it’s
                      fairly quick and painless. And compared to flights, the
                      great thing about renting a car is that reservations often
                      times can be cancelled and re-booked.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">3</span>
                  <div className="block-tips__inner">
                    <h6>Adjust Pick-Up and Drop-Off Times</h6>
                    <p>
                      When searching for cheap rental cars online, the pick-up
                      and drop-off times are typically in half hour increments.
                      Try tweaking these times and see if it affects your rates.
                      Sometimes tacking on an extra day to that weekly rental,
                      or even adding a couple of hours to extend it over a
                      weekend, can actually lower your rate.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">4</span>
                  <div className="block-tips__inner">
                    <h6>Book the smallest vehicle you’ll need</h6>
                    <p>
                      Think carefully about what type of vehicle you need. Sure
                      it might be tempting to go for the big SUV or the fancy
                      sports car, but always think fuel consumption and the
                      practicalities of your car. Being comfortable is important
                      so you enjoy your road trip. Don’t go small and cheap if
                      you are crammed in like sardines.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">5</span>
                  <div className="block-tips__inner">
                    <h6>Avoid the airport</h6>
                    <p>
                      Off-airport locations are typically cheaper than airport
                      locations (they tack on fees). Look in nearby neighborhood
                      locations to save money. Just make sure the downtown
                      branch is not on the outskirts of the city limits meaning
                      a long and costly taxi ride. This strategy is best applied
                      in cities that have efficient and affordable public
                      transport to get you to the dealer without hassle.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="block-tips">
                  <span className="number">6</span>
                  <div className="block-tips__inner">
                    <h6>Save on a days rental</h6>
                    <p>
                      Off-airport locations are typically cheaper than airport
                      locations (they tack on fees). Look in nearby neighborhood
                      locations to save money. Just make sure the downtown
                      branch is not on the outskirts of the city limits meaning
                      a long and costly taxi ride.{" "}
                    </p>
                  </div>
                </div>
              </div>
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
          </div>
          <div className="row box-testimonials">
            <div className="col-xs-12">
              <h1 className="title_content">Testimonials</h1>
              <span className="text-link">What our clients say about us</span>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        I was very pleased once again. Hiring online was easy,
                        collection was straight forward, and returning the car
                        was quick. A very good experience! Thank you.
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img.png" alt="" />
                        <span className="name">
                          <a href="#">Thomas Burgess</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        This is the second time this year that I have rented a
                        Rental Cars direct vehicle and the cars were both
                        virtually brand new. Awesome cars and very kind, helpful
                        staff. Thank you!
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img_1.png" alt="" />
                        <span className="name">
                          <a href="#">Donald Alford</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        Great Service, Absolutely Terrific staff, extremely
                        professional!!! This was my first ever Car Renting
                        experience, Awesome!!
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img_2.png" alt="" />
                        <span className="name">
                          <a href="#">James Knudsen</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        Im really impressed with your staff at all moosa branch,
                        patricia. She has sevice minded, be attentive,
                        proactive. I think you have a very value staff with you.
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img_3.png" alt="" />
                        <span className="name">
                          <a href="#">Bruce Justice</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        Everything was perfect, I liked that age limitation for
                        some cars is better other suppliers; I am 22 and I
                        wanted a van. I would like the tax to be included in my
                        booking voucher next time{" "}
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img_4.png" alt="" />
                        <span className="name">
                          <a href="#">Rodolfo Hopkins</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12 col-md-6">
              <article className="block_tesimonial">
                <blockquote>
                  <div className="inner_blockquote">
                    <div className="wrapper">
                      <p>
                        Thank you very much for your swift reply and thank you
                        for the help. I'm very glad that I can continue using
                        Thrifty, as I am very happy for the service you provide.{" "}
                      </p>
                      <span className="author_info">
                        <img src="assets/images/author_img_5.png" alt="" />
                        <span className="name">
                          <a href="#">Raul Hopson</a>
                        </span>
                        <span className="position">Regular Customer</span>
                      </span>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
            <div className="col-xs-12">
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
          </div>
        </div>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
