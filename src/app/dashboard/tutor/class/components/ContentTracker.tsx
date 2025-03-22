"use client";

import Image from "next/image";
import { MoreVertical, ChevronDown } from "lucide-react";

interface Lesson {
  title: string;
  duration: string;
  isCompleted?: boolean;
}

interface ContentTrackerProps {
  moduleNumber: number;
  lessons: Lesson[];
  tutorName: string;
  tutorRole: string;
  tutorAvatar: string;
}

export const ContentTracker = ({
  moduleNumber,
  lessons,
  tutorName,
  tutorRole,
  tutorAvatar,
}: ContentTrackerProps) => {
  return (
    <div className="border border-[#2C2F35] rounded-lg">
      <div className="p-6 border-b border-[#1D1D1C]">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-[#767776] text-sm font-medium">Tutor</h3>
          <button className="text-[#767776] hover:text-white">
            <MoreVertical size={20} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={tutorAvatar}
              alt={tutorName}
              width={48}
              height={48}
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h4 className="text-white font-medium">{tutorName}</h4>
            <p className="text-[#767776] text-sm">{tutorRole}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-medium">Content Tracker</h3>
          <button className="flex items-center gap-2 text-[#696969] font-medium hover:text-white">
            <span>MODULE {moduleNumber}</span>
            <ChevronDown size={20} />
          </button>
        </div>
        <hr className="border-[#292929] my-4" />

        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <>
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="text-[#D9D9D9] text-sm mb-1">
                    {lesson.title}
                  </h4>
                  <p className="text-[#767776] text-xs">{lesson.duration}</p>
                </div>
                <button className="flex items-center gap-2 text-[#767776] hover:text-white bg-[#1D1D1C] border border-[#252625] rounded-lg px-3 py-1.5">
                  <Image
                    src="/image/pdf.svg"
                    alt="PDF"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-xs">Download</span>
                </button>
              </div>
              {index !== lessons.length - 1 && (
                <hr className="border-[#292929] my-4" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
