"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#FFF] padding-x mx-auto flex justify-between items-center h-[80px] py-2 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image src="/assets/fimages/logo.png" alt='Logo' width={100} height={100} />
        </Link>
      </div>

      

      {/* Login and Register Buttons */}
      <div className="hidden md:block">
        <button className='bg-[#6B03C1] text-[18px] font-[500] rounded-[4px] w-[120px] text-[#FFF] h-[48px]'>
          Register
        </button>
      </div>

      {/* Hamburger Icon for Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className='w-[25px] h-[25px]' /> : <Menu className='w-[25px] h-[25px]' />}
        </button>
      </div>

      {/* Mobile Menu */}
     
    </nav>
  );
};

export default Navbar;
