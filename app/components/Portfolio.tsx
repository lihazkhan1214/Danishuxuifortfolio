"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { ChevronDown, ChevronUp, AlignLeft } from 'lucide-react';


import Pcard from './Pcard';

const postdata=[{
  img:`/images/service1.png`,
  title:"Website Design",
  desc:"Website design encompasses the process of creating the visual layout, structure, and functionality of a website.",
  

},
{
    img:`/images/dashboard1.png`,
    title:"Dashboard",
    desc:"Dashboard design: interface presenting key information, metrics, and data concisely for efficient visualization.",
    
  
  },{
    img:`/images/appimg.png`,
    title:"App Design",
    desc:"App design involves creating the visual and functional interface for mobile applications, web applications, or desktop software.",
    
  
  }
  ,{
    img:`/images/wiframe.png`,
    title:"Wiframing Design",
    desc:"Wireframing is vital for designing digital products like websites, apps, and interfaces, facilitating efficient development.",
    
  
  },{
    img:`/images/landingpage.png`,
    title:"Landing Page Design",
    desc:"A landing page is a web page designed with a specific goal: generating leads, promoting a product/service.",
    
  
  },{
    img:`/images/appimg2.png`,
    title:"App Design",
    desc:"App design involves creating the visual and functional interface for mobile applications, web applications, or desktop software.",
  }
  
  

]

interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function Portfolio() {

  


    const SampleNextArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative  hidden md:block w-[30px]  h-[30px]">
                    <Image src="/images/rightarrow.png" alt='not found' fill />
                </div>

            </div>
        );
    };

    const SamplePrevArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative hidden md:block w-[30px]  h-[30px]">
                    <Image src="/images/leftarrow.png" alt='not found' fill />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />, // Custom Next Arrow component
        prevArrow: <SamplePrevArrow />, // Custom Previous Arrow component
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
      
                        <div id="portfolio" className="max-sm:px-5   padding-x py-5  bg-[#000]">
                           
                                
                                <h1 className="text-[24px] mb-10 font-bold text-[#FFFFFF] flex items-center gap-2"><AlignLeft /> My Portfolio</h1>

                            <Slider {...settings}>




                                {postdata.map((item, index) => (
                                    <>
                                        <div className=" sm:px-3">
                                            <Pcard
                                                key={index}
                                                title={item.title}
                                                
                                               
                                               shortDescription={item.desc}
                                                picture={item.img}
                                            />
                                        </div>
                                         </>
                                ))}

                            </Slider>
                        </div>

                    
                
            

        </>
    );
}

export default Portfolio;