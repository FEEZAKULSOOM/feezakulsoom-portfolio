import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

/**
 * Main App Component
 * Root component that assembles all sections of the portfolio
 * Layout follows natural reading flow: Nav → Home → About → Projects → Contact
 */
function App() {
  return (
    <>
      {/* Fixed navigation bar - persistent across all sections */}
      <Nav />

      {/* Main content sections in sequential order */}
      <Home />        {/* Hero section with introduction and profile */}
      <About />       {/* Personal information, education, and skills */}
      <Projects />    {/* Project showcase with horizontal slider */}
      <Contact />     {/* Contact form and illustration */}
    </>
  );
}

export default App;