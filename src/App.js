
import './App.css';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Nav1 from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav1/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
