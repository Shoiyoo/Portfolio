'use client';

import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Carousel from "./components/CarouselAffiche";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://i.postimg.cc/2SNRfZky/cyberpunk.gif')] bg-fixed bg-cover bg-center bg-no-repeat">
      <Navbar />
      <main className="flex-grow">
        <Profil />
        <Skills />
        <Resume />
        <Carousel />
        <Contact />
      </main>
    </div>
  );
}
