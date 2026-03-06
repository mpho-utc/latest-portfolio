import React from "react";

export default function DropdownInput({
  label,
  options,
  value,
  name,
  handleChange,
  placeholder
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

      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="
          w-full
          bg-brand-gray
          text-brand-lightGray
          px-4 py-3
          text-base
          border border-brand-yellow/40
          rounded-md
          outline-none
          transition-all duration-200
          focus:border-brand-yellow
          focus:ring-1 focus:ring-brand-yellow
          cursor-pointer
        "
      >
        {/* Placeholder — visually same as Input */}
        <option
          value=""
          disabled
          hidden
          className="text-brand-lightGray/60"
        >
          {placeholder || "Select an option"}
        </option>

        {/* Options — dark, serious, Gotham */}
        {options.map(option => (
          <option
            key={option}
            value={option}
            className="
              bg-brand-darkBlue
              text-brand-lightGray
              font-medium
            "
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
