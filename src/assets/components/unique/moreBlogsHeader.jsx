export default function MoreBlogsHeader() {
  return (
    <div className="flex items-center justify-center  my-2 relative">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-yellow tracking-wider relative z-10">
        MORE TO DISCOVER
      </h2>

      {/* Line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>

      {/* Optional stars overlay */}
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="absolute bg-brand-yellow rounded-full animate-pulse pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: `${Math.random() * 5 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}
