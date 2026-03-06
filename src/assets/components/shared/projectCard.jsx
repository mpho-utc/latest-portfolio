import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function ProjectCard({ title, url, imageUrl, index, description, category }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (inView) setIsActive(true);
    else setIsActive(false);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[60vh] flex items-center justify-center sticky top-20 -z-10"
      style={{
        zIndex: isActive ? 10 : 5 - index,
      }}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.3,
        y: isActive ? 0 : 80,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        to={url}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col -z-40 relative w-full h-full rounded-2xl shadow-xl  items-center justify-center text-4xl font-bold text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 rounded-2xl z-0" />
          <span className="z-10 font-normal text-sm bg-brand-purple py-1 px-4 rounded-full">{category}</span>
         <span className="z-10 my-4">{title}</span>
        <span className="z-10 text-base mx-20 text-center font-normal">{description}</span>
      </Link>
    </motion.div>
  );
}
