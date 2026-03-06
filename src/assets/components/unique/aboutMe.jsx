import React from "react";
import myImage from '../../images/my-img.png';
import { usePortfolioData } from '../../../contexts/PortfolioContext';
import githubImg from '../../images/github.png';
import linkedinImg from '../../images/linkedin.png';
import mailImg from '../../images/mail.png';

export default function About() {
  const { meta } = usePortfolioData();
  const { owner } = meta;

  return (
    <section className="bg-transparent relative w-full md:min-h-screen bg-brand-darkBlue text-brand-lightGray px-4 md:px-0 py-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">

      {/* LEFT / TEXT SIDE */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center">

        {/* Header — ALWAYS FIRST */}
        <div className="order-1">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-brand-yellow">
            ABOUT ME
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {owner.name.toUpperCase()}
          </h2>
        </div>

        {/* Image — SECOND ON MOBILE */}
        <div className="order-2 md:hidden flex justify-center mb-10">
          <div className="w-64 h-64 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
            <img
              src={myImage}
              alt="Mpho Shabalala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-3">
          <p className="leading-relaxed mb-6 text-lg md:text-xl">
            I'm a{" "}
            <span className="text-brand-yellow font-semibold">
              South Africa based web developer
            </span>{" "}
            passionate about delivering web solutions within reasonable
            timeframes. I{" "}
            <span className="text-white font-bold">
              blend customer needs with my aptitude for coding
            </span>{" "}
            to deliver applications that understand and anticipate user behavior.
          </p>

          <p className="leading-relaxed mb-6 text-lg md:text-xl">
            I don’t just build features — I{" "}
            <span className="text-brand-yellow font-bold">
              design systems that last
            </span>
            . I build with{" "}
            <span className="text-white font-semibold">
              extension in mind
            </span>
            , creating clear growth points that make future development easy for
            any developer.
          </p>

          <p className="leading-relaxed mb-8 text-lg md:text-xl">
            Currently, I’m focused on{" "}
            <span className="text-brand-yellow font-bold">
              expanding my online presence
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">
              refining my skills relentlessly
            </span>{" "}
            to ensure every client project stays modern, stable, and scalable.
          </p>

          {/* Social Links */}
          <ul className="flex gap-6 mt-4">
            <li>
              <a
                href={owner.contacts.linkedin}
                className="hover:bg-brand-yellow p-1 rounded-full transition"
              >
                <img src={linkedinImg} alt="LinkedIn" className="h-8 w-8" />
              </a>
            </li>
            <li>
              <a
                href={owner.contacts.github}
                className="hover:bg-brand-yellow p-1 rounded-full transition"
              >
                <img src={githubImg} alt="GitHub" className="h-8 w-8" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${owner.contacts.email}`}
                className="hover:bg-brand-yellow p-1 rounded-full transition"
              >
                <img src={mailImg} alt="Mail" className="h-8 w-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Image — DESKTOP ONLY, FAR RIGHT */}
      <div className="relative z-10 hidden md:flex w-1/2 justify-end items-center">
        <div className="w-72 h-72 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
          <img
            src={myImage}
            alt="Mpho Shabalala"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
