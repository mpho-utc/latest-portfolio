// components/shared/Counter.jsx
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Counter({ end = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16); // assuming ~60fps
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
}
