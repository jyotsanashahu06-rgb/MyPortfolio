import bitebox from "../assets/biteBox.jpg";
import sarabFood from "../assets/sarab.jpg";
import chaloChale from "../assets/jaipur.jpg";
import shopkart from "../assets/goa.jpg";
function Projects() {
  const projects = [
    {
      image: bitebox,
      title: "BiteBox",
      text: "A food ordering website with a clean and modern user interface.",
      tech: "HTML • CSS • JavaScript"
    },
    {
      image: sarabFood,
      title: "Sarab Food",
      text: "A responsive food website created with a simple and attractive design.",
      tech: "HTML • CSS • Bootstrap"
    },
    {
      image: chaloChale,
      title: "ChaloChale",
      text: "A travel website designed to help users explore destinations and travel options.",
      tech: "HTML • CSS • Bootstrap"
    },
    {
      image: shopkart,
      title: "ShopKart",
      text: "A React-based shopping application with products and cart functionality.",
      tech: "React • Vite • JavaScript"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <p className="project-tech">{project.tech}</p>

              <h3>{project.title}</h3>

              <p>{project.text}</p>

              <a href="#contact">View Project →</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

