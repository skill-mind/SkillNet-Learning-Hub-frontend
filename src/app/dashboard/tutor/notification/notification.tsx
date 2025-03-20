"use client";

import { useState } from "react";
import NewStudent from "./components/NewStudent";
import Questions from "./components/Questions";
import Payment from "./components/Payment";
import Announcements from "./components/Announcements";

const tabs = [
  { id: "new_student", label: "New Student" },
  { id: "questions", label: "Questions" },
  { id: "payment", label: "Payment" },
  { id: "announcements", label: "Announcements" },
] as const;

type TabType = (typeof tabs)[number]["id"];

function Notification() {
  const [activeTab, setActiveTab] = useState<TabType>("new_student");

  const renderComponent = () => {
    switch (activeTab) {
      case "new_student":
        return <NewStudent />;
      case "questions":
        return <Questions />;
      case "payment":
        return <Payment />;
      case "announcements":
        return <Announcements />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full mx-auto p-3 sm:p-6">
      <header className="w-full flex flex-wrap overflow-x-auto gap-2 sm:gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-full flex-shrink-0 transition-all ${
              activeTab === tab.id
                ? "bg-[#2D2E2D] text-white"
                : "bg-[#161716] text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </header>

      <div className="text-white flex flex-col gap-2 py-5 px-4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Notification;
