'use client'

import BoostCard from "./components/boostCard";
import Carousel from "./components/carousel";
import Footer from "./components/shared/footer";
import { popularGames, amazingDeals } from "./data";

export default function Home() {
  return (
    <div>
      <Carousel 
        title="Explore popular games" 
        items={popularGames} 
      />
      <BoostCard/>
      <Carousel 
        title="Explore these amazing deals" 
        items={amazingDeals} 
      />
      <Footer/>
    </div>
  );
}
