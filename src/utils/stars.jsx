export default function stars(){
    return Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute bg-brand-yellow rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.6 + 0.2,
            animationDuration: `${Math.random() * 5 + 2}s`,
          }}
        />
      ))
}