import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.js";
import Projects from "./components/projects.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
