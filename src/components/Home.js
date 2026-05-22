function Home() {
  return (
    <section id="home" className="home">

      <div className="container home-content">

        <p className="intro">HELLO I'M</p>

        <h1>Kevin Patel</h1>

        <h3>Frontend ReactJS Developer</h3>

        <p className="home-text">
          I create beautiful, responsive and modern web applications
          using ReactJS and frontend technologies.
        </p>

        <div className="home-buttons">

          <button className="btn">
            Download CV
          </button>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;