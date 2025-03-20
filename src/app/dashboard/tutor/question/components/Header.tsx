import Image from "next/image";
import React from "react";
import more from "../../../../../../public/more.svg";
import { ArrowLeft, SearchIcon } from "lucide-react";

interface HeaderProps {
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackClick }) => {
  return (
    <div className="sticky z-50 top-0 h-[44px] left-0 mt-1.5 right-0 flex justify-between items-center border-b-[#222220] border-b-[1px] border-b-solid pb-1">
      <div className="flex flex-row justify-start items-center gap-2 md:gap-4">
        <button
          onClick={onBackClick}
          className="md:hidden mr-1"
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="w-8 h-8 md:w-[32px] md:h-[32px] rounded-full border flex-shrink-0"></div>
        <span className="text-sm md:text-base">Josh</span>
      </div>
      <div className="flex flex-row justify-start items-center gap-3 md:gap-4">
        <SearchIcon className="w-4 h-4 md:w-[16px] md:h-[16px]" />
        <Image src={more} alt="more" width={16} height={16} />
      </div>
    </div>
  );
};

export default Header;
