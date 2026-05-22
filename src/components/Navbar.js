function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <h2 className="logo">Portfolio</h2>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;