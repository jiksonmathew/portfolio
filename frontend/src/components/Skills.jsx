import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} style={{ color: "#f97316" }} /> },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={40} style={{ color: "#3b82f6" }} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={40} style={{ color: "#facc15" }} />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={40} style={{ color: "#a855f7" }} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} style={{ color: "#22c55e" }} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={40} style={{ color: "#d1d5db" }} />,
    },
    { name: "React", icon: <FaReact size={40} style={{ color: "#22d3ee" }} /> },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} style={{ color: "#4ade80" }} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} style={{ color: "#38bdf8" }} />,
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma size={40} style={{ color: "#ec4899" }} />,
    },
    { name: "Git", icon: <FaGitAlt size={40} style={{ color: "#ef4444" }} /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
