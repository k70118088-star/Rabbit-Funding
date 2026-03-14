import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./sectoins/Hero";
import BetterTech from "./sectoins/BetterTech";
import RealPeople from "./sectoins/RealPeople";
import BehindRabbit from "./sectoins/BehindRabbit";
import WorkRabbit from "./sectoins/WorkRabbit";

const RabbitFunding = () => {
  return (
    <div className="bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]">
      <Navbar />
      <Hero />
      <BetterTech />
      <BehindRabbit />
      <RealPeople />
      {/* <WorkRabbit /> */}
    </div>
  );
};

export default RabbitFunding;
