export default function JourneyLi({ course, institution, timeframe }) {
  return (
    <li className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 px-6 rounded-lg bg-brand-lightGray/10 transition hover:bg-yellow-400/10">

      {/* Left: Course */}
      <h2 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-0">
        {course}
      </h2>

      {/* Right: Institution & Timeframe */}
      <div className="flex flex-col items-start md:items-end text-left md:text-right mt-2 md:mt-0">
        <h3 className="font-semibold text-brand-yellow text-sm md:text-base">
          {institution}
        </h3>
        <p className="text-gray-400 text-sm">
          {timeframe}
        </p>
      </div>

    </li>
  );
}
