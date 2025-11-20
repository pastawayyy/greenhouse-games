'use client'

import BoostCard from "./components/boostCard";
import StatisticsCard from "./components/statisticsCard";
import Carousel from "./components/carousel";
import JoinUs from "./components/joinUs";
import Masthead from "./components/shared/masthead";
import { popularGames, amazingDeals } from "./data";

export default function Home() {
  return (
    <div>
      <Masthead/>
      <Carousel 
        title="Explore popular games" 
        items={popularGames} 
      />
      <div className="flex justify-center items-center bg-[#F9FCEA]">
        <BoostCard/>
      </div>
      <Carousel 
        title="Explore these amazing deals" 
        items={amazingDeals} 
      />
      <div className="flex justify-center items-center bg-[#F9FCEA]">
        <StatisticsCard/>
      </div>
      <JoinUs/>
    </div>
  );
};

