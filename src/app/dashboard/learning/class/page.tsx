"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import LessonNavigation from "./components/LessonNavigation";

import vector from "./images/vector2.png";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on mount
  }, []);

  return (
    <section
      className={`min-h-screen text-[#D9D9D9] px-4 sm:px-8 lg:px-16 relative transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src={vector}
        alt="design"
        className="absolute bottom-[10%] right-0 hidden md:block"
      />
      <div className="flex items-start justify-between w-full gap-8 flex-col-reverse md:flex-row">
        <VideoPlayer />
        <LessonNavigation />
      </div>
    </section>
  );
};

export default Page;
