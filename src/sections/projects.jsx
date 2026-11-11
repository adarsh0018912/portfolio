
import '../styles/projects.css';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      <div className="projects-heading">
        <p className="section-tag">WHAT I'VE BUILT</p>
        <h2>Selected <span>Projects.</span></h2>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card">

          <h3>RepoIQ</h3>

          <p>
            An AI-powered documentation generator that analyzes
            code repositories and helps developers understand
            and document their projects.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>AI</span>
          </div>

          <a
            href="https://github.com/adarsh0018912/RepoIQ.git"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ↗
          </a>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <h3>Eventora</h3>

          <p>
            A full-stack event management platform that enables
            users to explore events, manage registrations,
            book tickets and organize event activities through
            dedicated user and admin dashboards.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>

          <a
            href="https://github.com/adarsh0018912/Eventora.git"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ↗
          </a>

        </div>

      </div>

    </motion.section>
  );
}

export default Projects;
