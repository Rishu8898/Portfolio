 "use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import profilePic from "@/assets/images/profilePic.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

const handleDownloadResume = () => {
  const link = document.createElement("a");
  // Use a relative path so it works with GitHub Pages basePath (/Portfolio)
  link.href = "resume.pdf";
  link.download = "Rishu-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" 
      style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="5s"> 
        <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="5s"> 
        <SparkleIcon className="size-5 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-40} shouldOrbit orbitDuration="34s"> 
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="5s"> 
        <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="5s">
        <StarIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
        <StarIcon className="size-8 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-4} shouldOrbit orbitDuration="42s"> 
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s"> 
        <SparkleIcon className="size-14 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={80} shouldOrbit orbitDuration="46s"> 
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      </div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center">
            <Image
              src={profilePic}
              alt="Rishu smiling in front of a laptop"
              className="size-[200px]"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full mt-4">
              <div className="bg-emerald-400 size-2.5 rounded-full relative">
                <div className="bg-emerald-400 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Available for opportunities</div>
            </div>
          </div>
          <div className="max-w-xl mx-auto mt-6 text-center">
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">
              Crafting{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                thoughtful digital experiences
              </span>{" "}
              with code.
            </h1>
            <p className="mt-4 text-white/60 md:text-lg">
              I&apos;m <span className="text-emerald-300 font-semibold">Rishu</span>, a
              developer blending{" "}
              <span className="text-white font-medium">clean interfaces</span> with{" "}
              <span className="text-white font-medium">smart engineering</span>. From
              React &amp; Next.js frontends to Express backends and ML experiments, I
              love turning ideas into polished, performant products.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-wide text-white/50">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Frontend • Next.js
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Backend • Express
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Machine Learning
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold">Download Resume</span>
            </button>
            <button
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/80 transition-colors"
            >
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
          
        </div>
        
    </div>
  );
};
