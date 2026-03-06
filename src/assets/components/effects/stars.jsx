export default function CosmicStars({
  count = 18,
  color = "bg-brand-yellow",
  minSize = 1,
  maxSize = 4
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`absolute ${color} rounded-full animate-pulse`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * (maxSize - minSize) + minSize}px`,
            height: `${Math.random() * (maxSize - minSize) + minSize}px`,
            opacity: Math.random() * 0.6 + 0.2,
            animationDuration: `${Math.random() * 5 + 2}s`,
          }}
        />
      ))}
    </>
  );
}
