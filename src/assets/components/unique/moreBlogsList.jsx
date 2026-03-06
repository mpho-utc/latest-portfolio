import { useBlogs } from '../../../contexts/blogsContext';
import { useEffect, useState } from 'react';
import BlogCard from '../shared/blogCard';

export default function MoreBlogsList() {
  const { blogs, currBlog } = useBlogs();
  const [remBlogs, setRemBlogs] = useState([]);

  useEffect(() => {
    if (blogs && currBlog) {
      const remaining = blogs.filter(b => b.id !== currBlog.id);
      setRemBlogs(remaining);
    }
  }, [blogs, currBlog]);

  if (!remBlogs.length) return null;

  return (
    <section className="relative w-full bg-brand-darkBlue py-24 px-4 overflow-hidden">
      
      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-yellow">
            More Writings
          </h3>
          <p className="text-gray-400 mt-2 max-w-xl">
            Additional thoughts, breakdowns, and system-level reflections from the same universe.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {remBlogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>

      {/* Subtle ambient stars */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute bg-brand-yellow rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.4 + 0.2,
            animationDuration: `${Math.random() * 8 + 4}s`,
          }}
        />
      ))}
    </section>
  );
}
