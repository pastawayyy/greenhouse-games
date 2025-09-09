'use client'

import BoostCard from "./components/boostCard";
import Carousel from "./components/carousel";
import JoinUs from "./components/joinUs";
import { popularGames, amazingDeals } from "./data";

export default function Home() {
  return (
    <div>
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
      <JoinUs/>
    </div>
  );
}
