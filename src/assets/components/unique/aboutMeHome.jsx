import { usePortfolioData } from '../../../contexts/PortfolioContext';
import Counter from '../shared/counter';
import SecondaryBTN from '../shared/secondaryBTN';

export default function About() {
  const { meta, socialLinks, journey, projects } = usePortfolioData();
  const { name, role, contacts, tagline } = meta.owner;

  const yearsExperience = journey.filter(item => item.type === "degree").length + 3;
  const completedProjects = projects.length;
  const clientsWorldwide = 1;

  return (
    <section className="bg-transparent relative w-full bg-brand-darkBlue text-white py-16 px-6 overflow-x-hidden">
      
    

      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image - Right on desktop, Top on mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
           <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-xl">
            <img
              src="https://www.hdwallpapers.in/download/batman_dark_knight_trilogy-wide.jpg"
              alt="Batman Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center space-y-6">

          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-yellow">ABOUT ME</h1>

          <p className="text-lg leading-relaxed text-gray-200">
            Hi, I'm {name} — {role}. {tagline} I build{" "}
            <span className="text-brand-yellow font-semibold">scalable, user-centric systems</span> 
            {" "}that connect clean, responsive interfaces with secure back-end APIs. From UX/UI to database design, I focus on clarity, performance, and maintainability.
          </p>

          {/* Stats */}
          <ul className="flex flex-col md:flex-row gap-6">
            <li className="bg-brand-lightGray/10 rounded-xl p-4 flex flex-col items-start w-full md:w-auto">
              <h2 className="text-brand-yellow font-bold text-4xl md:text-5xl">
                <Counter end={yearsExperience} duration={2000} />
              </h2>
              <p className="text-gray-300">Years of Experience</p>
            </li>
            <li className="bg-brand-lightGray/10 rounded-xl p-4 flex flex-col items-start w-full md:w-auto">
              <h2 className="text-brand-yellow font-bold text-4xl md:text-5xl">
                <Counter end={completedProjects} duration={2000} />
              </h2>
              <p className="text-gray-300">Completed Projects</p>
            </li>
            <li className="bg-brand-lightGray/10 rounded-xl p-4 flex flex-col items-start w-full md:w-auto">
              <h2 className="text-brand-yellow font-bold text-4xl md:text-5xl">
                <Counter end={clientsWorldwide} duration={2000} />
              </h2>
              <p className="text-gray-300">Clients Worldwide</p>
            </li>
          </ul>

          {/* Contacts */}
          <ul className="flex flex-col md:flex-row gap-6">
            {contacts.phone && (
              <li>
                <p className="font-semibold">Call Today:</p>
                <a href={`tel:${contacts.phone}`} className="hover:text-brand-yellow">{contacts.phone}</a>
              </li>
            )}
            {contacts.email && (
              <li>
                <p className="font-semibold">Email:</p>
                <a href={`mailto:${contacts.email}`} className="hover:text-brand-yellow">{contacts.email}</a>
              </li>
            )}
          </ul>

          {/* Socials */}
          <ul className="flex gap-6">
            {socialLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-brand-yellow transition"
                >
                  {link.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* ONLY Secondary Button */}
          <div className="mt-4 w-full md:w-fit">
            <SecondaryBTN href="/#/about" text="MY STORY" />
          </div>

        </div>
      </div>
    </section>
  );
}
