import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ServiceSection from "./components/ServiceSection";
import Fqe from "./components/Fqe";
import Footer from "./components/Footer";
import {  TestTubesIcon } from "lucide-react";
import { InfiniteMovingCardsDemo } from "./components/Testimonanail";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main >
      <div className=" mx-auto 2xl:max-w-7xl">

     <div className="relative h-full w-full">
  <Image className="absolute z-10" src="/images/hero3.png" alt="not found" fill />
  <div className="absolute top-0 w-full z-20">
    <Navbar />
  </div>
  <Hero />
</div>

<About/>


    
      <ServiceSection/>

      <Portfolio/>

      <Fqe/>
      <Contact/>
   
      <InfiniteMovingCardsDemo/>
     
      
      <Footer/>
      </div>

    </main>
  );
}
