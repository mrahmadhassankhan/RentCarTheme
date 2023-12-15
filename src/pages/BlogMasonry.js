import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const BlogMasonry = () => {
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
                      <Link to="/" className="breadcrumbs__item-link" />
                      Home
                      <Link /> <span>/</span>{" "}
                      <Link
                        to="/blog-masonry"
                        className="breadcrumbs__item-link"
                      />
                      Blog masonry layout
                      <Link />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <div className="container">
          <div className="post-list-masonry">
            <div className="post-list-masonry__item">
              <article className="post-list__item format-standart" />
              <figure className="thumbnail post-list__thumbnail">
                <Link to="/single-post" />
                <img src="assets/images/blog-post-img-masonry-1.jpg" alt="" />
                <Link />
              </figure>
              <div className="post-list__item-content">
                <header className="post-list__item-header">
                  <div className="post-list__item-meta post-block_meta">
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    RentalCars's Cheap One-Way Car Rental Guide
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <p>
                    Leann Rimes bought a one-way ticket on a westbound train, to
                    see how far she could go. Eventually, she might want to make
                    a return trip back east!
                  </p>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
            <div className="post-list-masonry__item">
              <article className="post-list__item format-video" />
              <figure className="thumbnail post-list__thumbnail video-thumb">
                <iframe src="https://player.vimeo.com/video/103180506"></iframe>
              </figure>
              <div className="post-list__item-content">
                <header className="post-list__item-header">
                  <div className="post-list__item-meta post-block_meta">
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    An unlikely endorsement of rental cars from the star of
                    Airplane!
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <p>
                    Leann Rimes bought a one-way ticket on a westbound train, to
                    see how far she could go. Eventually, she might want to make
                    a return trip back east!
                  </p>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
            <div className="post-list-masonry__item">
              <Link className="post-list__item format-quote" />
              <div className="post-list__item-content">
                <header className="post-list__item-header">
                  <div className="post-list__item-meta post-block_meta">
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    Premium Credit Cards That Offer Premium Car Rental Benefits
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <blockquote className="post-format-quote">
                    <p>
                      Debit cards are also viewed as undesirable by the rental
                      car companies as a proxy for "non-creditworthy renter"
                      (whether fair or unfair). Using debit cards frequently
                      come with many restrictions, if the rental car company
                      will even accept the debit card at all! Without multiple
                      forms of identification, large security deposits, and a
                      successful credit check (among other provisions), the car
                      renter with a debit card will likely be taking...
                    </p>
                  </blockquote>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
            <div className="post-list-masonry__item">
              <article className="post-list__item format-audio" />
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
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    Can I Receive Disability Accommodations
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <p>
                    Leann Rimes bought a one-way ticket on a westbound train, to
                    see how far she could go. Eventually, she might want to make
                    a return trip back east!
                  </p>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
            <div className="post-list-masonry__item">
              <article className="post-list__item format-link" />
              <figure className="thumbnail post-list__thumbnail link-thumb" />
              <Link to="/single-post" />
              <img src="assets/images/blog-post-img-masonry-5.jpg" alt="" />
              <Link />
              <Link to="/" className="post-link" />
              http://www.rentalcarslink.com
              <Link />
              <figure />
              <div className="post-list__item-content">
                <header className="post-list__item-header">
                  <div className="post-list__item-meta post-block_meta">
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    The Fee Detective and the Grace of Rental Car Companies
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <p>
                    Leann Rimes bought a one-way ticket on a westbound train, to
                    see how far she could go. Eventually, she might want to make
                    a return trip back east!
                  </p>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
            <div className="post-list-masonry__item">
              <article className="post-list__item format-gallery" />
              <div className="swiper-container-slider-format swiper-container">
                <div className="swiper-wrapper">
                  <figure className="thumbnail post-list__thumbnail swiper-slide">
                    <img
                      src="assets/images/blog-post-img-masonry-2.jpg"
                      alt=""
                    />
                  </figure>
                  <figure className="thumbnail post-list__thumbnail swiper-slide">
                    <img
                      src="assets/images/blog-post-img-masonry-3.jpg"
                      alt=""
                    />
                  </figure>
                  <figure className="thumbnail post-list__thumbnail swiper-slide">
                    <img
                      src="assets/images/blog-post-img-masonry-4.jpg"
                      alt=""
                    />
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
                    <span className="date">10 February, 2017</span>
                  </div>
                  <h3 className="post-list__item-title">
                    For Whom the Road Tolls
                  </h3>
                </header>
                <div className="post-list__item-desc">
                  <p>
                    Leann Rimes bought a one-way ticket on a westbound train, to
                    see how far she could go. Eventually, she might want to make
                    a return trip back east!{" "}
                  </p>
                </div>
                <footer className="post-list__item-footer">
                  <Link to="/single-post" className="btn btn__marker" />
                  <i className="icon-arrows"></i>
                  <Link />
                </footer>
              </div>
              <article />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-text">
              <Link to="/blog" className="btn" />
              MORE POSTS
              <Link />
            </div>
          </div>
        </div>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
