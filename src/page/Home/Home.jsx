import React from "react";
import Hero from "../../components/HomePage/Hero";
import OurTarget from "../../components/HomePage/OurTarget";
import Features from "../../components/HomePage/Features";
import SyllabusHome from "../../components/HomePage/SyllabusHome";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurTarget></OurTarget>
      <SyllabusHome></SyllabusHome>
      <Features></Features>
    </div>
  );
};

export default Home;
