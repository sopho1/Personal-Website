'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="brand-link">
                            <img src="./images/personal.png" alt="Sophonias Logo" className="brand-logo" />
                            <span className='brand-name'>ophonias</span>
                        </div>
                        <p className="brand-description">
                            Creating digital experiences that matter
                        </p>
                        <p className="brand-description">
                            © {new Date().getFullYear()} Sophonias. All rights reserved.
                        </p>
                    </div>
                    <div className="footer-text">
                    Made with ❤️ using Next.js
                    <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Back to top
                    </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
