import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "About": return <About />;
      case "Skills": return <Skills />;
      case "Projects": return <Projects />;
      case "Experience": return <Experience />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="bg-darkbg">
      <Navbar currentPage={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
