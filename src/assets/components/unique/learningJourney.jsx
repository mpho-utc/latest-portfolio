import React from "react";
import SubHeading from "../shared/SubHeading";
import JourneyLi from "../shared/journeyLI";
import learning from '../../images/learning.jpg';
import { usePortfolioData } from '../../../contexts/PortfolioContext';

export default function LearningJourney() {
  const { journey } = usePortfolioData();
  const journeyData = journey;

  return (
    <section className="bg-transparent w-full bg-brand-darkBlue text-white py-16 px-6 md:px-0 relative overflow-x-hidden">
      <div className="max-w-container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">

        {/* Left: Text + Timeline */}
        <div className="w-full md:flex-1 flex flex-col">
          <SubHeading 
            heading="Discover My Learning Journey" 
            text="From curious computer science student to failures, and finding my passion in web development,
            below timeframe outline the trajectory of my learning journey"
          />
          
          <ul className="mt-8 space-y-4 w-full">
            {journeyData.map((journey, index) => (
              <JourneyLi 
                key={index} 
                course={journey.title} 
                institution={journey.institution} 
                timeframe={journey.timeframe} 
              />
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end items-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl border-2 border-brand-yellow shadow-xl overflow-hidden">
            <img 
              src={learning} 
              alt="Learning Journey" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </div>

      
    </section>
  );
}
