function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Bootstrap",
    "SQL"
  ];

  return (
    <section id="skills" className="section">

      <div className="container">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;