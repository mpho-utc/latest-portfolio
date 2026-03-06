import { useEffect, useRef } from "react";

export default function GalaxyBackground({
  starCount = 120,
  speed = 0.15,
}) {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height, animationFrame;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      stars.current = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        velocity: Math.random() * speed + 0.02,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.current.forEach(star => {
        star.y += star.velocity;

        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 203, 5, ${star.alpha})`; // batman yellow
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", init);
    };
  }, [starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-brand-darkBlue"
    />
  );
}
