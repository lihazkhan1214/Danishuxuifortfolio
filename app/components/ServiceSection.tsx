"use client"
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { ChevronDown, ChevronUp, AlignLeft } from 'lucide-react';

function ServiceSection() {
  const [showMore, setShowMore] = useState(false);

  const cards = [
    {
      title: "App Design",
      icon: "/images/app.png",
      desc: "An app designed for effortless user experience, focusing on simplicity and ease of use."
    },
    {
      title: "Web Design",
      icon: "/images/web.png",
      desc: "Web design encompasses the process of creating the visual aesthetics and user experience."
    },
    {
      title: "Prototyping",
      icon: "/images/protype.png",
      desc: "Prototyping is a crucial step in the product development process, especially in fields like development, product design."
    },
    {
      title: "Wireframing",
      icon: "/images/Wireframing.png",
      desc: "Wireframing: Sketching the bare bones of a digital project laying out structure"
    },
    {
      title: "UX research",
      icon: "/images/research.png",
      desc: "Web design encompasses the process of creating the visual desig and user experience of a website."
    },
    {
      title: "Responsive",
      icon: "/images/Responsive.png",
      desc: "Responsive web design adapts to various devices, ensuring a consistent and user-friendly."
    },
    {
      title: "Logo Design",
      icon: "/images/logodesign.png",
      desc: "Logo design is the creation of a visual symbol representing a brand or company"
    },
    {
      title: "Banner Design",
      icon: "/images/banner.png",
      desc: "Creating visually compelling graphics for concise communication, often used in advertising"
    }
  ];

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  const visibleCards = showMore ? cards : cards.slice(0, 4);

  return (
    <div className='padding-x text-[#FFF] py-10 bg-[#000]'>
      <h1 className="text-[24px] font-bold flex items-center gap-2"><AlignLeft /> My Services</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ transition: "height 0.5s ease-in-out" }}>
        {visibleCards.map((item, ind) => (
          <ServiceCard key={ind} title={item.title} icon={item.icon} desc={item.desc} />
        ))}
      </div>

      <div className="flex mt-3 justify-center">
        <div className="w-[35px] flex items-center justify-center cursor-pointer border-[0.5px] border-[#FFF]  rounded-full bg-[#18191A] h-[35px]" onClick={handleButtonClick}>
          {showMore ? (
            <ChevronUp className='mx-auto text-[#FFF] w-[30px]  h-[30px]' />
          ) : (
            <ChevronDown className='mx-auto text-[#FFF] w-[30px]  h-[30px]' />
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
