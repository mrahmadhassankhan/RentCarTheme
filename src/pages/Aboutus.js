import React from "react";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export const Aboutus = () => {
  return (
    <>
      <Tools />
      <Loader />
      <Header />
      {/* Content  */}
      <main id="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs__title">About Us</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <Link to="/" className="breadcrumbs__item-link" />
                      Home
                      <Link /> <span>/</span>{" "}
                      <Link to="/about-us" className="breadcrumbs__item-link" />
                      About Us
                      <Link />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Breadcrumbs  */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-block">
                <h1>Company Overview</h1>
                <span className="text-link">
                  Rental Cars is one of the leading car rental companies in USA
                </span>
                <p>
                  Rent a car in the USA and benefit from low prices,
                  professional service, and a great range of comfortable new
                  vehicles. And with our car rental stations in the USA and
                  across the world located exactly where you need them most – in
                  city centers, airports, and railway stations – you'll be
                  hitting the road in no time, whether traveling for business or
                  pleasure. Rent a car in the USA with Rental Cars today and
                  find the perfect rental car or truck for your needs, while
                  enjoying the added peace of mind that comes with a name you
                  can trust. Rent a car with us It's easy to book your car
                  rental in the USA with Rental Cars. Just use our simple
                  three-step booking process to find your ideal rental in no
                  time.
                </p>
                {/* Add more paragraphs if needed */}
                <ul className="list__marker">
                  <li>
                    <Link to="#" />
                    Best price guarantee
                    <Link />
                  </li>
                  <li>
                    <Link to="#" />
                    No cancellation or amendment fees
                    <Link />
                  </li>
                  <li>
                    <Link to="#" />
                    No hidden extras to pay - theft and damage cover included
                    <Link />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Add more sections if needed */}
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
