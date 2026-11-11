import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/techstack.css';

function TechStack() {
  const categories = [
    {
      name: 'Frontend',
      description: 'Technologies for building responsive interfaces and interactive web experiences.',
      technologies: [
        { name: 'HTML5', icon: 'html5/html5-original.svg' },
        { name: 'CSS3', icon: 'css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
        { name: 'React', icon: 'react/react-original.svg' }
      ]
    },
    {
      name: 'Backend',
      description: 'Technologies for building server-side applications and APIs.',
      technologies: [
        { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'express/express-original.svg' },
        { name: 'REST APIs', icon: null }
      ]
    },
    {
      name: 'Database',
      description: 'Technologies for storing, managing and retrieving application data.',
      technologies: [
        { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
        { name: 'Mongoose', icon: 'mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'mysql/mysql-original.svg' }
      ]
    },
    {
      name: 'Tools',
      description: 'Tools that support my development workflow.',
      technologies: [
        { name: 'Git', icon: 'git/git-original.svg' },
        { name: 'GitHub', icon: 'github/github-original.svg', white: true },
        { name: 'Postman', icon: 'postman/postman-original.svg' },
        { name: 'VS Code', icon: 'vscode/vscode-original.svg' }
      ]
    },
    {
      name: 'Core Concepts',
      description: 'Fundamentals that shape my programming and problem-solving approach.',
      technologies: [
        { name: 'Computer Networks', icon: null },
        { name: 'Operating Systems', icon: null },
        { name: 'Java', icon: 'java/java-original.svg' },
        { name: 'Python', icon: 'python/python-original.svg' },
        { name: 'C', icon: 'c/c-original.svg' },
        { name: 'DSA', icon: null },
        { name: 'OOP', icon: null },
        { name: 'DBMS', icon: null }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  const selectedCategory = categories[activeCategory];

  return (
    <motion.section
      className="techstack"
      id="techstack"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      {/* Heading */}

      <div className="techstack-heading">
        <div>
          <p className="section-tag">
            THE TECHNOLOGY BEHIND MY WORK
          </p>

          <h2>
            Tech <span>Stack.</span>
          </h2>

          <p className="techstack-intro">
            Technologies I use to build modern and scalable applications.
          </p>
        </div>

        <div className="tech-heading-symbol">
          {'</>'}
        </div>
      </div>

      {/* Dashboard */}

      <div className="tech-dashboard">

        {/* Sidebar */}

        <div className="tech-sidebar">

          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`tech-category ${
                activeCategory === index ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <span>{category.name}</span>
              <span className="category-arrow">›</span>
            </button>
          ))}

        </div>

        {/* Main Panel */}

        <div className="tech-main-panel" key={activeCategory}>

          <div className="tech-panel-heading">
            <div>
             

              <h3>{selectedCategory.name}</h3>

              <p className="panel-description">
                {selectedCategory.description}
              </p>
            </div>
          </div>

          <div className="tech-divider"></div>

          {/* Technology Cards */}

          <div className="tech-items">

            {selectedCategory.technologies.map((tech) => (
              <div className="tech-item" key={tech.name}>

                <div className="tech-icon">

                  {tech.icon ? (
                    <img
                      src={
                        tech.white
                          ? 'https://cdn.simpleicons.org/github/FFFFFF'
                          : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`
                      }
                      alt={tech.name}
                    />
                  ) : (
                    <span>
                      {tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}

                </div>

                <p>{tech.name}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default TechStack;