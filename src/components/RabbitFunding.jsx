import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./Hero";
import BetterTech from "./BetterTech";

const RabbitFunding = () => {
  return (
    <div className="bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]">
      <Navbar />
      <Hero />
      <BetterTech />
    </div>
  );
};

export default RabbitFunding;
