// import Hero from "./components/containers/Hero";
import Header from "./components/header/Header";
import Hero from "./components/containers/Hero";
import About from "./pages/About";
import Instructor from "./components/containers/Instructor";
import Features from "./pages/Features";
import Sessions from "./pages/Sessions";
import Testimonials from "./pages/Testimonials";
import Download from "./pages/Download";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-primaryWhite">
      <Header />
      <Hero />
      <About />
      <Instructor />
      <Features />
      <Sessions />
      <Testimonials />
      <Contact />
      <Download />
      <Footer />
    </div>
  );
};

export default App;
