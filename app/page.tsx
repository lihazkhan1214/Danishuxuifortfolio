import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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


    </main>
  );
}
