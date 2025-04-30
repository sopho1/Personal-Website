'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isVisible ? 'visible' : ''}`}>
      <nav className="nav">
        <Link href="#hero" className="logo"> 
        <img src="/images/personal.png" alt='logo' width={120} height={70}/>    
        <p> ophonias Endale  </p>
         </Link>    
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><Link href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
          <li><Link href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;