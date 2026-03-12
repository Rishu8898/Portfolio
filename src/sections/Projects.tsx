{/* eslint-disable react/no-unescaped-entities */}
import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrawUpRight from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card";

const portfolioProjects = [
  {
    company: "Alma Port",
    year: "2024",
    title: "Blockchain-Based Alumni Verification Portal",
    results: [
      { key: 1, title: "Built secure, tamper-proof alumni credential verification using React, Node.js, and Solidity." },
      { key: 2, title: "Implemented keccak256 hashing and smart contracts on Polygon Mumbai to store immutable records." },
      { key: 3, title: "Reduced manual verification time from days to seconds with QR-based instant validation." },
    ],
    link: "https://github.com/Rishu8898/almaport",
    image: darkSaasLandingPage,
  },
  {
    company: "SureScore",
    year: "2024",
    title: "Confidence-Based Quiz Platform",
    results: [
      { key: 1, title: "Developed full-stack quiz platform with group access and confidence-based scoring." },
      { key: 2, title: "Created user and admin dashboards focused on usability and performance." },
      { key: 3, title: "Implemented JWT auth and role-based access for secure test workflows." },
    ],
    link: "https://github.com/rishu8898/SureScore",
    image: lightSaasLandingPage,
  },
  {
    company: "Sales Forecast Regression Model",
    year: "2023",
    title: "ML-Powered Sales Forecasting",
    results: [
      { key: 1, title: "Designed regression-based forecasting using XGBoost and LightGBM." },
      { key: 2, title: "Performed feature engineering and EDA to uncover demand patterns." },
      { key: 3, title: "Tuned models with cross-validation to improve prediction accuracy." },
    ],
    link: "https://github.com/Rishu8898/SalesForecast",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-10">
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Project" description="See how I transformed concepts into engaging digital experiences."/>
      
      <div className="mt-10 md:mt-20 flex flex-col gap-16">
         {portfolioProjects.map((project, projectIndex) => (
          <Card 
            key={project.title}  
            className="pt-8 px-8 md:pt-12 md:px-10
            lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 35}px)`,
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
            <div className="inline-flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                {project.company}
              </span>
            </div>
         
            <h3 className="font-serif text-xl mt-3 md:mt-5 md:text-3xl text-white">
              {project.title}
            </h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li key={result.key} className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6
              rounded-xl font-semibold inline-flex items-center 
              justify-center gap-2 mt-8">
                <span>View on GitHub</span>
                <ArrawUpRight className="size-4"/></button>
            </a>
            </div>
            <div>
            <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0
            lg:absolute lg:h-full lg:w-auto lg:max-w-full"/>
            </div>
            </div>
          </Card>   
         ))}
      </div>
    </div>
  </section>
  );
};
