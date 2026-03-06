export default function Status({ status, statusText }) {
  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        px-6 py-4
        rounded-xl
        backdrop-blur-md
        border
        shadow-[0_0_25px_rgba(0,0,0,0.6)]
        transition-all duration-500
        animate-fadeIn
        max-w-sm

        ${status
          ? "border-brand-yellow/60 bg-brand-darkBlue text-brand-yellow"
          : "border-red-500/60 bg-brand-darkBlue text-red-400"}
      `}
    >
      {/* Left accent line */}
      <div
        className={`
          absolute left-0 top-0 h-full w-1 rounded-l-xl
          ${status ? "bg-brand-yellow" : "bg-red-500"}
        `}
      />

      {/* Text */}
      <p className="pl-3 font-heading tracking-cinematic text-sm md:text-base uppercase">
        {statusText}
      </p>

      {/* Ambient glow */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-xl opacity-20 blur-xl
          ${status ? "bg-brand-yellow" : "bg-red-500"}
        `}
      />
    </div>
  );
}
