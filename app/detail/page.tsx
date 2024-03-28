import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Twitter, Facebook, Linkedin } from 'lucide-react';
import Footer from '../components/Footer';

const carditems = [{
    title: "Instagram",
    icon: <Instagram color='#FFF' size={100} />,
    link: 'https://www.instagram.com/danish_uiux_specialist/?hl=en'
},
{
    title: "Twitter",
    icon: <Twitter color='#FFF' size={100} />,
    link: '#'
},
{
    title: "Behance",
    icon: "Be",
    link: 'https://www.behance.net/danishaliofficial'
},
{
    title: "Facebook",
    icon: <Facebook color='#FFF' size={100} />,
    link: 'https://www.facebook.com/danishveer123'
},
{
    title: "Linkedin",
    icon: <Linkedin color='#FFF' size={100} />,
    link: 'https://www.linkedin.com/in/danish-ali-b803b2248'
}];

function Page() {
    return (
        <>
            <div className='padding-x mx-auto 2xl:max-w-7xl py-10 bg-[#151515]'>

                <Link href="/" className='bg-[#018AFF] py-3 px-10 rounded-[4px] text-[#FFF] text-[16px] font-normal'>Back</Link>
                <p className="mt-10 text-[#FFF] leading-8 text-justify">
                    &quot;As a seasoned UI/UX designer, I bring a wealth of creativity and expertise to the digital design landscape. With a keen eye for aesthetics and a passion for creating seamless user experiences, I thrive on crafting visually stunning and intuitively functional interfaces. My design approach is user-centric, where I combine in-depth research, empathetic understanding, and the latest design trends to deliver engaging and purposeful solutions. In my role, I collaborate closely with cross-functional teams, translating complex concepts into elegant and user-friendly designs. From wireframing to prototyping and final implementation, I am dedicated to ensuring that every pixel aligns with the overall user journey and business goals. My proficiency in industry-standard design tools, coupled with a commitment to staying abreast of emerging design trends, allows me to deliver designs that not only meet but exceed user expectations. Beyond aesthetics, I am deeply invested in usability testing and data-driven decision-making. I believe in constant iteration and refinement, incorporating user feedback to optimize and enhance the user experience continually. Whether working on mobile apps, websites, or other digital platforms, my goal is to create designs that captivate users, foster brand loyalty, and elevate the overall digital presence. I am excited about the ever-evolving landscape of UI/UX design and am dedicated to pushing the boundaries of creativity while maintaining a laser focus on delivering exceptional user experiences. Feel free to customize this description based on your specific experiences, skills, and preferences.&quot;
                </p>

                <hr className='mt-5' />

                <div className="flex mt-10 items-center justify-center gap-5 flex-wrap">

                    {
                        carditems.map((item, ind) => (
                            <div key={ind} className="border-[1px] p-10 flex flex-col justify-between items-center h-[350px] w-[300px] rounded-[16px] ">
                                <div className="icon text-[#FFF] font-bold text-[50px]">
                                    {item.icon}
                                </div>
                                <h3 className="text-[24px] text-[#FFF]">
                                    {item.title}
                                </h3>
                                <Link href={item.link} className='bg-[#018AFF] text-[16px] text-[#FFF] text-center py-3 w-full rounded-[8px]'>Contact me</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page;
