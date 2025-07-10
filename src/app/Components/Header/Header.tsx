'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? 'bg-[rgba(100,255,218,0.1)] text-[#64ffda]' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`
      bg-[#1a1a2e] text-white px-6 py-4 fixed w-full top-0 z-[1000] 
      transform transition-transform duration-800 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center relative">
        <Link href="#hero" className={`
          flex text-2xl font-bold text-[#64ffda] 
          opacity-0 -translate-x-5 transition-all duration-200 
          ${isVisible ? 'opacity-100 translate-x-0' : ''}
        `}>
          <img src="/images/personal.png" alt="logo" width={120} height={70} />
          <p className="mt-4 ml-[-2.5rem] hidden sm:inline">ophonias Endale</p>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`
            md:hidden bg-transparent border-none cursor-pointer p-2 z-[1001]
            flex flex-col gap-[5px] transition-all 
            ${isMenuOpen ? 'open' : ''}
          `}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`
            w-[25px] h-[2px] bg-[#64ffda] transition-all 
            ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}
          `}></span>
          <span className={`
            w-[25px] h-[2px] bg-[#64ffda] transition-all 
            ${isMenuOpen ? 'opacity-0' : ''}
          `}></span>
          <span className={`
            w-[25px] h-[2px] bg-[#64ffda] transition-all 
            ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}
          `}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`
          flex gap-8 list-none p-0 m-0 transition-all duration-300 
          md:flex-row md:static md:translate-x-0 
          ${isMenuOpen ? 'fixed top-0 right-0 w-[70%] h-screen bg-[#1a1a2e] flex-col items-center justify-center gap-8 shadow-[-5px_0_15px_rgba(0,0,0,0.1)]' : 'hidden md:flex'}
        `}>
          {[
            { href: '#hero', label: 'Home', delay: 'delay-[300ms]' },
            { href: '#about', label: 'About', delay: 'delay-[400ms]' },
            { href: '#projects', label: 'Projects', delay: 'delay-[500ms]' },
            { href: '#skills', label: 'Skills', delay: 'delay-[600ms]' },
            { href: '#contact', label: 'Contact', delay: 'delay-[700ms]' },
          ].map(({ href, label, delay }, index) => (
            <li key={label}>
              <Link
                href={href}
                className={`
                  text-white no-underline py-2 px-4 rounded-md relative
                  opacity-0 -translate-y-2 transition-all duration-800 ease-in-out
                  hover:text-[#64ffda] hover:before:scale-x-100 
                  before:content-[''] before:absolute before:top-0 before:left-0 
                  before:w-full before:h-full before:bg-white/10 
                  before:scale-x-0 before:origin-right before:transition-transform before:duration-500 
                  before:z-[-1]
                  ${isVisible ? 'opacity-100 translate-y-0' : ''}
                  ${delay} 
                  ${isActive(href)}
                  w-full text-center md:w-auto md:text-left text-lg md:text-base
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
