import './projects.css'
function Projects() {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center">Projects</h2>

      <div className="project-card">
        <h4>Schindler Installation Execution System</h4>
        <p className="short-note">Schindler elevators/escalators installation tracking system </p>
        <p className="short-note"> ➤Developed a product catalog web interface to showcase clothing collections, categories, and detailed product information for the Sowch brand, enhancing product presentation and user browsing experience.</p>
      </div>

      <div className="project-card">
        <h4>Sowch(Grace in Every Thread)</h4>
        <p className="short-note">Catalog app for product listing with structured UI.</p>
<p className="short-note">➤Developed a product catalog web interface to showcase clothing collections, categories, and detailed product information for the Sowch brand, enhancing product presentation and user browsing experience</p>
        <a className="btn btn-primary m-4" href="https://sowchgraceineverythead.netlify.app/" >Live</a>
        <a className="btn btn-primary"  href="https://github.com/satyasrinivaskola/Sowch" >GitHub </a>
      </div>

      <div className="project-card">
       <h4>Worthy Price</h4>
        <p className="short-note">  Compare product prices across platforms.</p>
        <p className="short-note">➤Built a web-based MVP application to compare products from multiple platforms and display them on a single page, helping users choose the best option based on their needs. Currently enhancing features and functionality.</p>
        <a className="btn btn-primary m-4" href="https://worthyprice.netlify.app/" >Live</a>
        <a className="btn btn-primary " href="https://github.com/satyasrinivaskola/Sowch" >GitHub </a>
      </div>
    </section>
  );
}

export default Projects;
