import Image from 'next/image';
import DualCarousel from "./Carousel";

const Skills = () => {
    return (
        <section id="projects" className="mt-12 container mx-auto flex flex-col justify-start min-h-screen -mt-120">
        <div className="text-center">
          <h1 className="text-6xl font-bold font-retro text-[#ffffffeb]">Projects</h1>
          <DualCarousel />
        </div>
      </section>
    );
  };
  
  export default Skills;  