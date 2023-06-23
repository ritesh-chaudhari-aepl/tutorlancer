// import React from 'react'
import Hero from "../components/containers/Hero";
import About from "./About";
// import Instructor from "./components/containers/Instructor";
import Features from "./Features";
import Sessions from "./Sessions";
// import Testimonials from "./Testimonials";
import Download from "./Download";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Instructor /> */}
      <Features />
      <Sessions />
      {/* <Testimonials /> */}
      <Contact />
      <Download />
    </div>
  );
};

export default Home;
