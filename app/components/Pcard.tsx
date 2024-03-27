import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface LArticleCardProps {
  title: string;

  shortDescription: string;

  picture: string;
}





function Pcard({
  title,


  shortDescription,
  
  picture
}: LArticleCardProps) {


  return (
    <>
      <div className="flex flex-col  justify-between border-[1px] border-[#FFFFFF] bg-[#18191A]  shadow-md shadow-[#bebec0]">
        <div className="relative w-full mx-auto h-[217px]">
          <Image src={picture} alt="not found" fill />
        </div>

        <h1 className="text-[#FFFFFF] px-4 mt-5 text-[24px] font-normal text-justify">
        


          {title}
         
        </h1>

        <p className="text-[18px] mb-5 px-4 text-justify text-pretty break-words  text-[#FFFFFF] font-normal  mt-5 leading-7">
          {shortDescription && shortDescription.slice ? (
            shortDescription.slice(0, 130)
          ) : (
            shortDescription
          )}
          ..
        </p>

       
      </div>
    </>
  );
}

export default Pcard;