import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Footer from "./Components/Footer";
import Map from "./Components/Map";

const App = () => {
  return (
    <div className="min-h-screen w-full font-Asiana bg-primary relative">
      <Header />
      <Hero />
      <About />
      <Map />
      <Token />
      <Footer />
    </div>
  );
};

export default App;
