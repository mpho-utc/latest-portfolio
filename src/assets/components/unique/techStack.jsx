import React from "react";
import SubHeading from "../shared/SubHeading"; 
import stack from '../../images/stack.jpg';
import StackLi from "../shared/stackLi";
import { usePortfolioData } from '../../../contexts/PortfolioContext';

export default function TechStack() {
  const { techStack } = usePortfolioData();

  return (
    <section className="bg-transparent w-full bg-brand-darkBlue text-white py-16 px-6 md:px-0   relative overflow-x-hidden">

      {/* Main container: max width like WhatIDo */}
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 w-full">

        {/* Left: Tech Stack List */}
        <div className="w-full md:flex-1 flex flex-col justify-center">
          <SubHeading 
            heading="MY TECH STACK" 
            text="I build with intention, deciding which route to take depending on a project's primary characteristics. I implement features based on project requirements and the selected stack. Below is a high-level overview of the tech-stack I frequently choose from."
          />
          <ul className="space-y-4 w-full">
            {techStack.map((stackItem, index) => (
              <StackLi 
                img={stackItem.img} 
                title={stackItem.title} 
                description={stackItem.description} 
                key={index} 
              />
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex w-full md:flex-1 justify-end items-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
            <img src={stack} alt="Tech Stack" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

     

    </section>
  );
}
