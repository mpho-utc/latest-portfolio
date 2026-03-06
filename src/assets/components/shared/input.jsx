export default function Input({
  label_name,
  onChange,
  placeholder,
  name,
  value,
  type = "text"
}) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-brand-yellow tracking-wide"
      >
        {label_name}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-brand-gray
          text-brand-lightGray
          px-4 py-3
          text-base
          border border-brand-yellow/40
          rounded-md
          outline-none
          transition-all
          duration-200
          focus:border-brand-yellow
          focus:ring-1
          focus:ring-brand-yellow
          placeholder:text-brand-lightGray/40
        "
      />
    </div>
  );
}
