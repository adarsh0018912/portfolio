
import Navbar from './components/navbar';
import Home from './sections/home';
import About from './sections/about';
import TechStack from './sections/techstack';
import Projects from './sections/projects';
import Contact from './sections/contacts';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
       <Contact />
    </div>
  );
}

export default App;
