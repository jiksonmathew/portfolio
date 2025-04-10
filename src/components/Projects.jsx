const projects = [
  {
    name: "Todo App",
    desc: "A MERN stack todo app with JWT auth, soft delete, and role-based access.",
    tech: "React, Node.js, Express, MongoDB",
    demo: "https://your-demo-link.com",
    code: "https://github.com/jikson/todo-app",
  },
  {
    name: "User Management System",
    desc: "A MERN system for managing users with admin and user roles.",
    tech: "MERN, Bootstrap, JWT",
    demo: "https://your-demo-link.com",
    code: "https://github.com/jikson/user-management",
  },
];

const Projects = () => (
  <section className="p-5 bg-light">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row">
      {projects.map((proj, i) => (
        <div className="col-md-6 mb-3" key={i}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{proj.name}</h5>
              <p className="card-text">{proj.desc}</p>
              <p className="text-muted">{proj.tech}</p>
              <a href={proj.demo} className="btn btn-sm btn-warning m-1">
                Live
              </a>
              <a href={proj.code} className="btn btn-sm btn-outline-dark m-1">
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
