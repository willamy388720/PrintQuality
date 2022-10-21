import React from "react";

const Select = ({
  className,
  label,
  position = "inset-y-12 right-0",
  data = [],
  value,
  onChange,
}) => {
  return (
    <div class={className}>
      <label class="block text-white text-sm font-bold mb-2" for="service">
        {label}
      </label>
      <select
        defaultValue=""
        value={value}
        placeholder="Selecione o serviço..."
        class="shadow appearance-none border rounded w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline"
        onChange={onChange}
      >
        {data.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
      <div
        class={`pointer-events-none absolute ${position} flex items-center px-2 text-primary-blue-print-100`}
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
