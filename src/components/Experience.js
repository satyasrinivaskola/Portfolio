import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  return (
   <section id="experience" className="container mt-5">
  <h2 className="text-center mb-4">Experience</h2>

  <motion.div
    className="exp-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h4>React JS Web Developer</h4>
    <p className="role">
      ITC Infotech | Jan 2022 – Mar 2025 | Bengaluru
    </p>

    <p>
      ITC Infotech is a global technology services provider, offering business-friendly
      digital solutions across industries like banking, healthcare, and manufacturing.
    </p>

    <ul className="unorder-list">
      <li>
        Developed and maintained responsive web applications using HTML, CSS, and JavaScript,
        ensuring seamless user experiences.
      </li>
      <li>
        Implemented interactive UI components and optimized performance utilizing ReactJS and
        modern frontend frameworks.
      </li>
      <li>
        I was involved in Intergating API's and enhancing data retrieval
        and application functionality.
      </li>
      <li>
        Worked on debugging and troubleshooting web applications, improving overall efficiency
        and reliability.
      </li>
      <li>
        Hands-on experience with CSS and Bootstrap to improve user accessibility and UI design.
      </li>
      <li>
        Good understanding of backend technologies  NodeJS.
      </li>
      <li>
        Engaged with clients to understand business processes and requirements, delivering
        functional solutions.
      </li>
      <li>
        Created and provided a user manual explaining the overall workflow of the web
        application for easy understanding.
      </li>
      <li>
        Delivered regular updates to clients and implemented feedback to enhance usability and
        performance.
      </li>
    </ul>
  </motion.div>
</section>


  );
}

export default Experience;
