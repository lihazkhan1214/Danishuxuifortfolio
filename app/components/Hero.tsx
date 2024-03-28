"use client"
import React, { use } from 'react';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Hero() {
  const router=useRouter();
  return (
    <div className='py-10 padding-x hero '>
      <h1 className="hero__title text-center">
        Hi, I&apos;m Danish Ali <span className='text-[#018AFF]'>ui ux</span> <br />
        <span className='text-[#018AFF]'>Expert</span> Designer
      </h1>
      <p className='text-[14px] sm:text-[24px] text-[#FFF] text-center w-[95%] lg:w-[700px]'>
        Creating remarkable digital experiences for more than 4 years as a UX/UI Designer, Innovator, and Collaborator. Together, let&apos;s make something extraordinary! 🌟 Design Arena
      </p>
      <button onClick={()=>router.push("#contact")} className='bg-[#018AFF] text-[18px] font-[500] font-semibold rounded-[4px] w-[140px] text-[#FFF] h-[48px]'>
        Hire Me
      </button>
      <div className='lg:self-end sm:mr-20'>
        <h1 className='text-[#FFF] my-2 text-[18px] font-normal'>Follow Me</h1>
        <div className="flex justify-between gap-5">
          <Link href="https://www.linkedin.com/in/danish-ali-b803b2248" className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
            <Linkedin className='text-[#FFF]' />
          </Link>
          <Link href="https://www.facebook.com/danishveer123" className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
            <Facebook className='text-[#FFF]' />
          </Link>
          <Link href="https://www.instagram.com/danish_uiux_specialist/?hl=en" className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
            <Instagram className='text-[#FFF]' />
          </Link>
          <div className="border-[2px] border-[#AEAEAE] flex justify-center items-center w-[50px] h-[50px]">
            <Link href="https://www.behance.net/danishaliofficial" className="relative w-[29px] text-[#FFF] font-bold text-[20px] flex justify-center items-center h-[20px]">
              Be
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
