'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './Hero.css'; 

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "🌟 Digital Alchemist",
            description: "Turning raw ideas into gold by weaving technology with creativity, crafting experiences that are both magical and functional.",
            icon: "💻"
        },
        {
            title: "🧠 Code Whisperer",
            description: "Decoding the complexities of the digital world, I transform abstract challenges into harmonious, elegant code that feels like second nature.",
            icon: "🧩"
        },
        {
            title: "🚀 Tech Visionary",
            description: "Relentlessly pushing boundaries, constantly exploring the next frontier of technology to redefine what's possible in the digital world.",
            icon: "📚"
        },
        {
            title: "🌍 Collaborative Architect",
            description: "Fusing the power of diverse minds to build innovative, impactful solutions — because the best ideas are born from collective genius.",
            icon: "🤝"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const head = document.getElementById('robot-head');
      
        const handleMouseMove = (e: MouseEvent) => {
          if (!head) return;
      
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 30;
      
          head.setAttribute('transform', `translate(${x}, ${y})`);
        };
      
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
      

    const items = [
        {
            title: "Frontend Development",
            description: "Crafting user-centric, responsive, and visually appealing web interfaces using modern technologies.",
            icon: "💻",
            color: "#64ffda"
        },
        {
          title: "UI/UX Design",
          description: "Creating beautiful and intuitive user experiences that delight users and drive engagement.",
          icon: "🎨",
          color: "#ff6b6b"
        },
        {
          title: "Problem Solving",
          description: "Tackling complex challenges with elegant solutions.",
          icon: "🧩",
          color: "#8892b0"
        },
        {
          title: "Performance Optimization",
          description: "Fine-tuning every detail to ensure blazing-fast load times and smooth interactions.",
          icon: "⚡",
          color: "#64ffda"
        },
        {
          title: "Clean Code",
          description: "Architecting codebases that are easy to read, extend, and maintain.",
          icon: "✨",
          color: "#ff6b6b"
        },
        {
          title: "Continuous Learning",
          description: "Always exploring new technologies and best practices.",
          icon: "📚",
          color: "#8892b0"
        }
      ];
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      };

    const portfolioItems = [
        {
            title: "Years of Experience",
            value: "3+",
            description: "Building modern web applications",
            angle: 0
        },
        {
            title: "Projects Completed",
            value: "10+",
            description: "Across various industries",
            angle: 120
        },
        {
            title: "Technologies",
            value: "10+",
            description: "In my development stack",
            angle: 240
        }
    ];

    return (
        <>
        <section className="hero" id='hero'>
            <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                <div className="carousel-container">
                    {slides.map((slide, index) => (
                        <div 
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="slide-content">
                                <span className="slide-icon">{slide.icon}</span>
                                <h1 className="hero-title">
                                    <span className="name">{slide.title}</span>
                                </h1>
                                <p className="hero-description">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="carousel-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
                <div className="image-container">
                    <Image
                        src="/images/Ghibili-1.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="profile-image"
                        priority
                        style={{
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                    />
                </div>
                <div className="robot">
                <svg
                viewBox="0 0 200 200"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', top: 0, left: 600, pointerEvents: 'none' }}
                >
                <rect x="50" y="100" width="100" height="80" rx="10" ry="10" fill="#888" />
                <g id="robot-head">
                    <rect x="60" y="40" width="80" height="50" rx="8" ry="8" fill="#666" />

                    <circle className='robot-eye' cx="80" cy="65" r="5" fill='#fff'/>
                    <circle cx="80" cy="65" r="5" fill="#000">
                    <animate 
                            attributeName="r" 
                            values="0;5;0" 
                            dur="3s" 
                            repeatCount="indefinite"
                            keyTimes="0;0.5;1"
                        />
                         <animate
                        attributeName="r"
                        values="0;5;0"  /* Eyelid radius expands and shrinks */
                        dur="3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        />
                    </circle>
                    <circle className='robot-eye' cx="120" cy="65" r="5" fill='#fff' />
                    <circle cx="120" cy="65" r="5" fill="#000">
                    <animate 
                            attributeName="r" 
                            values="0;5;0" 
                            dur="3s" 
                            repeatCount="indefinite"
                            keyTimes="0;0.5;1"
                        />
                         <animate
                        attributeName="r"
                        values="0;5;0"  /* Eyelid radius expands and shrinks */
                        dur="3s"
                        repeatCount="indefinite"
                        keyTimes="0;0.5;1"
                        />
                    </circle>
                    <line x1="100" y1="40" x2="100" y2="20" stroke="#555" strokeWidth="3" />
                    <circle cx="100" cy="17" r="5" fill="#ff6b6b" />
                </g>
                </svg>
                </div>

            </div>

            {/* Services Section */}
            
        </section>

        <section className="featured-section">
          <motion.div
          className="featured-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="section-title">My Expertise</h2>
          <div className="cards-container">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="featured-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </section>

        <section className="portfolio-highlights">
            <div className="portfolio-header">
                <h2 className="portfolio-title">My Journey in Numbers</h2>
                <p className="portfolio-subtitle">Experience, Projects, and Technologies</p>
            </div>
            <div className="portfolio-container">
                {portfolioItems.map((item, index) => (
                    <div key={index} className={`portfolio-highlight highlight-${index + 1}`}>
                        <div className="highlight-content">
                            <div className="highlight-value">{item.value}</div>
                            <div className="highlight-title">{item.title}</div>
                            <div className="highlight-description">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="tech-showcase">
            <div className="tech-content">
                <div className="tech-text">
                    <h2 className="tech-title">My Favorite Tech Stack</h2>
                    <p className="tech-description">Building modern web applications with</p>
                </div>
                <div className="react-logo-container">
                    <div className="react-logo">
                        <img src="./images/React-logo.png" alt='l' />
                    </div>
                    <h3 className="react-text">React</h3>
                </div>
                <div className="tech-features">
                    <div className="feature">
                        <span className="feature-icon">⚡</span>
                        <span className="feature-text">Fast & Efficient</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">🔄</span>
                        <span className="feature-text">Reusable Components</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">🌐</span>
                        <span className="feature-text">Cross-Platform</span>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Hero;
// This is a simple hero section component that displays a welcome message and a button.