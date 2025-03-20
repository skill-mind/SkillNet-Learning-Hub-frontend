"use client";

import { useState, useEffect, useContext } from "react";
import { Menu, MoreVertical, Pencil, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../../../../../public/skillnet-white logo.png";
import Notification from "../../../../../public/notification.svg";
import Avatar from "../../../../../public/Avatar.png";
import { Button } from "@headlessui/react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import { useWalletContext } from "@/app/useContext/WalletContext";

function Header() {
  const { activeSection } = useContext(DashBoardContext);
  const { account, disconnectWallet } = useWalletContext();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dynamic navigation based on active section
  const getNavigation = () => {
    switch (activeSection) {
      case "home":
        return [
          { name: "Home", href: "/account/dashboard/tutor" },
          { name: "Glance", href: "/account/dashboard/tutor" },
        ];
      case "students":
        return [
          { name: "Students", href: "/account/dashboard/tutor" },
          { name: "Details", href: "/account/dashboard/tutor" },
        ];
      case "courses":
        return [
          { name: "Courses", href: "/account/dashboard/tutor" },
          { name: "My courses", href: "/account/dashboard/tutor" },
        ];
      case "earnings":
        return [
          { name: "Earnings", href: "/account/dashboard/tutor" },
          { name: "Total earnings", href: "/account/dashboard/tutor" },
        ];
      case "notifications":
        return [
          { name: "Notifications", href: "/account/dashboard/tutor" },
          { name: "New students", href: "/account/dashboard/tutor" },
        ];
      case "support":
        return [
          { name: "Support", href: "/account/dashboard/tutor" },
          { name: "Help Center", href: "/account/dashboard/tutor" },
        ];
      default:
        return [{ name: "Profile", href: "/account/dashboard/tutor" }];
    }
  };

  useEffect(() => {
    console.log("Updated activeSection:", activeSection);
  }, [activeSection]);
  const navigation = getNavigation();

  return (
    <header className="bg-[#101110] py-5">
      <div className="flex items-center justify-between pl-4 md:px-24 pr-8 px-3 py-3 sm:px-6 ">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center ">
            <Image
              src={Logo}
              width={100}
              height={40}
              className="w-[100px] h-[40px]"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && (
                <div className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2"></div>
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
                )}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Image
            src={Notification}
            width={20}
            height={20}
            className="text-white"
            alt="Notification"
          />

          <div className="relative max-w-sm flex items-center">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#ABABAB] pointer-events-none" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-8 py-2 bg-transparent text-[#ABABAB] border border-[#1F1F1F] outline-none placeholder:italic rounded-lg w-[200px] lg:w-[277px]"
            />
          </div>
          <div className="flex cursor-pointer items-center gap-2 bg-none border border-[#1F1F1F] p-2 rounded-lg hover:bg-[#FFFFFF1A]">
            <Pencil size={14} color="#F3F5FF" />
            <Button className={"text-sm text-[#F3F5FF]"}>Create Courses</Button>
          </div>

          <div
            className="flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-lg cursor-pointer"
            onClick={account ? disconnectWallet : undefined}
          >
            <Image
              src={Avatar}
              width={25}
              height={25}
              className="rounded-full"
              alt="Avatar"
            />
            <span className="text-sm text-[#F3F5FF]">
              {account ? account : "Not connected"}
            </span>
            <MoreVertical className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 px-4 sm:px-6">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium py-2",
                  pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#ABABAB] placeholder:italic pointer-events-none" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 py-2 bg-transparent text-[#ABABAB] border border-[#1F1F1F] outline-none placeholder:font rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between bg-[#161716] p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Image
                  src={Avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="text-sm text-[#F3F5FF]">
                  {account ? account : "Not connected"}
                </span>
              </div>
              <MoreVertical className="h-5 w-5 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
