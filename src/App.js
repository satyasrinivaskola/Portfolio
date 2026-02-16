import './App.css';
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import About from './components/About'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        <Contact />
      </header>
    </div>
  );
}

export default App;
