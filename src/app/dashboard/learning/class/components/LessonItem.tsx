import React from "react";
import Image from "next/image";

import pdf_bright_icon from "../images/pdf_bright.png";
import pdf_dark_icon from "../images/pdf_dark.png";

interface LessonItemProps {
  lessonNumber: number;
  topic: string;
  duration: number;
  active: boolean;
}

const LessonItem: React.FC<LessonItemProps> = ({
  lessonNumber,
  topic,
  duration,
  active,
}) => {
  return (
    <div className=" py-2 border-b border-[#2C2F35] flex items-start justify-between cursor-pointer">
      <p className="flex flex-col">
        <span
          className={`text-[14px] hover:text-[#F3F5FF] duration-500 ${
            active
              ? "text-[#F3F5FF] font-semibold"
              : "text-[#BBBBBB] font-medium"
          }`}
        >
          Lesson {lessonNumber}: {topic}
        </span>
        <span className="text-[12px] text-[#696969] font-medium">
          {duration}mins
        </span>
      </p>
      <div className="flex items-center space-x-2 border rounded-[8px] border-[#2C2F35] p-2 px-4">
        {active ? (
          <Image src={pdf_bright_icon} alt="pdf" className="w-[16px]" />
        ) : (
          <Image src={pdf_dark_icon} alt="pdf" className="w-[16px]" />
        )}
        <span
          className={`text-[12px] font-semibold ${
            active ? "text-[#A8C789]" : "text-[#696969]"
          } hover:text-[#A8C789] duration-500`}
        >
          Download
        </span>
      </div>
    </div>
  );
};

export default LessonItem;
