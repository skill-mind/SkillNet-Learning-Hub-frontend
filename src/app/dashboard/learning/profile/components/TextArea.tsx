import React from "react";

function TextArea({
  name,
  label,
  placeholder,
  value,
  onChange,
  mdWidth = "26rem",
  error, 
}: {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  mdWidth?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string; 
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[#9596A0] text-[0.875rem] mb-1">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-transparent border-[1px] appearance-none outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[${mdWidth}] px-4 py-[0.75rem] rounded-[0.5rem] resize-none h-[10rem] ${
          error ? "border-red-500" : ""
        }`} 
        style={{ width: mdWidth }}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>} {/* Display error message */}
    </div>
  );
}

export default TextArea;