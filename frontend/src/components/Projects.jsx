import { motion } from "framer-motion";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <img src="/jm_cart.png" alt="JM_CART" />

          <h3>JM_CART</h3>

          <div className="project-links">
            <a
              href="https://jm-cart.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/jiksonmathew/JM_Cart"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
