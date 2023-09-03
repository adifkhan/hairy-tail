"use client";

import About from "./components/homecomponents/About";
import Banner from "./components/homecomponents/Banner";
import Features from "./components/homecomponents/Features";
import Methodology from "./components/homecomponents/Methodology";
import Testimonials from "./components/homecomponents/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Methodology />
      <About />
      <Testimonials />
    </main>
  );
}
