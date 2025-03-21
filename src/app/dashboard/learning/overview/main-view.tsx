"use client";
import React, { useState } from "react";
import Overview from "./overview";
import PaymentCard from "@/components/PaymentCard";
import TutorsAndFacilitatorss from "./tutors";
import Content from "./content";

type TabType = "Overview" | "Content" | "Tutors/Facilitators";

const BlockchainBootcampPage = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<TabType>("Overview");

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;

      case "Content":
        return <Content />;

      case "Tutors/Facilitators":
        return <TutorsAndFacilitatorss />;

      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-6 p-6 `}>
      {/* Main Content */}
      <div className="flex-1">
        <div
          className={`flex-col inline-block md:flex-row gap-5 mb-6  ${
            activeTab === "Tutors/Facilitators" ? "hidden" : "visible"
          }`}
        >
          {(["Overview", "Content", "Tutors/Facilitators"] as TabType[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-5 rounded m-1 min-w-[200px] lg:py-2 lg:min-w-[100px] ${
                  activeTab === tab
                    ? "bg-[#3B3B3A] bg-opacity-20 border border-[#3B3B3A] text-[#A8C789]"
                    : "bg-transparent border border-gray-900 text-[#ABABAB] hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Course Title - Always visible regardless of tab */}
        <h1
          className={`${
            activeTab === "Tutors/Facilitators" ? "text-[24px]" : "text-[32px]"
          } font-bold mb-2`}
        >
          Blockchain Development Bootcamp: Zero to Hero
        </h1>
        <p className="text-gray-500 mb-6">By Satoshi Nakamoto</p>

        {/* Tutor tabs bellow he text. */}
        <div
          className={` flex-col inline-block md:flex-row gap-5 mb-6 ${
            activeTab === "Tutors/Facilitators" ? "visible" : "hidden"
          }`}
        >
          {(["Overview", "Content", "Tutors/Facilitators"] as TabType[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-5 rounded m-1 min-w-[200px] lg:py-2 lg:min-w-[100px] ${
                  activeTab === tab
                    ? "bg-[#3B3B3A] bg-opacity-20 border border-[#3B3B3A] text-[#A8C789]"
                    : "bg-transparent border border-gray-900 text-[#ABABAB] hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Dynamic content based on active tab */}
        {renderContent()}
      </div>

      <div
        className={`  lg:flex-1 ${
          activeTab === "Tutors/Facilitators" ? "visible" : "hidden"
        }`}
      >
        <PaymentCard />
      </div>
    </div>
  );
};

export default BlockchainBootcampPage;
