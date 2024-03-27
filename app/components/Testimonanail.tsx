"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" bg-[#000] py-10">
        <h1 className=" text-[18px] mb-5 text-[#FFF] sm:text-[36px] text-center font-bold">Testamional</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Outstanding UX/UI design! The interface is sleek and user-friendly, elevating our brand's identity and boosting user engagement.",
    name: "Michael Rodriguez",
    title: "Sr Developer",
    img:"/images/developer1.png"
  },
  {
    quote:
      "Brilliant UX/UI solutions! Enhancing conversions, retention, and user satisfaction. Praise for intuitive interface and modern aesthetic.",
    name: "Jennifer Lee",
    title:"Sr Designer",
    img:"/images/ux3.png"
    
 
  },
  {
    quote:
      "Remarkable attention to detail! Our website's usability has greatly improved, leading to positive user feedback and increased conversions.",
    name: "David Thompson",
    title:"Mern Stack Developer",
    img:"/images/mern.png"
  },
  {
    quote: "Exceptional design expertise! The intuitive layout enhances user satisfaction and brand recognition, driving growth.",
    name: "Sarah Johnson",
    title: "Sr Ux/Ux Designer",
    img:"/images/ux1.png"

  },
  {
    quote:
      "Highly impressed with the intuitive navigation and polished aesthetics. A true professional in UX/UI, exceeding expectations.",
    name: "Emily Chen",
    title: "Frontend Developer",
    img:"/images/ux2.png"
  },
  
];
