"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/hero-home";
import Services from "@/components/services";
import Partners from "@/components/partners";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />
      <main className="grow">
        <Hero />
        <Services />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
