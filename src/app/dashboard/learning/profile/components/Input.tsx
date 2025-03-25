import React from "react";

function Input({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  mdWidth = "26rem",
  required,
  error, 
}: {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  mdWidth?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[#9596A0] flex items-center space-x-1 text-[0.875rem] mb-1"
      >
        <span>{label}</span>
        {required && <span className="text-[#C04639]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-transparent border-[1px] appearance-none outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[${mdWidth}] px-4 py-[0.75rem] rounded-[0.5rem] ${
          error ? "border-red-500" : ""
        }`} 
        style={{ width: mdWidth }}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

export default Input;