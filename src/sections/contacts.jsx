import '../styles/contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      <div className="contact-heading">
        <p className="section-tag">LET'S CONNECT</p>
        <h2>Find Me <span>Online.</span></h2>
        <p>
          Explore my work, coding journey and professional profiles.
        </p>
      </div>

      <div className="profiles-grid">

        {/* GitHub */}
        <a
          href="https://github.com/adarsh0018912"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src="/images/github.png" alt="GitHub" className="profile-icon" />
          <h3>GitHub</h3>
          <p>Explore my repositories and projects.</p>
          <div>Visit Profile ↗</div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/adarsh-singh-b7827a310/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src="/images/linkdin2.png" alt="LinkedIn" className="profile-icon" />
          <h3>LinkedIn</h3>
          <p>Connect with me professionally.</p>
          <div>Visit Profile ↗</div>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/singh_A_18/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src="/images/leetcode2.jpeg" alt="LeetCode" className="profile-icon" />
          <h3>LeetCode</h3>
          <p>Explore my DSA and problem-solving journey.</p>
          <div>Visit Profile ↗</div>
        </a>

        {/* Codolio */}
        <a
          href="https://codolio.com/profile/adarsh_0018"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src="/images/codolio.jpeg" alt="Codolio" className="profile-icon" />
          <h3>Codolio</h3>
          <p>Check my coding achievements and progress.</p>
          <div>Visit Profile ↗</div>
        </a>

      </div>

  


<div className="contact-bottom">
  <h3>Have an idea? Let's build something.</h3>

  <a
    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=singhadarshsingh461@gmail.com&su=Project%20Inquiry"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get In Touch ↗
  </a>
</div>



    </motion.section>
  );
}

export default Contact;