import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container nav-container">

        <h2 className="logo">Kevin Patel</h2>

        <nav>
          <ul className="nav-links">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>
        </nav>

        <div className="social-icons">

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;