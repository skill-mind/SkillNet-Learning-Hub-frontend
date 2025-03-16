import React from "react";

function TextArea({
  name,
  label,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
        className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] resize-none h-[10em]"
      />
    </div>
  );
}

export default TextArea;