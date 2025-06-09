"use client"

import BoostLinks from "@components/BoostLinks";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Shorten from "@components/Shorten";
import Statistics from "@components/Statistics";
import { useEffect, useState } from "react";

export default function Home() {

  
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <>
      <Header onTop={onTop}/>
      <main className="flex flex-col  items-center w-full">
        <Hero/>
        <Shorten/>
        <Statistics/>
        <BoostLinks/>
      </main>
      <Footer/>
    </>
  );
}
