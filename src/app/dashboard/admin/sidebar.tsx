"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Icons = {
  UserManagement: (
    <svg
      className="w-6 h-6"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14.1665H10.0075"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6663 7.0835V11.2502C16.6663 14.3928 16.6663 15.9642 15.69 16.9405C14.7138 17.9168 13.1423 17.9168 9.99967 17.9168C6.85697 17.9168 5.28563 17.9168 4.30932 16.9405C3.33301 15.9642 3.33301 14.3928 3.33301 11.2502V7.0835"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M18.3337 8.75016L14.7144 5.27973C12.4922 3.1489 11.3811 2.0835 10.0003 2.0835C8.61958 2.0835 7.5085 3.1489 5.28628 5.27973L1.66699 8.75016"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  TutorManagement: (
    <svg
      className="w-6 h-6"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6666 12.5C16.6666 14.0532 16.6666 14.8297 16.4129 15.4423C16.0746 16.259 15.4256 16.9079 14.6089 17.2462C13.9963 17.5 13.2197 17.5 11.6666 17.5H9.16663C6.02395 17.5 4.45258 17.5 3.47628 16.5237C2.49996 15.5473 2.49998 13.976 2.5 10.8332L2.50005 5.83319C2.50007 3.99232 3.9924 2.5 5.83328 2.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33395 7.0835L8.69537 10.3909C8.72987 10.6674 8.89978 10.9084 9.15578 11.0184C9.72745 11.2639 10.7981 11.6668 11.6673 11.6668C12.5365 11.6668 13.6072 11.2639 14.1789 11.0184C14.4349 10.9084 14.6048 10.6674 14.6393 10.3909L15.0006 7.0835M17.084 6.25016V9.39116M11.6673 3.3335L5.83398 5.8335L11.6673 8.3335L17.5006 5.8335L11.6673 3.3335Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  AIChat: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
      ></path>
    </svg>
  ),
};


interface MenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const DropdownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const UserProfile = ({
  isDropdownOpen,
  toggleDropdown,
}: {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}) => (
  <div className="px-4 mb-6">
    <button
      className="flex items-center justify-between w-full px-3 py-2 border border-[#2F302F] rounded-[8px]"
      onClick={toggleDropdown}
    >
      <div className="flex items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mr-2 flex items-center justify-center">
          <span className="text-white text-xs">S</span>
        </div>
        <span className="text-sm font-medium">SkillNet Admin</span>
      </div>
      <DropdownIcon isOpen={isDropdownOpen} />
    </button>
  </div>
);

const SidebarMenu = ({
  isDropdownOpen,
  activeLink,
  menuItems,
}: {
  isDropdownOpen: boolean;
  activeLink: string | null;
  menuItems: MenuItem[];
}) => {
  const isActive = (href: string) => {
    return (
      activeLink === `/dashboard/admin/${href}` ||
      activeLink === `/dashboard/admin/${href}/`
    );
  };

  return (
    <div className="flex-1 px-4">
      <nav>
        <ul className={`space-y-2 ${isDropdownOpen ? "block" : "hidden"}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 text-[#FCFCFC] rounded-md hover:bg-[#2D2E2D] text-sm ${
                  isActive(item.href.split("/").pop() || "")
                    ? "bg-[#2D2E2D] text-white"
                    : ""
                }`}
              >
                {item.icon}
                <span className="ml-[10px]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      href: "/dashboard/admin/User_Management",
      label: "User management",
      icon: Icons.UserManagement,
    },
    {
      href: "/dashboard/admin/TutorList",
      label: "Tutor management",
      icon: Icons.TutorManagement,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="py-9 min-h-screen pt-12 bg-[#161716] text-white flex flex-col md:w-72 w-full mt-32 sm:mt-0">
      {/* User Profile Dropdown */}
      <UserProfile
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />

      {/* Sidebar Menu */}
      <SidebarMenu
        isDropdownOpen={isDropdownOpen}
        activeLink={activeLink}
        menuItems={menuItems}
      />

      {/* Footer */}
      <div className="mt-auto px-4">
        <Link
          href="#"
          className="flex items-center px-3 py-2 text-[#FCFCFC] rounded-md hover:bg-[#2D2E2D] text-sm"
        >
          {Icons.AIChat}
          <span className="ml-3">AI chat bot</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
