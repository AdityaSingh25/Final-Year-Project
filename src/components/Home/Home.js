import React from "react";
import Navbar from "../Navbar/Navbar";

import HeroSection from "../Herosection/Herosection";
import Cards from "../Cards/Cards";
function Home(props) {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
