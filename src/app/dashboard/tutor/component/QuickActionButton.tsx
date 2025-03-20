import { DashBoardContext } from "@/app/useContext/dashboardContext";
import { useContext } from "react";

interface QuickActionButtonProps {
  label: string;
  sectionName: string;
}

export function QuickActionButton({
  label,
  sectionName,
}: QuickActionButtonProps) {
  const { setActiveSection: onSectionChange } = useContext(DashBoardContext);

  const handleClick = () => {
    onSectionChange(sectionName);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-6 py-3 bg-none border border-[#2D2E2D] hover:bg-[#FFFFFF1A] rounded-lg transition-colors"
    >
      {label}
    </button>
  );
}
