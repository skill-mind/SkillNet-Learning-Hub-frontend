import { useState } from "react";
import OverviewTab from "./OverviewTab";
import ResourcesTab from "./ResourcesTab";
import SummaryTab from "./SummaryTab";
import TaskTab from "./TaskTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "resources" | "task" | "summary">("overview");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b border-[#2C2F35] text-[#FCFCFC]">
        {["overview", "resources", "task", "summary"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-[#FCFCFC] text-[12px] font-semibold w-[205px] ${
              activeTab === tab ? " bg-[#2C2F35] rounded-t-[12px] font-semibold" : "opacity-50"
            }`}
            onClick={() => setActiveTab(tab as "overview" | "resources" | "task" | "summary")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-[4rem]">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "resources" && <ResourcesTab />}
        {activeTab === "summary" && <SummaryTab />}
        {activeTab == "task" && <TaskTab />}
      </div>
    </div>
  );
};

export default Tabs;
