import React, { useState } from "react";
import { usePortfolioData } from '../../../contexts/PortfolioContext';

export default function WhatIDo() {
  const { whatIDo } = usePortfolioData();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-transparent w-full bg-brand-darkBlue text-white py-16 px-4 md:px-0 relative overflow-x-hidden">
      <div className="max-w-container mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Image column — stretched layout, fixed image */}
        <div className="hidden md:flex w-1/2 justify-start items-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
            <img
              src="https://images.hdqwalls.com/download/batman-dark-knight-logo-hk-3840x2160.jpg"
              alt="Batman Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Accordion column — full column width */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-brand-yellow">
            What I Do
          </h2>

          <div className="space-y-4">
            {whatIDo.map(item => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-brand-lightGray/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-xl md:text-2xl font-bold text-brand-yellow hover:bg-brand-yellow/10 transition"
                  >
                    {item.title}
                    <span className="text-2xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <ul className="px-6 pb-6 text-gray-300 space-y-2">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="text-sm md:text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
    </section>
  );
}
