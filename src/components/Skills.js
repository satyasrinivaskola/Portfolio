const skills = [
  "React", "JavaScript", "HTML", "CSS",
  "Bootstrap", "Node.js", "SQL", "GitHub","Redux"
];

function Skills() {
  return (
    <section id="skills" className="container mt-5 text-center">
      <h2>Skills</h2>

      <div className="row mt-3">
        {skills.map((s, i) => (
          <div key={i} className="col-md-3 col-6 p-2">
            <div className="skill-card">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
