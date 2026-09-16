
function About() {
  return (
    <section className="section about" id="about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-box">
        <div>
          <h3>A little about me</h3>

          <p>
            I am a BCA graduate from Nagpur and currently pursuing
            Java Full Stack Development.
          </p>

          <p>
            I am interested in backend development and enjoy learning
            how websites and applications work behind the scenes.
          </p>

          <p>
            My current focus is improving my Java, SQL, React and
            problem-solving skills while working on practical projects.
          </p>
        </div>

        <div className="about-details">
          <div>
            <span>Education</span>
            <strong>BCA – 2026</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>Java Full Stack</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Nagpur, India</strong>
          </div>

          <div>
            <span>Looking For</span>
            <strong>Fresher Opportunity</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

