import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero text-center text-light">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Satya Kola
      </motion.h1>

      <p>Frontend Developer | React | Node.js | Immediate Joiner</p>

      <a href="#projects" className="btn btn-primary m-2">View Projects</a>
      <a href="/resume.pdf" className="btn btn-outline-light m-2">Download Resume</a>
    </section>
  );
}

export default Hero;
