
import './App.css';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
