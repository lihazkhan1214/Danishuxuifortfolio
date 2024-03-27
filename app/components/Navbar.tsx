"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Ensure correct import based on Next.js version and project setup
import { navlinks } from '@/constants'; // Ensure this import path matches your project structure
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Use useRouter to access the current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to determine if the link is the current page


  return (
    <nav id='home' className=" scroll-smooth  padding-x mx-auto flex justify-between items-center  h-[80px] py-2 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image src="/images/logo.png" alt='Logo' width={100} height={100} />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 items-center">
        {navlinks.map((item, index) => (
          <Link 
            key={index} 
            href={item.url} 
            passHref
            className={`text-[#FFF]   text-[18px] hover:text-[#018AFF] font-[500] cursor-pointer `} 
            onClick={closeAllMenus}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Login and Register Buttons */}
      <div className="hidden md:block">
        <button className='bg-[#018AFF] text-[18px] font-[500] font-semibold rounded-[4px] w-[140px] text-[#FFF] h-[48px]' onClick={closeAllMenus}>
          Contact Me
        </button>
      </div>

      {/* Hamburger Icon for Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className='w-[25px] text-[#FFF] h-[25px]' /> : <Menu className='w-[25px] text-[#FFF] h-[25px]' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-[#000] shadow-md z-50 md:hidden">
          {navlinks.map((item, index) => (
            <Link 
              key={index} 
              href={item.url} 
              passHref
              className={`block text-[#FFF] p-2 text-[18px] hover:text-[#018AFF] font-[500] cursor-pointer `} 
              onClick={closeAllMenus}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
