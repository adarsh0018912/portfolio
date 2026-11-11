import '../styles/about.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      <div className="about-heading">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About Me<span>.</span></h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>
            Turning curiosity into code
            and ideas into reality.
          </h3>

          <p>
            I'm a Full Stack Web Developer interested in
            building modern and scalable web applications.
            I enjoy working across the frontend and backend,
            understanding how systems work, and solving
            challenging programming problems.
          </p>

          <p>
            Currently focused on strengthening my development
            skills, exploring new technologies, and building
            projects that solve real-world problems.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-item">
            <span>EDUCATION</span>
            <h4>B.Tech — Information Technology</h4>
            <p>GL Bajaj Institute of Technology and Management</p>
          </div>

          <div className="detail-item">
            <span>DEVELOPMENT</span>
            <h4>MERN Stack</h4>
            <p>React · Node.js · Express · MongoDB</p>
          </div>

          <div className="detail-item">
            <span>FOCUS</span>
            <h4>Full Stack Engineering</h4>
            <p>Problem Solving · Backend · Web Development</p>
          </div>
        </div>

      </div>

    </motion.section>
  );
}

export default About;