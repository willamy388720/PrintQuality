import React from "react";

const Input = ({
  className,
  label,
  placeholder,
  value,
  onChange,
  error = false,
}) => {
  return (
    <div class={className}>
      <label class="block text-white text-sm font-bold mb-2" for="height">
        {label}
      </label>
      <input
        class={`shadow appearance-none border ${
          error ? "border-red-500" : ""
        }  rounded w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline`}
        id="height"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p class={`text-red-500 text-xs italic ${error ? "block" : "hidden"}`}>
        Apenas letras
      </p>
    </div>
  );
};

export default Input;
