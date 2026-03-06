import React from "react";

export default function MessageBox({
  label,
  value,
  handleChange,
  placeholder,
  name,
  rows = 4
}) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-semibold text-brand-yellow tracking-wide"
        >
          {label}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Type your message..."}
        rows={rows}
        className="
          w-full
          bg-brand-gray
          text-brand-lightGray
          px-4 py-3
          text-base
          border border-brand-yellow/40
          rounded-md
          outline-none
          resize-none
          transition-all duration-200
          focus:border-brand-yellow
          focus:ring-1 focus:ring-brand-yellow
          placeholder:text-brand-lightGray/60
        "
      />
    </div>
  );
}
