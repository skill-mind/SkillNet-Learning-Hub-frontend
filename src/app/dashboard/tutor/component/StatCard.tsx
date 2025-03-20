import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  bgCol?: string;
}

export function StatCard({ icon, value, label, bgCol }: StatCardProps) {
  return (
    <div
      className={` bg-[#1E1E1E] cursor-pointer hover:bg-[#FFFFFF1A] p-6 rounded-lg`}
    >
      <div className="flex min-h-[64px]  items-center justify-start gap-3">
        <div className="min-h-[64px] ">
          <div
            className={`p-2 rounded-full h-[64px] w-[64px] flex items-center justify-center align-middle hover:bg-opacity-[50%] bg-opacity-[40%] ${bgCol}`}
          >
            {icon}
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mb-1 text-[30px]">{value}</p>
          <p className="text-gray-400 text-[13px] md:text-[14px]">{label}</p>
        </div>
      </div>
    </div>
  );
}
