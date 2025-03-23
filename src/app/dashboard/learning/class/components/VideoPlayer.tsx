import React from "react";
import Image from "next/image";
import video_placeholder from "../images/Rectangle 7.png";
import next_icon from "../images/next.png";
import check_icon from "../images/checkmark-square-01.png";
import prev_icon from "../images/previous.png";
import pause_play_icon from "../images/pause-play.png";

import Tabs from "./Tabs";

const VideoPlayer = () => {
  return (
    <div className="w-[100%] md:w-[55%] xl:w-[72%]">
      <div className="flex items-center p-4 border rounded-[8px] w-full mb-6 border-[#2C2F35] gap-3 h-[72px]">
        <h3 className="text-[#BBBBBB] font-semibold text-[12px] xl:text-[16px]">
          Blockchain Development Bootcamp: Zero to Hero
        </h3>
        <span className="text-[#2C2F35] font-extrabold">|</span>
        <span className="font-semibold text-[#FCFCFC] text-[12px] xl:text-[16px]">
          Intro to Digital Technology
        </span>
      </div>
      <div className="w-full">
        <div className="relative">
          <div className="absolute w-full flex items-center justify-between top-[50%] bottom-[50%]">
            <Image src={prev_icon} alt="prev" />
            <Image src={pause_play_icon} alt="pause-play" className="w-[3rem] md:w-auto" />
            <Image src={next_icon} alt="next" />
          </div>
          <Image src={video_placeholder} alt="video" className="w-full" />
        </div>
        <div className="flex items-center space-x-2 mt-[2rem]">
          <Image src={check_icon} alt="completed" className="w-[24px]" />
          <span className="text-[#F3F5FF] font-semibold text-[12px]">
            Completed
          </span>
        </div>
      </div>
      <div className="mt-[2rem]">
        <Tabs />
      </div>
    </div>
  );
};

export default VideoPlayer;
