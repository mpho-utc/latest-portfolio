import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
   <Link
  to={{ pathname: `/blogs/${blog.id}` }}
  className="
    max-w-content bg-transparent
    group block
    no-underline
    bg-brand-lightGray/10
    border border-white/10
    rounded-2xl
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]
    hover:border-brand-yellow/40
  "
>

      {/* Image */}
      {blog.images && blog.images.length > 0 && (
        <div className="overflow-hidden">
          <img
            className="
              w-full h-56 object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
            src={blog.images[0].img}
            alt={blog.images[0].alt}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="border border-brand-yellow/50 text-brand-yellow rounded-full px-3 py-1">
            {blog.category}
          </span>
          <span>
            {blog.createdAt?.toDate().toLocaleDateString()}
          </span>
          <span className="italic">By {blog.author}</span>
        </div>

        {/* Title */}
        <h3 className="
          text-xl font-extrabold text-white
          tracking-wide
          group-hover:text-brand-yellow
          transition-colors
        ">
          {blog.title?.toUpperCase()}
        </h3>

        {/* Subtitle */}
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {blog.subtitle}
        </p>
      </div>
    </Link>
  );
}
