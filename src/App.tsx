import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Working from "./components/Working";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Working />
      <About />
      <Contact />
    </div>
  );
}

export default App;
