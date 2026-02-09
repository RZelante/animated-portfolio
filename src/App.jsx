import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";


import Services from "./components/portfolio/Services";
import Skills from "./components/services/Skills";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="HOMEPAGE">
        <Navbar />
        <Hero />
      </section>

      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      
      <section id="PORTFOLIO">
        <Skills />
      </section>

      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}

      <Services />

      <section id="CONTACT">
        <Contact />
      </section>
    </div>
  );
};

export default App;
