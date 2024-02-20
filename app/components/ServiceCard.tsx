import React from 'react'
import Image from 'next/image'


import { CustomServiceCardProps } from '@/constants/index'

const ServiceCard=({title,icon,desc}:CustomServiceCardProps)=>(
  
    <div className=" card border-[0.5px] border-[#929292] rounded-[8px]  p-4">
    
     <Image className='my-2 mx-auto' src={`${icon}`} alt='kdk' width={60} height={60} />

      <h1 className='text-lg font-bold text-center my-2 text-[#E4E4E4]'>{title}</h1>
      <p className=' text-sm font-md text-center my-2'>{desc}</p>

     


    </div>
    
    
    
    
    
    
)
export default ServiceCard