import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePortfolioData } from "../contexts/PortfolioContext";

// import githubIcon from "../assets/images/github-sign.png";
// import demoIcon from "../assets/images/link-icon.png"; // replace with your demo icon

export default function Projectpage() {
  const { projects } = usePortfolioData();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (!projects || !id) return;
    const found = projects.find(p => p.id === id);
    setProject(found || null);
  }, [id, projects]);

  const toggle = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  if (!project) {
    return (
      <>
        <Header />
        <div className="bg-transparent py-32 text-center text-gray-400">
          Project not found
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="bg-transparent w-full bg-brand-darkBlue text-white py-20 px-4 md:px-0 relative overflow-x-hidden">
        <div className="max-w-container mx-auto flex flex-col md:flex-row gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* META */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-brand-yellow uppercase tracking-wide mb-2">
              {project.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* LINKS */}
            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-black transition"
                >
                  <img src={'data:image/webp;base64,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'} alt="Demo" className="h-5 w-5" />
                  Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-black transition"
                >
                  <img src={'data:image/webp;base64,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'} alt="GitHub" className="h-5 w-5" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ================= ENGINEERING SECTIONS ================= */}
        <div className="max-w-container mx-auto mt-24 space-y-16">

          {/* WHY */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-4">
              Why This Project Exists
            </h2>

            <div className="bg-brand-lightGray/10 rounded-xl p-6 leading-relaxed text-gray-300">
              {project.problemStatement}
            </div>
          </div>

          {/* ENGINEERING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-4">
              Engineering Methodology
            </h2>

            <div className="bg-brand-lightGray/10 rounded-xl overflow-hidden">

              {/* Accordion Header */}
              <button
                onClick={() => toggle("methodology")}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-bold hover:bg-brand-yellow/10 transition"
              >
                Architecture & Design Decisions
                <span>{openSection === "methodology" ? "−" : "+"}</span>
              </button>

              {openSection === "methodology" && (
                <div className="px-6 pb-6 space-y-6 text-gray-300">

                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Architectural Style
                    </h3>
                    <p>{project.methodology.architecturalStyle}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Patterns Used
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {project.methodology.patternsUsed.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Design Principles
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {project.methodology.designPrinciples.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
