import React from "react";
import Image from "next/image";
import LessonItem from "./LessonItem";

import avatar_icon from "../images/Ellipse 43.png";
import more_icon from "../images/more-vertical.png";
import down_icon from "../images/down.png";

const LessonNavigation = () => {
  return (
    <div className="w-full md:w-[450px]">
      <div className="flex items-center justify-between h-[72px] mb-4 px-4">
        <div className="flex items-center gap-4">
          <span className="text-[#F3F5FF] font-semibold text-[14px]">
            Tutor
          </span>
          <span className="text-gray-600 font-extrabold">|</span>
          <div className="flex items-center gap-2">
            <Image src={avatar_icon} alt="avatar" className="w-[34px]" />
            <div className="flex flex-col md:hidden xl:flex">
              <span className="text-[#F3F5FF] font-semibold text-[14px]">
                Satoshi Nakamoto
              </span>
              <span className="text-[#A2A2A2] text-[12px]">
                Front-End Developer
              </span>
            </div>
          </div>
        </div>
        <Image src={more_icon} alt="more" />
      </div>

      <div className="border border-[#2C2F35] rounded-[8px] px-6">
        <div className="border-b border-[#2C2F35] flex py-4 items-center justify-between h-[38px] mb-2">
          <p className="text-[#F3F5FF] text-[14px] font-medium">
            Content Tracker
          </p>
          <p className="flex items-center gap-4">
            <span className="border-r-[3px] border-gray-800 pr-2 text-[#696969] text-[14px] font-semibold">
              MODULE 1
            </span>
            <Image src={down_icon} alt="down icon" />
          </p>
        </div>
        <div className="max-h-[384px] overflow-y-scroll scrollbar-hide pb-2">
          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={true}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />

          <LessonItem
            lessonNumber={1}
            topic="intro to digital technol..."
            duration={5}
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonNavigation;
