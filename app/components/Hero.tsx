import React from 'react';
import Image from 'next/image';
import { Linkedin,Facebook, Instagram } from 'lucide-react'


function Hero() {
    return (
        <div className=' py-10 padding-x hero relative'>

           

            <h1 className="hero__title text-center">Hi, I'm
                Danish Ali <span className='text-[#018AFF]'>ui ux</span> <br />
                <span className='text-[#018AFF]'>Expert</span> Designer</h1>
            <p className='text-[14px] sm:text-[24px] text-[#FFF] text-center w-[95%] lg:w-[60%]'>Creating remarkable digital experiences for more than 4 years as a UX/UI Designer, Innovator, and Collaborator. Together, let's make something extraordinary! 🌟 Design Arena</p>

            <button className='bg-[#018AFF] text-[18px] font-[500] font-semibold rounded-[4px] w-[140px] text-[#FFF] h-[48px]'>
                Contact Me
            </button>

            <div className='lg:self-end'>

                <h1 className='text-[#FFF] my-2 text-[18px] font-normal'>Follow Me</h1>

               <div className="flex justify-between gap-5">

              <div className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
              <Linkedin className='text-[#FFF]'/>

              </div>
              <div className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
              <Facebook className='text-[#FFF]'/>

              </div>
              <div className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
              <Instagram className='text-[#FFF]'/>

              </div>
              <div className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">

                <div className="relative w-[29px] text-[#FFF] font-bold text-[20px] flex justify-center items-center h-[20px]">
               Be
                </div>
             

              </div>

               </div>

            </div>

        </div>
    )
}

export default Hero