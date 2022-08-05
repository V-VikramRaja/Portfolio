import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import "./index.css";
// import { useState } from "react";

function Index() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 5 });
  return (
    <div className="portfolio__main__container__foGrid">
      <div>
        <Navbar />
      </div>
      <div className="portfolio__main__container__index" ref={scrollRef}>
        <Header className="portfolio__main__div" />
        <Services className="portfolio__main__div" />
        <Skills className="portfolio__main__div" />
        <About className="portfolio__main__div" />
        <Projects className="portfolio__main__div" />
        <Contact className="portfolio__main__div" />
        <Footer className="portfolio__main__div" />
      </div>
    </div>
  );
}

export default Index;
