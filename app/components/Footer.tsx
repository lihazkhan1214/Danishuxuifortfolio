import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { navlinks } from '@/constants';

function Footer() {
    return (
   <>
            <div className="bg-[#000]">


                <div className="flex flex-col gap-5 items-center">


                    <div className="relative w-[182px]  h-[92px]" >

                        <Image src="/images/logo.png" alt='not found' fill />


                    </div>






                    <div className="   flex sm:space-x-12 max-sm:flex-col items-center ">
                        {navlinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                passHref
                                className={`text-[#FFF] text-[18px] hover:text-[#018AFF] font-[500] cursor-pointer `}

                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>










                    <div className=" mb-3 flex justify-between gap-5">

                        <Linkedin className='text-[#FFF]' />


                        <Facebook className='text-[#FFF]' />


                        <Instagram className='text-[#FFF]' />



                        <div className="relative w-[29px] text-[#FFF] font-bold text-[20px] flex justify-center items-center h-[20px]">
                            Be
                        </div>


                    </div>
                    </div>

                    <hr className='py-3 border-t-1  border-[#FFF] border-opacity-25' />

                    <p className='text-[#FFF] text-opacity-25 text-sm text-center'>Copyright © 2024. Junaid hassan All rights reserved.</p>


                </div>



            </>
            )
}

            export default Footer