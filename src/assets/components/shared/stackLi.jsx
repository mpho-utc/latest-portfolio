export default function StackLi({ img, title, description }) {
  return (
    <li className="mb-4 py-4 px-6 flex items-center rounded-lg bg-brand-lightGray/10 transition hover:bg-yellow-400/10">
      
      {/* Icon */}
      <img
        className="w-12 h-12 opacity-90"
        src={img}
        alt={title}
      />

      {/* Text */}
      <div className="flex flex-col ml-4">
        <h2 className="font-semibold text-brand-yellow text-lg">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

    </li>
  );
}
