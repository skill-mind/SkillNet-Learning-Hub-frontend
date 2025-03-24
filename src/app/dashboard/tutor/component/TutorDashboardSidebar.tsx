"use client";
import { ChevronDown, Headset } from "lucide-react";
import Image from "next/image";
import { ReactNode, useContext, useState } from "react";
import profilePic from "../../../../../public/dashboardProfile.svg";
import homeIcon from "../../../../../public/homeDashboard.svg";
import studentIcon from "../../../../../public/studentsDashboard.svg";
import notificationIcon from "../../../../../public/messageDashboard.svg";
import coursesIcon from "../../../../../public/courseDashboard.svg";
import earningIcon from "../../../../../public/walletDashboard.svg";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import ChatBotButton from "../../../../components/ChatbotModal";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
        active ? "bg-[#FFFFFF1A]" : "hover:bg-[#FFFFFF1A]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
    
  );
}

export function Sidebar() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);
  return (
    <aside className="w-64 border-r min-h-[90vh] bg-[#161716] border-gray-800 overflow-y-auto">
      <div className="p-4 h-[100%] overflow-y-auto scrollbar-hide scroll-smooth">
        <div
          onClick={() => onSectionChange("profile")}
          className={`flex relative cursor-pointer items-center gap-3 mb-8 border rounded-md p-2 border-[#2F302F] hover:bg-[#FFFFFF1A] ${
            activeSection === "profile" ? "bg-[#FFFFFF1A]" : ""
          }`}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">Miss Flora</h2>
            <p className="text-sm text-gray-400">Tutor</p>
          </div>
          <ChevronDown className="absolute right-3" size={20} color="#BABABA" />
        </div>

        <nav className="space-y-2">
          <NavItem
            label="Home"
            active={activeSection === "home"}
            icon={<Image src={homeIcon} alt="Home" height={20} width={20} />}
            onClick={() => onSectionChange("home")}
          />
          <NavItem
            icon={
              <Image src={studentIcon} alt="Student" height={20} width={20} />
            }
            label="Students"
            active={activeSection === "students"}
            onClick={() => onSectionChange("students")}
          />
          <NavItem
            icon={
              <Image
                src={notificationIcon}
                alt="Notification"
                height={20}
                width={20}
              />
            }
            label="Notifications"
            active={activeSection === "notifications"}
            onClick={() => onSectionChange("notifications")}
          />
          <NavItem
            icon={
              <Image src={coursesIcon} alt="Courses" height={20} width={20} />
            }
            label="Courses"
            active={activeSection === "courses"}
            onClick={() => onSectionChange("courses")}
          />
          <NavItem
            icon={
              <Image src={earningIcon} alt="Earnings" height={20} width={20} />
            }
            label="Earnings"
            active={activeSection === "earnings"}
            onClick={() => onSectionChange("earnings")}
          />
        </nav>
      </div>

      <div className="mt-auto border-t mx-[15px] border-gray-800">
        <NavItem
          icon={<Headset size={20} />}
          label="Support"
          active={activeSection === "support"}
          onClick={() => {
            onSectionChange("support");
            handleOpenChatbot();
          }}
        />
        <NavItem
          icon={<Headset size={20} />}
          label="AI chat bot"
          onClick={() => {
            handleOpenChatbot();
          }}
        />
        <ChatBotButton isOpen={isChatbotOpen} onClose={handleCloseChatbot} />
      </div>
    </aside>
  );
}
