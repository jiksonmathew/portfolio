import profilePic from "../assets/jiksonphoto.png";

const Hero = () => (
  <section className="text-center p-5 bg-dark text-white">
    <img
      src={profilePic}
      alt="Jikson Mathew"
      className="rounded-circle mb-4"
      style={{
        width: "150px",
        height: "150px",
        objectFit: "cover",
        border: "4px solid #f1c40f",
      }}
    />
    <h1 className="display-4 fw-bold">Hi, I'm JIKSON MATHEW</h1>
    <h3 className="mb-4">MERN Stack Developer</h3>
    <a href="#contact" className="btn btn-warning btn-lg m-2">
      Hire Me
    </a>
    <a href="/resume.pdf" className="btn btn-outline-light btn-lg m-2">
      Download Resume
    </a>
  </section>
);

export default Hero;
