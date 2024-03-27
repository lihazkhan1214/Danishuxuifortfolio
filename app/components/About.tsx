"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function About() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='bg-[#000] padding-x py-10 flex max-lg:flex-col justify-between gap-20'>
            <div className='flex gap-10'>
                <div className='relative w-[120px] h-full'>
                    <Image src="/images/heading.png" alt='not found' fill />
                </div>
                <div>
                    <div className='w-[270px] relative h-[286px] flex  items-end justify-end'>
                        <Image src="/images/danish.png" alt='not ' fill />
                        <div className="absolute w-[107px] mr-[-50px] h-[107px]">
                            <Image src="/images/experience.png" alt='not found' fill />
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-[#FFF] mt-3 font-bold text-[12px]'>My Active Clients</h1>
                        <div className='w-[84px] h-[30px] relative '>
                            <Image src="/images/tooltip.png" alt='not' fill />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[#FFF] text-[44px] font-bold'>About Me</h1>
                <p className="text-[#FFF] text-[24px] text-pretty overflow-hidden max-h-[72px]">
                    My name is Danish ali. I am a UI/UX designer with 4+ years of experience. I am responsible for creating and designing interfaces and experiences for digital products, such as websites | mobile applications | software, and other digital interfaces. Being A UI designer I am focus on designing the visual elements of the interface, such as the layout, color palette, typography, and graphics, while UX design we focus on the overall user experience, including user research, usability testing, and interaction design. User Experience Design | User Interface Design | UX UI Design | Product Designer | Interaction Designer | Automotive Interior Designer
                </p>
              
                <button  className='bg-[#018AFF] text-[18px] font-[500] font-semibold rounded-[4px] w-[140px] text-[#FFF] h-[48px]'>
                    More Detail
                </button>
            </div>
        </div>
    )
}

export default About;
