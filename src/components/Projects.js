function Projects() {

  const projects = [
    {
      title: "Gym Management System",
      desc: "Gym management website."
    },
    {
      title: "Weather App",
      desc: "Weather app using API."
    }
  ];

  return (
    <section id="projects" className="section project-section">

      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="project-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;