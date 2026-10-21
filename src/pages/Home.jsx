import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman";
import Pole from "../components/Pole";
import Tekct from "../components/Tekct";
import Bloki from "../components/Bloki";
import End from "../components/End";
import E from "../components/E";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman">
        <Woman />
      </section>
      <section className="section pole">
        <Pole />
      </section>
      <section className="section Tekct">
        <Tekct />
      </section>
      <section className="section bloki">
        <Bloki />
      </section>
      <section className="section end">
        <End />
      </section>
      <section className="e">
        <E />
      </section>
    </>
  );
};

export default Home;
