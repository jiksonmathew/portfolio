import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I am <span className="highlight-white">Jikson Mathew</span>, a
          passionate <span className="highlight">Full Stack Developer</span>. I
          specialize in building scalable and efficient web applications using
          the{" "}
          <span className="highlight">
            MERN stack (MongoDB, Express.js, React, Node.js)
          </span>
          .
        </p>

        <p className="about-text">
          With a strong foundation in <span className="highlight">React</span>{" "}
          and modern JavaScript, I create interactive and responsive UIs that
          provide seamless user experiences. I enjoy implementing{" "}
          <span className="highlight">RESTful APIs</span>, managing databases,
          and optimizing applications for scalability and performance.
        </p>

        <p className="about-text">
          Beyond coding, I am passionate about{" "}
          <span className="highlight">problem solving</span>, learning new
          technologies, and contributing to open-source projects. My goal is to
          build{" "}
          <span className="highlight">
            robust, maintainable, and scalable solutions
          </span>{" "}
          that help businesses and users thrive in the digital world.
        </p>
      </div>
    </section>
  );
}
