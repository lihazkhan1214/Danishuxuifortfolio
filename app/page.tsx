import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ServiceSection from "./components/ServiceSection";
import Fqe from "./components/Fqe";
import Footer from "./components/Footer";
import { TestTubesIcon } from "lucide-react";
import { InfiniteMovingCardsDemo } from "./components/Testimonanail";

export default function Home() {
  return (
    <main >

      <div className="relative  h-full w-full ">
       

        <Image className="absolute z-20" src="/images/hero3.png" alt="not found" fill />
        <div className="max-lg:hidden">
          <Navbar />
        </div>
        <Hero />
       
     

      </div>



    
      <ServiceSection/>

      <Fqe/>
      <InfiniteMovingCardsDemo/>
     

      <Footer/>


    </main>
  );
}
