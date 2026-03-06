import { usePortfolioData } from '../../../contexts/PortfolioContext';
import PrimaryBTN from '../shared/primaryBtn'
export default function Hero() {
  const {meta } = usePortfolioData();
  const { owner } = meta;

  return (
    <section className="bg-transparent pt-24 w-full bg-brand-darkBlue text-white overflow-hidden py-12 px-6">
      
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-brand-yellow">
            {owner.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-lightGray">
            {owner.role}
          </h2>
          <p className="text-sm mb-4 md:text-base leading-relaxed text-gray-300 max-w-lg">
            {owner.tagline}
          </p>
          <PrimaryBTN text='VIEW PROJECTS' href='/projects' />
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6 max-w-sm w-full">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-yellow-400 shadow-xl">
            <img
              src="https://images.hdqwalls.com/wallpapers/batman-2020-dark-knight-uz.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

