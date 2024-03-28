import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Item } from '@radix-ui/react-accordion';

const accordian = [{
    q: "Do you provide discovery and strategy services?",
    a: " Yes, I do. If you have your product/project idea in a very raw form. I can consult you for a reasonable fee to streamline the whole project to create a better understanding of the project/product.",
    item: "one"
},
{
    q: "What would you deliver?",
    a: "Design Images for Review 2. Fully Layered Source files. I can use the software of choice to create the screens. Softwares I use to design are Figma and Adobe XD.",
    item: "two"
},
{
    q: "Do I get small change or support after project done?",
    a: "Yes we provide full support and small changes for free but if the work is more then it will cost you extra.",
    item: "three"
},
{
    q: "What do you need to get started?",
    a: " Transparent or vector logo files, Your requirements. Brand guidelines, or Color preferences you like. Design inspirations like Wireframes, Sketches, or any other reference material you like.",
    item: "four"
},
{
    q: "What other services do I provide?",
    a: "Here are the other areas that I can help you with, let me know If you needed any of these services: - 📣 Brand Identity - ✏️ Logo Design - 🥑 Illustrations Design - 🖥 UI/UX Design - 👩🏻‍💻 Front-End Development -Backend Development.",
    item: "five"
}
];

function Fqe() {
    return (
        <>
            <div className="bg-[#000000] padding-x py-10">
                <div className="  bg-[#18191A] bg-opacity-25     padding-x py-10 ">
                    <h1 className="text-[#FFF] text-center text-[18px] md:text-[36px] font-bold">Frequently Asked
                        Questions (FAQ&apos;s)</h1>
                    {
                        accordian.map((item, ind) => (

                            <>
                                <Accordion type='single' key={ind} collapsible>
                                    <AccordionItem className='border-[0.5px] border-[#FFFFFF] border-opacity-10 px-5  mt-5 rounded-[8px]' value={item.item}>
                                        <AccordionTrigger className='text-[#FFF]'>{item.q}</AccordionTrigger>
                                        <AccordionContent className='text-[#FFF]'>
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Fqe;
