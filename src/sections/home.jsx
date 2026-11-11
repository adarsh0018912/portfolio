import '../styles/home.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Home() {
  const homeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ['start start', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="home" id="home" ref={homeRef}>

      <motion.div
        className="home-content"
        style={{ y: textY }}
      >
        <p className="home-tag">
         AI FULL STACK WEB DEVELOPER
        </p>

        <h1>
          Adarsh
          <br />
          Kumar Singh
        </h1>

        <p className="home-description">
          I turn ideas into scalable digital experiences.
          Full-stack developer crafting modern web applications,
          building robust backend systems, and solving problems
          one commit at a time.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="home-image"
        style={{ y: imageY, opacity: imageOpacity }}
      >
        <img
          src="/images/image2.png"
          alt="Adarsh Kumar Singh"
        />
      </motion.div>

      <div className="home-bottom">
        <span>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</span>
      </div>

    </section>
  );
}

export default Home;