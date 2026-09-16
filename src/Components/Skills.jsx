
function Skills() {
  const skills = [
    {
      title: "Java",
      text: "Core Java, OOPs, Collections & basic JDBC"
    },
    {
      title: "Frontend",
      text: "HTML, CSS, JavaScript & React"
    },
    {
      title: "Database",
      text: "SQL, MySQL & basic database concepts"
    },
    {
      title: "Tools",
      text: "Git, GitHub, VS Code & Eclipse"
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="section-title">
        <p>WHAT I WORK WITH</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-number">0{skills.indexOf(skill) + 1}</div>

            <h3>{skill.title}</h3>

            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

