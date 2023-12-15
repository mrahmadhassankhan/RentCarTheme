import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const OurDrivers = () => {
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
                <div className="breadcrumbs__title">Our Drivers</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="/" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="/ourdrivers" className="breadcrumbs__item-link">
                        Our drivers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <section className="our-team-box">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-1.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Francis Thigpen</a>
                    </h3>
                    <span className="position">Limousine driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-2.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Justin Groh</a>
                    </h3>
                    <span className="position">Airport transfer driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-3.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Anthony Grant</a>
                    </h3>
                    <span className="position">Business travel driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-4.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Ronnie Key</a>
                    </h3>
                    <span className="position">Limousine driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-5.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Michael Holmes</a>
                    </h3>
                    <span className="position">Airport transfer driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-6.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Luis Jones</a>
                    </h3>
                    <span className="position">Business travel driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-7.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">James Spotts</a>
                    </h3>
                    <span className="position">Limousine driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-8.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Jose Glenn</a>
                    </h3>
                    <span className="position">Airport transfer driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="block-team__item">
                  <figure className="thumbnail">
                    <img src="assets/images/team_thumb-9.jpg" alt="" />
                  </figure>
                  <div className="block-team__desc">
                    <h3>
                      <a href="#">Timmy Weller</a>
                    </h3>
                    <span className="position">Business travel driver</span>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades.
                    </p>
                  </div>
                </div>
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
        </section>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
