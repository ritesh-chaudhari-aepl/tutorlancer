// import Hero from "./components/containers/Hero";
import Header from "./components/header/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Refund from "./pages/termAmdConditions/termAmdConditions/refund";
import PrivatePolocies from "./pages/termAmdConditions/termAmdConditions/privatePolocies";
import Terms from "./pages/termAmdConditions/termAmdConditions/terms";

const App = () => {
  return (
    <div className="bg-primaryWhite">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<PrivatePolocies />} />
        <Route path="/termsandcondition" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
