import { Mail, MailCheck, Phone } from 'lucide-react'
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

function Contact() {
  return (
    <div className='bg-[#18191A]   flex gap-5    items-center max-lg:flex-wrap   padding-x py-10 '>

        <div className="flex flex-col gap-5">
            <h1 className="text-[30px] md:text-[60px] lg:w-[500px] text-[#FFFFFF] font-bold">
            Have Any Project In
Mind?
            </h1>
            <p className="text-[14px] md:w-[529px] text-normal text-[#AEAEAE]">If you have a new project in mind, congratulations! Starting a new project
can be exciting and rewarding. Here are some steps that you can take to
get started</p>


<div className="flex flex-wrap  justify-between">

    <div className="flex items-center gap-3">

        <Phone color='#FFFFFF' size={50}/>

        <div className="">
            <p className="text-[#AEAEAE] text-[12px]">Phone:</p>
         <p className="text-[14px] font-bold text-[#BBC4CC]">+92308917715</p>

        </div>



    </div>



    <div className="flex items-center justify-center gap-3">
       

    <Mail color='#FFFFFF' size={50}/>

<div className="">
    <p className="text-[#AEAEAE] text-[12px]">Phone:</p>
 <p className="text-[14px] font-bold text-[#BBC4CC]">+92308917715</p>

</div>



</div>








</div>



        </div>
        <div className=''>

            <form className='flex  justify-center   flex-col gap-5' action="">

           <div className=" flex  gap-5">

           <Input type="text"  className=' md:w-[300px] h-[50px]  text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder="First Name" />
           <Input type="text"  className=' md:w-[300px] h-[50px]  text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder="Last Name" />


           </div>


           <div className=" flex gap-5">

<Input type="email"  className=' md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder="Email Address" />
<Input type="text"  className=' md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder="Phone Number" />


</div>


<div>


<Textarea className=' text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder="Write feedback..." />
</div>







<button  className='bg-[#018AFF] text-[18px] p-2 w-[160px] rounded-[4px] text-[#FFF] font-normal'>Submit Now</button>

            </form>



        </div>

      
    </div>
  )
}

export default Contact
