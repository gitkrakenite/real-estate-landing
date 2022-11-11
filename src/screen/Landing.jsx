import React from "react";
import Agents from "../components/agents/Agents";
import Apartment from "../components/apartments/Apartment";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Newsletter from "../components/newsletter/Newsletter";
import Stories from "../components/stories/Stories";
import Whoweare from "../components/whoWeAre/Whoweare";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Whoweare />
      <Apartment />
      <Stories />
      <Agents />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;
