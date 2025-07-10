'use client';

import React, { useState, useEffect, JSX } from 'react';
import { 
  FaCode, FaServer, FaDatabase, FaTools, FaMobile, 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, FaAws, FaMobileAlt 
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGraphql, SiJest, SiFlutter, SiApple, SiAndroid, SiCypress
} from 'react-icons/si';

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
  const [activeCategory, setActiveCategory] = useState<keyof SkillsData>('frontend');

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
      { name: 'Bootstrap', level: 75 },
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
    'React.Js': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <FaJsSquare />,
    'HTML5': <FaHtml5 />,
    'CSS3': <FaCss3Alt />,
    'Tailwind CSS': <SiTailwindcss />,
    'Node.js': <FaNodeJs />,
    'Express': <FaJsSquare />,
    'ASP DotNet': <FaTools />, // No exact icon, fallback
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'Firebase': <FaTools />, // No exact icon, fallback
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'Jest': <SiJest />,
    'VS Code': <FaCode />,
    'React Native': <FaMobileAlt />,
    'Flutter': <SiFlutter />,
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: <FaCode /> },
    { key: 'backend', label: 'Backend', icon: <FaServer /> },
    { key: 'database', label: 'Database', icon: <FaDatabase /> },
    { key: 'tools', label: 'Tools', icon: <FaTools /> },
    { key: 'mobile', label: 'Mobile', icon: <FaMobile /> },
  ] as const;

  return (
    <section
      id="skills"
      className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white min-h-screen pb-48 relative transition-all duration-800 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-32">
        <h2 className="text-4xl text-[#64ffda] text-center mb-4 relative after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#64ffda]">
          My Skills
        </h2>
        <p className="text-center text-[#8892b0] max-w-xl mx-auto mb-12 text-lg leading-relaxed">
          Here's a comprehensive overview of my technical skills and expertise.
        </p>

        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[#64ffda] border border-[#64ffda33]
                transition-transform duration-300
                ${activeCategory === key
                  ? 'bg-[#64ffda] text-black border-[#64ffda]'
                  : 'hover:bg-[#64ffda33] hover:-translate-y-1'}
              `}
            >
              <span className="text-xl">{icon}</span>
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills[activeCategory].map(({ name, level }, i) => (
            <div
              key={i}
              className="bg-[#1a1a2ecc] border border-[#64ffda1a] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(100,255,218,0.1)] hover:border-[#64ffda4d]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#64ffda] text-lg font-semibold">{name}</h3>
                <span className="text-[#8892b0] text-sm">{level}%</span>
              </div>
              <div className="w-full h-2 bg-[#64ffda1a] rounded overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#64ffda] to-[#00ff9d] rounded transition-all duration-1000 ease-in-out"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Icons Marquee */}
      <div className="w-full overflow-hidden border-t border-[#64ffda1a] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] mt-20">
        <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-12 py-4">
          {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map(({ name }, idx) => (
            <span
              key={idx}
              title={name}
             className="text-3xl md:text-4xl cursor-default select-none transition-transform duration-300 hover:scale-125 flex items-center justify-center filter grayscale hover:grayscale-0 hover:text-[#64ffda]"

            >
              {skillIconMap[name] || <FaTools />}
            </span>
          ))}
        </div>

        {/* Inline Keyframes (inside style tag) */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

    </section>
  );
};

export default Skills;
