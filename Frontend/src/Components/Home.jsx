import React from "react";
import Card from "./Card";
import Display from "./Display";
import About from "./About";
import Card2 from "./Card2";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import Logo from "./Logo";
import Testimonials from "./Testimonials";
import SmallBanner from "./SmallBanner";

export default function Home() {
  return (
    <>
      <SmallBanner/>
      <Display />

      <Card />
      <About />
      <Logo />
      <Card2 />
      <Banner />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
}
