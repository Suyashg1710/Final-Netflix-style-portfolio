import React from "react";
import "./Skillsnew.css";

import {
  FaPenFancy,
  FaBullhorn,
  FaLightbulb,
  FaGlobe,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

const iconMap: { [key: string]: JSX.Element } = {
  FaPenFancy: <FaPenFancy />,
  FaBullhorn: <FaBullhorn />,
  FaLightbulb: <FaLightbulb />,
  FaGlobe: <FaGlobe />,
  FaTools: <FaTools />,
  FaChartLine: <FaChartLine />,
};

const Skillsnew: React.FC = () => {
  const skillsData = [
    {
      category: "Creative Strategy",
      skills: [
        { name: "Copywriting", icon: "FaPenFancy" },
        { name: "Script writing", icon: "FaPenFancy" },
        { name: "Concepting", icon: "FaLightbulb" },
        { name: "Branding", icon: "FaBullhorn" },
        { name: "Storytelling", icon: "FaPenFancy" },
        { name: "Creative Strategy", icon: "FaChartLine" },
      ],
    },
    {
      category: "Marketing & Campaigns",
      skills: [
        { name: "Campaign Development", icon: "FaBullhorn" },
        { name: "Social Media campaigns", icon: "FaBullhorn" },
        { name: "Digital Marketing", icon: "FaChartLine" },
        { name: "Finding insights", icon: "FaLightbulb" },
        { name: "Client Presentations", icon: "FaBullhorn" },
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Problem solving", icon: "FaLightbulb" },
        { name: "Research", icon: "FaLightbulb" },
        { name: "Leadership", icon: "FaChartLine" },
      ],
    },
    {
      category: "Technical Tools",
      skills: [
        { name: "Adobe Suite", icon: "FaTools" },
        { name: "Microsoft Suite", icon: "FaTools" },
        { name: "PowerPoint", icon: "FaTools" },
        { name: "AI production tools", icon: "FaTools" },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "English (Native)", icon: "FaGlobe" },
        { name: "Hindi (Native)", icon: "FaGlobe" },
        { name: "German (Learning)", icon: "FaGlobe" },
      ],
    },
  ];

  const skillsByCategory = skillsData.reduce((acc: any, categoryData: any) => {
    acc[categoryData.category] = categoryData.skills;
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div className="skill-card">
              <div className="icon">{iconMap[skill.icon] || <FaPenFancy />}</div>
              <h3 className="skill-name">
                <span className="skill-text">{skill.name}</span>
              </h3>
            </div>
            
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skillsnew;
