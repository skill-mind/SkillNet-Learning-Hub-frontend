import React from "react";
import more from "../../../../../../public/more.svg";
import tick from "../../../../../../public/tick.svg";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

interface ChatsProps {
  onChatSelect?: () => void;
}

const Chats: React.FC<ChatsProps> = ({ onChatSelect }) => {
  const chats = [
    {
      image: "",
      time: "friday",
      from: "Josh",
      content:
        "What videos and materials can you recommend for a beginner started web design",
    },
    // Additional chat items can be added here
  ];

  return (
    <div className="w-full md:w-[300px] lg:w-[351px] h-full flex flex-col gap-4 md:gap-[32px] border-r-0 md:border-r-[#222220] md:border-r-[1px] md:border-r-solid px-4 md:px-2">
      <div className="flex justify-between items-center mt-3">
        <p className="font-[400] text-base md:text-[14px]">Questions</p>
        <Link href={"/dashboard/tutor/"}>
          <X className="w-[24px] h-[24px]" />
        </Link>
      </div>

      <div className="flex flex-row gap-4 justify-start">
        <button className="h-[31px] w-[74px] border-[1px] border-solid border-[#3b3b3a] text-sm md:text-[16px] font-medium text-[#A8C789] rounded-[4px]">
          New
        </button>
        <button className="h-[31px] w-[74px] border-solid border-[#3b3b3a] text-sm md:text-[16px] font-medium text-gray-400 rounded-[4px]">
          Archived
        </button>
      </div>

      <ul className="flex flex-col gap-3 md:gap-4 overflow-y-auto">
        {chats.map((item, index) => {
          return (
            <li
              className="flex flex-row gap-2 items-center cursor-pointer"
              key={index}
              onClick={onChatSelect}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border flex-shrink-0"></div>
              <div className="w-full border-b-[#222220] border-b-[1px] border-b-solid py-2">
                <section className="flex justify-between items-center">
                  <p className="font-medium text-sm md:text-[14px] text-[#fcfcfc]">
                    {item.from}
                  </p>
                  <p className="font-normal text-xs md:text-[12px] text-[#696969] capitalize">
                    {item.time}
                  </p>
                </section>
                <section className="flex justify-between items-center mt-1">
                  <p className="font-normal text-xs md:text-[12px] text-[#fcfcfc] flex flex-row justify-start items-center gap-1 truncate max-w-[70%]">
                    <span className="flex-shrink-0">
                      <Image src={tick} alt="tick" />
                    </span>
                    {item.content.length > 25
                      ? `${item.content.slice(0, 25)}...`
                      : item.content}
                  </p>
                  <button>
                    <Image src={more} alt="more" />
                  </button>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chats;
