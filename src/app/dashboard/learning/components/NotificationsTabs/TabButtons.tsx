// src/app/dashboard/student/notification/components/TabButtons.tsx
"use client";

import { MessageSquare, CreditCard, Bell, FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

type TabButtonsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const tabs = [
  { name: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Payments", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Announcements", icon: <Bell className="w-5 h-5" /> },
  { name: "New Requests", icon: <FileQuestion className="w-5 h-5" /> },
];

export const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex overflow-x-auto gap-2 mb-4  p-2 ">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={cn(
            "px-4 py-2 rounded-[48px]  h-[32px] bg-[#161716] text-[#ABABAB] flex items-center gap-2 whitespace-nowrap text-xs",
            activeTab === tab.name
              ? "bg-[#2D2E2D] text-[#FCFCFC]"
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          )}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
