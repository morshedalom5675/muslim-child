import React from "react";
import Hero from "../../components/HomePage/Hero";
import OurTarget from "../../components/HomePage/OurTarget";
import Features from "../../components/HomePage/Features";
import SyllabusHome from "../../components/HomePage/SyllabusHome";
import ClassInfo from "../../components/HomePage/ClassInfo";
import ClassSchedule from "../../components/HomePage/ClassSchedul";
import FeeInfo from "../../components/HomePage/FeeInfo";
import OurTeachers from "../../components/HomePage/OurTeachers";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurTarget></OurTarget>
      <SyllabusHome></SyllabusHome>
      <Features></Features>
      <ClassInfo></ClassInfo>
      <ClassSchedule></ClassSchedule>
      <FeeInfo></FeeInfo>
      <OurTeachers></OurTeachers>
    </div>
  );
};

export default Home;
