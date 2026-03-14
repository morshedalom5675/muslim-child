import React from "react";
import Hero from "../../components/HomePage/Hero";
import OurTarget from "../../components/HomePage/OurTarget";
import SyllabusSection from "../../components/HomePage/SyllabusSection";
import Features from "../../components/HomePage/Features";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurTarget></OurTarget>
      <SyllabusSection></SyllabusSection>
      <Features></Features>
    </div>
  );
};

export default Home;
