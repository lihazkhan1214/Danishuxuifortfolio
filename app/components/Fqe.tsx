import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Item } from '@radix-ui/react-accordion';

const accordian = [{
    q: "What services do you provide?",
    a: "As an accountant, I provide a wide range of services including tax preparation,bookkeeping,financial.",
    item: "one"
},
{
    q: "Can you help me with financial planning?",
    a: "As an accountant, I provide a wide range of services including tax preparation,bookkeeping,financial.",
    item: "two"
},
{
    q: "How often do I need to meet with you?",
    a: "As an accountant, I provide a wide range of services including tax preparation,bookkeeping,financial.",
    item: "three"
},
{
    q: "How do I choose the UI UX Designing ?",
    a: "As an accountant, I provide a wide range of services including tax preparation,bookkeeping,financial.",
    item: "four"
},
{
    q: "How much do you charge for your services?",
    a: "As an accountant, I provide a wide range of services including tax preparation,bookkeeping,financial.",
    item: "five"
}

];



function Fqe() {
    return (
        <>
            <div className="bg-[#000000] padding-x py-10">
                <div className="  bg-[#18191A] bg-opacity-25     padding-x py-10 ">
                    <h1 className="text-[#FFF] text-center text-[18px] md:text-[36px] font-bold">Frequently Asked
                        Questions (FAQ's)</h1>
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

export default Fqe