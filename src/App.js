import Navbar from "./components/navbar.js";
import Projects from "./components/projects.js";

import Down from './Down';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="projects-holder">
        <Projects />
      </div>
      <Down />
    </div>
  );
}

export default App;
