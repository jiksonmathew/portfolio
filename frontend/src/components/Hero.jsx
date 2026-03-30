import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/jikson.jpg";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          I am <span>Jikson Mathew</span>
        </h1>

        <TypeAnimation
          sequence={["MERN Stack Developer", 2000, "UI/UX Designer", 2000]}
          wrapper="span"
          repeat={Infinity}
          className="typing"
        />

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">
            Hire Me
          </a>

          <a href="/Jikson_Mathew_Resume.pdf" download className="btn outline">
            Download Resume
          </a>
        </div>
      </div>

      <motion.img
        src={profilePic}
        alt="Profile"
        className="hero-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
