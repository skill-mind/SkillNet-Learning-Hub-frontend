import { useState } from "react";
import WeeklyEarns from "../component/weeklyEarning";
import MonthlyEarns from "../component/MonthlyEarning";
import AllTimeEarns from "../component/AllTimeEarns";

type TimeFrame = "All-Time" | "Weekly" | "Monthly";

export default function EarningsDashboard() {
  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>("All-Time");

  const renderEarningsComponent = () => {
    switch (activeTimeFrame) {
      case "All-Time":
        return <AllTimeEarns />;
      case "Weekly":
        return <WeeklyEarns />;
      case "Monthly":
        return <MonthlyEarns />;
      default:
        return <AllTimeEarns />;
    }
  };

  return (
    <>
      <div className="bg-transparent text-white min-h-screen mt-10 px-4">
        <div className="flex gap-2 mb-6">
          {["All-Time", "Weekly", "Monthly"].map((timeFrame) => (
            <button
              key={timeFrame}
              className={`px-4 py-1 rounded-full text-sm ${
                activeTimeFrame === timeFrame ? "bg-[#2D2E2D]" : "bg-[#161716]"
              }`}
              onClick={() => setActiveTimeFrame(timeFrame as TimeFrame)}
            >
              {timeFrame}
            </button>
          ))}
        </div>

        <div className="earnings-content">{renderEarningsComponent()}</div>
      </div>
    </>
  );
}
