import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;