import React from "react";

function Button({
  label,
  onButtonClick,
}: {
  label: string;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onButtonClick}
        className="bg-white border-[1px] outline-none border-[#252625] text-black text-[1.125rem] px-4 py-[0.75rem] rounded-[0.5rem] font-UbuntuBold w-full md:w-[26rem]"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;