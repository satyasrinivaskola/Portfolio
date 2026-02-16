import { motion } from "framer-motion";
import "./About.css";
import photo from '../Assets/satya.jpg'
function About() {

  return (

    <section id="about" className="container mt-5">
      <h2 className="text-center mb-4">About Me</h2>
 <motion.div
      initial={{ opacity: 0, y: 50 }}   // start state
      animate={{ opacity: 1, y: 0 }}    // end state
      transition={{ duration: 0.5 }}    // animation time
      style={{ backgroundColor:"#1e293b", padding: 20 }}
    >
     <img className="photo"src={photo} alt="Satya"/>
    
        <p className="short-note">
          I am a passionate <strong>Frontend Developer</strong> with hands-on
          experience in building responsive and scalable web applications using
          <strong> React.js, JavaScript, HTML, CSS, and Bootstrap</strong>.
        </p>

        <p className="short-note">
          I have worked on web application
          <strong> Schindler Installation Execution System</strong> where I
          developed component-based UI and integrated frontend with backend
          APIs/microservices.
        </p>

        <p className="short-note">
          I enjoy solving real-world problems, debugging production issues, and
          continuously improving application performance and user experience.
          Currently, I am actively looking for opportunities and available to
          join immediately.
        </p>
     </motion.div>
    </section>
  );
}

export default About;
