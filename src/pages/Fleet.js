import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

const Fleet = () => {
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
                <div className="breadcrumbs__title">Fleet</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="/" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="/fleet" className="breadcrumbs__item-link">
                        Fleet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <section className="carousel-models_fullwidth">
          <div className="carousel-models_fullwidth__inner">
            <h1>Featured Cars</h1>
            <span className="text-link">
              Great Rental Car Selection. Unbeatable Deals.
            </span>
            <div className="swiper-container-models swiper-container">
              <div className="swiper-wrapper">
                <div className="model-info swiper-slide">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_2.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Porsche 911 Carrera S</h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>230$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
                <div className="model-info swiper-slide">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_1.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Hyundai Santa Fe</h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>120$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
                <div className="model-info swiper-slide">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_3.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Mercedes-Benz Metris Passenger Van </h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>115$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
                <div className="model-info swiper-slide swiper-slide-active">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_1.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Hyundai Santa Fe</h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>120$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
                <div className="model-info swiper-slide">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_2.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Porsche 911 Carrera S</h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>230$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
                <div className="model-info swiper-slide">
                  <figure className="thumbnail">
                    <a href="/details">
                      <img src="assets/images/car_3.png" alt="" />
                    </a>
                  </figure>
                  <div className="model-info__content">
                    <h3>Mercedes-Benz Metris Passenger Van </h3>
                    <p>
                      To be clear, the Santa Fe Sport is a 5-passenger SUV with
                      two rows of seating, but I am testing the regular Santa Fe
                      that is larger and has three rows of seating.
                    </p>
                    <span className="cost">
                      From <strong>100$</strong> per day
                    </span>
                    <span className="btn btn-model" data-remodal-target="modal">
                      book now
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- // swiper-container-car  --> */}
            </div>
            <div className="swiper-pagination-models"></div>
            <div className="navigation_block">
              <span className="swiper-button-next">
                <i className="icon-left-arrow2"></i>
              </span>
              <span className="swiper-button-prev">
                <i className="icon-left-arrow"></i>
              </span>
            </div>
          </div>
        </section>
        {/* <!-- // Full width carousel  --> */}

        <section className="isotop-box">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Our Fleet</h1>
                {/* <!-- Filters --> */}
                <div className="filters-by-category">
                  <ul className="option-set" data-option-key="filter">
                    <li>
                      <a
                        href="#filter"
                        data-option-value="*"
                        className="selected"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category1"
                        className=""
                      >
                        Executive Sedans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category2"
                        className=""
                      >
                        Luxury Sedans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category3"
                        className=""
                      >
                        Limousine
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category4"
                        className=""
                      >
                        Sport Car
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category5"
                        className=""
                      >
                        SUV
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category6"
                        className=""
                      >
                        Passenger Van
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category7"
                        className=""
                      >
                        Mini Bus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category8"
                        className=""
                      >
                        Motobike
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category9"
                        className=""
                      >
                        Yacht
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category10"
                        className=""
                      >
                        Helicopter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#filter"
                        data-option-value=".category11"
                        className=""
                      >
                        Airplane
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- //end Filters --> */}
                <div className="gallery gallery-isotope" id="gallery">
                  <div className="gallery__item  category6 category7">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-01.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Mercedes-Benz Van</h6>
                      <span className="cost">
                        <span>
                          <strong>20$</strong> / hour
                        </span>
                        <span>
                          <strong>100$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item category1 category2 category4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-02.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Porsche 911 Carrera</h6>
                      <span className="cost">
                        <span>
                          <strong>50$</strong> / hour
                        </span>
                        <span>
                          <strong>230$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item category1 category4  category5">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-03.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Hyundai Santa Fe</h6>
                      <span className="cost">
                        <span>
                          <strong>18$</strong> / hour
                        </span>
                        <span>
                          <strong>90$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item category2 category4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-04.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Jaguar F-Type S</h6>
                      <span className="cost">
                        <span>
                          <strong>34$</strong> / hour
                        </span>
                        <span>
                          <strong>159$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item category2 category5">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-05.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Hyundai i30</h6>
                      <span className="cost">
                        <span>
                          <strong>22$</strong> / hour
                        </span>
                        <span>
                          <strong>115$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item category6 category5">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-06.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Ford Edge</h6>
                      <span className="cost">
                        <span>
                          <strong>21$</strong> / hour
                        </span>
                        <span>
                          <strong>110$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
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
            {/* <!-- //row --> */}
          </div>
          {/* <!-- //Container --> */}
        </section>

        <section className="car-info-box img-left">
          <div className="car-info-box__description">
            <div className="desc-inner">
              <h1>Luxury Cars</h1>
              <span className="text-link">No booking fees! No markups!</span>
              <p>
                Search through Rental Cars renowned luxury car rental brands,
                rent to self-drive in the USA. Delivery at your location across
                Car Rentals, and Sharjah Car Rentals now available. Through
                OneClickDrive, you can also hire a BMW, Audi, Jaguar, Range
                Rover, Lexus or Mercedes with a professional driver chauffeur
                service.{" "}
              </p>
            </div>
          </div>
          <figure className="car-info-box__thumb has-second-img">
            <img
              src="assets/images/car_hire1.jpg"
              alt=""
              className="first-fade"
            />
            <img
              src="assets/images/car_hire2.jpg"
              alt=""
              className="second-fade"
            />
          </figure>
        </section>
        <section className="iphone-parallax_box">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="iphone-android_info-box">
                  <h1>
                    <span>Free iPhone &amp;</span> <span>Android App</span>
                  </h1>
                  <p>
                    <span>
                      Renal Cars App is a car rental marketplace where travelers
                      can rent any car they want,
                    </span>{" "}
                    <span>
                      wherever they want it, from a community of local car
                      owners throughout the US and Canada.
                    </span>
                  </p>
                  <span>
                    <a target="_blank" href="https://itunes.apple.com/">
                      <img src="assets/images/app_store.jpg" alt="" />
                    </a>
                    <a target="_blank" href="https://play.google.com/store">
                      <img src="assets/images/google_play.jpg" alt="" />
                    </a>
                  </span>
                  <div className="secondeffect">
                    <div className="first-text-block">
                      <span>
                        Our Fleet <em>Great Rental Car Selection.</em>
                      </span>
                    </div>
                    <div className="second-text-block">
                      <i className="icon-logo"></i>
                      <span className="title_block">
                        <span>Rental</span>Cars
                      </span>
                      <em>
                        <i className="icon-telephone"></i> 1-800-123-4567
                      </em>
                    </div>
                  </div>
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

export default Fleet;
