
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JS.</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

