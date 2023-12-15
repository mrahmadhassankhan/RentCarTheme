import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Aboutus } from "../pages/Aboutus";
import Fleet from "../pages/Fleet";
import { Services } from "../pages/Services";
import { Rates } from "../pages/Rates";
import { OurDrivers } from "../pages/OurDrivers";
import { Tips } from "../pages/Tips";
import { Blog } from "../pages/Blog";
import { Contactus } from "../pages/Contactus";
import { BlogMasonry } from "../pages/BlogMasonry";
import { Fleetsecond } from "../pages/Fleetsecond";
import { Details } from "../pages/Details";
import { ServicesPost } from "../pages/ServicesPost";
export const MenuRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<Aboutus />}></Route>
        <Route path="/fleet" element={<Fleet />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/rates" element={<Rates />}></Route>
        <Route path="/our-drivers" element={<OurDrivers />}></Route>
        <Route path="/tips" element={<Tips />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact-us" element={<Contactus />}></Route>
        <Route path="/blog-masonry" element={<BlogMasonry />}></Route>
        <Route path="/fleet-second" element={<Fleetsecond />}></Route>
        <Route path="/ourdrivers" element={<OurDrivers />}></Route>
        <Route path="/tip" element={<Tips />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/rates" element={<Rates />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/services-post" element={<ServicesPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
