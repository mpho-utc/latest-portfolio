import { useBlogs } from '../../../contexts/blogsContext'
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function CurrentBlog() {
  const { currBlog, blogs } = useBlogs();

  useEffect(() => {
    console.log(blogs);
    console.log(currBlog);
  });

  if (!currBlog) {
    return (
      <div className="pt-24 max-w-container text-center text-gray-400">
        Loading blog...
      </div>
    );
  }

  return (
    <section className="relative max-w-container bg-brand-darkBlue text-white pt-24 pb-32 px-4 overflow-hidden">
      
      {/* Content container */}
      <div className="max-w-container relative z-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-yellow tracking-wide">
          {currBlog.title?.toUpperCase()}
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl py-4 text-gray-300">
          {currBlog.subtitle}
        </h2>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2">
          <span className="border border-brand-yellow text-brand-yellow rounded-full px-4 py-1">
            {currBlog.category}
          </span>

          <span>
            {currBlog.createdAt?.toDate().toLocaleDateString()}
          </span>

          <span className="italic">
            By {currBlog.author}
          </span>
        </div>

        {/* Image */}
        {currBlog.images && currBlog.images.length > 0 && (
          <div className="mt-12 rounded-2xl overflow-hidden border-2 border-brand-yellow shadow-xl">
            <img
              src={currBlog.images[0].img}
              alt={currBlog.images[0].alt}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Markdown content */}
        <article className="prose prose-lg prose-invert mt-12 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {currBlog.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Ambient cosmic stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute bg-brand-yellow rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.6 + 0.3,
            animationDuration: `${Math.random() * 6 + 3}s`,
          }}
        />
      ))}
    </section>
  );
}
