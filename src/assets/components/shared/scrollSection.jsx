import { useEffect, useRef, useState } from 'react';

export default function ScrollSection({ children, from = 'right' }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const directionMap = {
    right: 'translate-x-40',
    left: '-translate-x-10',
    up: '-translate-y-10',
    down: 'translate-y-10',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // remove for repeat-on-scroll
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative z-10 transition-all duration-1000 ease-out will-change-transform ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${directionMap[from] || 'translate-x-10'}`
      }`}
    >
      {children}
    </section>
  );
}
