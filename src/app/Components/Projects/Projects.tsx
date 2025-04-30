'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Money Transfer Platform",
      description: "A full-stack application enabling users to securely transfer money between each other, with admin and user roles.",
      shortDescription: "Built with HTML, Node.js, and PostgreSQL",
      image: "./images/money.svg",
      technologies: ["HTML", "Node.js", "PostgreSQL", "CSS"],
      features: [
          "User roles: Admin and Normal Users",
          "Secure user authentication and authorization",
          "Money transfer functionality between users",
          "Transaction history tracking",
          "Responsive and user-friendly interface"
      ],
      githubLink: "https://github.com/sopho1/Finance-Management-App"
    },
    {
      title: "Habit Tracker App",
      description: "A responsive web application to help users build and maintain daily habits with progress tracking and reminders.",
      shortDescription: "Built with React.js and Firebase",
      image: "./images/Habit-tracker-img.png", 
      technologies: ["React.js", "Firebase", "JavaScript", "Tailwind CSS"],
      features: [
          "User authentication and personalized dashboards",
          "Create, edit, and delete habits",
          "Daily habit completion tracking",
          "Real-time data synchronization with Firebase",
          "Responsive mobile-friendly design"
      ],
      githubLink: "https://github.com/sopho1/Habit-Tracker-App"
    },
    {
      title: "Authentication System",
      description: "A secure and user-friendly authentication system that allows users to sign up, log in, and manage their sessions using Firebase Authentication.",
      shortDescription: "Built with React.js and Firebase",
      image: "./images/auth.png", // Replace with an appropriate image for your auth project
      technologies: ["React.js", "Firebase Authentication", "Tailwind CSS"],
      features: [
          "User registration and login functionality",
          "Secure password handling and validation",
          "Firebase real-time authentication management",
          "Responsive and intuitive UI/UX"
      ],

      githubLink: "https://github.com/sopho1/Authenticator-App-using-Firebase"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website",
      shortDescription: "Built with Next.js and Modern CSS",
      image: "./images/cover.png",
      technologies: ["Next.js", "CSS", "Framer Motion", "EmailJS"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Project showcase",
        "Contact form"
      ],
      githubLink: "https://github.com/sopho1/Personal-Website"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className={`projects ${isVisible ? 'visible' : ''}`} id='projects'>
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-description">
          Here are some of my recent projects. Click on any project to learn more about it.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <button 
                    className="expand-button"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedProject === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                <div className="project-details">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
