'use client';

import React, { JSX } from 'react';
import { useState, useEffect } from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaMobile } from 'react-icons/fa';
import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaPython,
    FaJava,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaMobileAlt
  } from 'react-icons/fa';
  import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGraphql, SiJest, SiFlutter, SiApple, SiAndroid, SiCypress } from 'react-icons/si';
  
import './Skills.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
  mobile: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills: SkillsData = {
    frontend: [
      { name: 'React.Js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 80 },
      { name: 'ASP DotNet', level: 80 }
    ],
    database: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 90 },
      { name: 'Firebase', level: 85 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'VS Code', level: 95 }
    ],
    mobile: [
      { name: 'React Native', level: 65 },
      { name: 'Flutter', level: 70 }
    ],
  };

  const skillIconMap: { [key: string]: JSX.Element } = {
    'React': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <FaJsSquare />,
    'HTML5': <FaHtml5 />,
    'CSS3': <FaCss3Alt />,
    'Tailwind CSS': <SiTailwindcss />,
    'Node.js': <FaNodeJs />,
    'Express': <FaJsSquare />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'RESTful APIs': <FaTools />,
    'GraphQL': <SiGraphql />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'Redis': <SiRedis />,
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'AWS': <FaAws />,
    'CI/CD': <FaTools />,
    'Jest': <SiJest />,
    'VS Code': <FaCode />,
    'React Native': <FaMobileAlt />,
    'Flutter': <SiFlutter />,
    'iOS Development': <SiApple />,
    'Android Development': <SiAndroid />,
  };
  

  const [activeCategory, setActiveCategory] = useState<keyof SkillsData>('frontend');

  return (
    <section className={`skills ${isVisible ? 'visible' : ''}`} id='skills'>
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-description">
          Here's a comprehensive overview of my technical skills and expertise.
        </p>

        <div className="skills-categories">
          <button
            className={`category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            <FaCode className="category-icon" />
            Frontend
          </button>
          <button
            className={`category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            <FaServer className="category-icon" />
            Backend
          </button>
          <button
            className={`category-btn ${activeCategory === 'database' ? 'active' : ''}`}
            onClick={() => setActiveCategory('database')}
          >
            <FaDatabase className="category-icon" />
            Database
          </button>
          <button
            className={`category-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools')}
          >
            <FaTools className="category-icon" />
            Tools
          </button>
          <button
            className={`category-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            <FaMobile className="category-icon" />
            Mobile
          </button>
        </div>

        <div className="skills-grid">
          {skills[activeCategory].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-icons-marquee">
        <div className="icon-track-wrapper">
          {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, index) => (
            <span key={index} className="skill-icon" title={skill.name}>
              {skillIconMap[skill.name] || <FaTools />}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
