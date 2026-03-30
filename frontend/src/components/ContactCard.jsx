import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/contactCard.css";

export default function ContactCard() {
  return (
    <div className="contact-card">
      <h3 className="card-title">Get in Touch</h3>

      <a href="tel:+919526121657" className="card-link">
        <FaPhone />
        <span>+91 9526121657</span>
      </a>

      <a href="mailto:jiksonmathew14@gmail.com" className="card-link">
        <FaEnvelope />
        <span>jiksonmathew14@gmail.com</span>
      </a>

      <a
        href="https://facebook.com/gxnmtw"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <FaFacebook />
        <span>Facebook</span>
      </a>

      <a
        href="https://linkedin.com/in/jiksonmathew"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://github.com/jiksonmathew"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>
    </div>
  );
}
