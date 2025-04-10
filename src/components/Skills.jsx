const Skills = () => (
  <section className="p-5">
    <h2 className="text-center mb-4">Skills</h2>
    <div className="d-flex justify-content-center flex-wrap gap-3">
      {[
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
      ].map((skill) => (
        <span key={skill} className="badge bg-dark p-2">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
