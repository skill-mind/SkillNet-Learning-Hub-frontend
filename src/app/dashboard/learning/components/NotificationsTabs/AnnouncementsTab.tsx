"use client";

import Annoucement from "@/svg/annoucement";
import { Bell } from "lucide-react";

// Sample announcement data
const announcements = [
  {
    id: 1,
    title: "Upcoming Student Assessments",
    content:
      "Don't forget to prepare your students for the Quarterly Assessment starting Feb 10th, 2025.",
  },
  {
    id: 2,
    title: "Policy Update",
    content:
      "Starting March 1st, 2025, all session reports must be submitted within 24 hours of the session.",
  },
];

export const AnnouncementsTab: React.FC = () => {
  return (
    <div className="w-full">
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="flex flex-col sm:flex-row items-start gap-3 sm:gap-[16px] p-3 sm:p-[24px] bg-[#161716] rounded-[8px] mb-4"
        >
          <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-[#2D2E2D] flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0 sm:mt-1">
            <Annoucement />
          </div>
          <div className="flex-1 w-full">
            <h3 className="font-medium text-base sm:text-[18px] mb-1 text-[#CCCCCC]">
              {announcement.title}
            </h3>
            <p className="text-sm text-[#CCCCCC]">{announcement.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
