export default function SubHeading({ heading, text }) {
  return (
    <div className="mb-8">
      {/* Heading with accent underline */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-yellow mb-3 relative inline-block">
        {heading}
        <span className="absolute left-0 -bottom-1 w-12 h-1 bg-brand-purple rounded-full"></span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-prose">
        {text}
      </p>
    </div>
  );
}
