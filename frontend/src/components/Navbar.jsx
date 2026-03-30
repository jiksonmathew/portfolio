import "../styles/navbar.css";

export default function Navbar() {
  const links = [
    "home",
    "projects",
    "uiux",
    "certifications",
    "about",
    "contact",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">YourName</div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`}>{l}</a>
            </li>
          ))}
        </ul>

        <div className="mobile-link">
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}
