'use client';

import { useEffect, useState } from 'react';
import { FaGraduationCap, FaCode, FaBriefcase, FaTasks, FaBrain, FaChartLine, FaRobot } from 'react-icons/fa';
import './About.css';
import { img } from 'framer-motion/client';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      img: './images/aaulogo.png',
      degree: 'Bachelor of Science Degree in Computer Science',
      institution: 'Addis Ababa University',
      year: '2021 - 2024',
      description: 'Graduated with Great Distinction, specializing in Web Development with a strong focus on Frontend Engineering, modern JavaScript frameworks, and user-centric design principles.',
      icon: <FaGraduationCap />
    },
    {
      img: './images/aaulogo.png',
      degree: 'Master of Business Administration (MBA)',
      institution: 'Addis Ababa University',
      year: '2024 - 2027',
      description: 'Focused on modern business management and leadership integrated with modern technology.',
      icon: <FaBrain />
    }
  ];

  const certificates = [
    {
      img: './images/udacity.png',
      title: 'Programming Fundamentals',
      issuer: 'Udacity',
      year: '2024',
      description: 'Built a strong foundation in Website development principles, problem-solving techniques, and modern web development tools.',
      icon: <FaCode />
    },
    {
      img: './images/udacity.png',
      title: 'Artificial Intelligence',
      issuer: 'Udacity',
      year: '2024',
      description: 'Explored key AI concepts including machine learning, neural networks, and intelligent agent design.',
      icon: <FaRobot />
    },
    {
      img: './images/udacity.png',
      title: 'Data Analysis Fundamentals',
      issuer: 'Udacity',
      year: '2024',
      description: 'Mastered essential data analysis skills, including analyzing large datasets, visualization, and statistical techniques using modern tools.',
      icon: <FaChartLine />
  }
  ]
    

  const experience = [
    {
      img: './images/Upwork-Logo.png',
      position: 'Frontend Developer | HTML | CSS | React | Next.js | Responsive Design | Landing Page',
      company: 'Upwork',
      period: 'April 2025 - Present',
      description: 'Frontend developer with a strong focus on building responsive, user-centric websites.',
      achievements: [
        'Converted Figma designs into fully responsive web pages',
        'Built reusable React components for consistent UI development',
        'Implemented mobile-friendly layouts using modern CSS techniques',
        'Delivered clean, maintainable code with attention to detail'
      ],
      icon: <FaCode />
    },
    {
      img: './images/CBE-LOGO.png',
      position: 'System Development and Customization | Frontend Developer | React.js',
      company: 'Commercial Bank of Ethiopia, HEAD OFFICE',
      period: 'November 2024 - Present',
      description: 'Worked on various web projects, focusing on frontend development.',
      achievements: [
        'Developed and maintained large-scale web applications',
        'Collaborated with backend teams to integrate RESTful APIs and enhance system functionalities',
        'Customized internal banking systems to improve user experience and operational efficiency',
        'Implemented responsive design practices, achieving full mobile compatibility across major platforms'
      ],
      icon: <FaBriefcase />
    },
    {
      img: './images/mint.png',
      position: 'Frontend Developer',
      company: 'Ministry of Innovation and Technology',
      period: 'july 2023 - september 2023',
      description: 'Worked on various web projects, focusing on frontend development.',
      achievements: [
        'Built responsive web applications using React and Bootstrap',
        'Optimized application performance and user experience',
        'Collaborated with design team to implement UI/UX improvements'
      ],
      icon: <FaTasks />
    }
  ];

  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I am a passionate Frontend Developer with a strong foundation in computer science
          and a keen eye for creating beautiful, functional web applications.
        </p>

        <div className="education-section">
          <h3 className="section-subtitle">Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">{edu.icon}</div>
                <div className="timeline-content">
                  <img src={edu.img} alt={edu.institution} className="timeline-image" />
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="timeline-institution">{edu.institution}</p>
                  <p className="timeline-year">{edu.year}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-section">
          <h3 className="section-subtitle">Certificates</h3>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-icon">{cert.icon} 
                <img src={cert.img} alt={cert.title} className="certificate-image" /></div>
                <h4 className="certificate-title">{cert.title}</h4>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-year">{cert.year}</p>
                <p className="certificate-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3 className="section-subtitle">Experience</h3>
          <div className="experience-grid">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                   <img src={exp.img} alt={exp.company} className="experience-image" />
                <div className="experience-header">
                  <div className="experience-icon">{exp.icon}</div>
                  <div className="experience-title">
                    <h4 className="experience-position">{exp.position}</h4>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
