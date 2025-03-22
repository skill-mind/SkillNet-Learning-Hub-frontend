import Image from "next/image";
import { MoreVertical } from "lucide-react";

interface HeaderProps {
  courseTitle: string;
  subTitle: string;
}

export const Header = ({
  courseTitle,
  subTitle,
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between p-6 border border-[#2C2F35] rounded-lg">
      <div className="flex gap-3">
        <h1 className="text-[16px] text-white">{courseTitle}</h1>
        <span className="text-gray-500 text-[16px]"> | </span>
        <h2 className="text-[16px] font-semibold text-white">{subTitle}</h2>
      </div>
    </div>
  );
};
