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
    <div >
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
