import React from "react";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden  text-dark">
      <Hero />
      <Services />
      <Banner/>
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;

