"use client"
import { Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface FormValues {
  firstname: string;
  lastname: string;
  user_email: string;
  phone: string;
  message: string;
}

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const notify = () => toast.success('Thanks for Contact Me');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: FormValues = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      user_email: formData.get('user_email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    emailjs
      .sendForm('service_n1te4oc', 'template_g9w5i1d', form.current, {
        publicKey: 'OngndKd59dAxwxulv',
      })
      .then(() => {
        console.log('SUCCESS!');
        notify();
        form.current?.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div id='contact' className='bg-[#18191A] flex gap-10 items-center max-lg:flex-wrap padding-x py-10'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-[30px] md:text-[60px] lg:w-[500px] text-[#FFFFFF] font-bold'>
          Have Any Project In Mind?
        </h1>
        <p className='text-[14px] md:w-[529px] text-normal text-[#AEAEAE]'>
          If you have a new project in mind, congratulations! Starting a new project can be exciting and rewarding.
          Here are some steps that you can take to get started
        </p>

        <div className='flex flex-wrap gap-10 justify-between'>
          <div className='flex items-center gap-3'>
            <Phone color='#FFFFFF' size={50} />
            <div>
              <p className='text-[#AEAEAE] text-[12px]'>Phone:</p>
              <p className='text-[14px] font-bold text-[#BBC4CC]'>+92308917715</p>
            </div>
          </div>

          <div className='flex items-center justify-center gap-3'>
            <Mail color='#FFFFFF' size={50} />
            <div>
              <p className='text-[#AEAEAE] text-[12px]'>Email:</p>
              <p className='text-[14px] font-bold text-[#BBC4CC]'>veerzadadanyore@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail} className='flex justify-center flex-col gap-10' action=''>
          <div className='flex gap-5'>
            <Input type='text' required name='firstname' className='md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder='First Name' />
            <Input type='text' required name='lastname' className='md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder='Last Name' />
          </div>

          <div className='flex gap-5'>
            <Input type='email' required name='user_email' className='md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder='Email Address' />
            <Input type='text' name='phone' required className='md:w-[300px] h-[50px] text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder='Phone Number' />
          </div>

          <div>
            <Textarea name='message' required className='text-[#FFF] border-[#757575] placeholder:text-[#757575]' placeholder='Write feedback...' />
          </div>

          <button type='submit' className='bg-[#018AFF] text-[18px] p-2 w-[160px] rounded-[4px] text-[#FFF] font-normal'>Submit Now</button>
        </form>
      </div>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </div>
  );
}

export default Contact;
