
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="small-title">HELLO, I'M</p>

        <h1>
          Jyotsana <span>Shahu</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="hero-text">
          BCA graduate and aspiring Java Full Stack Developer.
          I enjoy building clean, useful and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work →
          </a>

          <a href="/resume.pdf" className="secondary-btn" download>
            Download Resume
          </a>
        </div>

        <div className="quick-info">
          <span>Java</span>
          <span>React</span>
          <span>SQL</span>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-circle">
          <img src={profile} alt="Jyotsana Shahu" />
        </div>

        <div className="floating-card">
          <strong>Java Developer</strong>
          <small>Building & Learning</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;

