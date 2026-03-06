import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import SecondaryBTN from '../assets/components/shared/secondaryBTN';
import { usePortfolioData } from '../contexts/PortfolioContext';
export default function Projects(){
    const { projects } = usePortfolioData();
    return (
        <>
            <Header/>
            <section className="bg-transparent w-full bg-brand-darkBlue py-16 px-6 relative overflow-x-hidden overflow-y-hidden">
                  <div className="max-w-container mx-auto flex flex-col gap-12">
            
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-yellow">
                      All Projects
                    </h2>
            
                    {/* Projects Grid */}
                    <div className="grid gap-8 md:grid-cols-2">
                      {projects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-brand-lightGray/10 rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300"
                        >
                          {/* Image */}
                          <div className="w-full h-48 overflow-hidden">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-90"
                            />
                          </div>
            
                          {/* Content */}
                          <div className="relative p-6 flex flex-col flex-1 justify-between transition-colors duration-300">
                            
                            {/* Overlay matching WhatIDo style */}
                            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl z-0" />
            
                            <div className="relative z-10 flex flex-col flex-1 justify-between">
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold text-brand-yellow  transition-colors">
                                  {project.title}
                                </h3>
            
                                <p className="text-sm md:text-base mb-6  transition-colors">
                                  {project.description}
                                </p>
                              </div>
            
                              <div className="pt-4">
                                <SecondaryBTN
                                  href={ project.id }
                                  text="Explore Project"
                                />
                              </div>
                            </div>
            
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
            
                  {/* Stars / Gotham Atmosphere */}
                 
                </section>
              
            <Footer/>
        </>
    )
}