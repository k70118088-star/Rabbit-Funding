import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./sections/Hero";
import BetterTech from "./sections/BetterTech";
import RealPeople from "./sections/RealPeople";
import BehindRabbit from "./sections/BehindRabbit";
import WorkRabbit from "./sections/WorkRabbit";
import RealStories from "./sections/RealStories";
import Footer from "./common/Footer";
import LoveRabbits from "./sections/LoveRabbits";

const RabbitFunding = () => {
  return (
    <div className="bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]">
      <Navbar />
      <Hero />
      <BetterTech />
      <BehindRabbit />
      <RealPeople />
      <WorkRabbit />
      <RealStories /> 
       <LoveRabbits />
      <Footer />
    </div>
  );
};

export default RabbitFunding;
