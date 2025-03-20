"use client";

import { usePathname } from "next/navigation";
import { Book } from "@/svg/book";
import { HomeIcon } from "@/svg/home";
import { Notification } from "@/svg/notification";
import { SupportIcon } from "@/svg/support-icon";
import { WishList } from "@/svg/wish-list";
import { User } from "lucide-react";
import Link from "next/link";

function SideBar() {
  const path = usePathname();
  return (
    <nav className="h-[500px] max-h-[600px] flex justify-between p-6 flex-col font-normal text-lg bg-[#161716]">
      <ul className="gap-3 grid">
        <Link
          href="/dashboard/learning"
          className={`${
            path == "/dashboard/learning" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <HomeIcon />
          <span className="sm:block hidden">Home</span>
        </Link>
        <Link
          href="/dashboard/learning/my-courses"
          className={`${
            path == "/dashboard/learning/my-courses" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <Book />
          <span className="sm:block hidden">My Courses</span>
        </Link>
        <Link
          href="/dashboard/learning/wish-list"
          className={`${
            path == "/dashboard/learning/wish-list" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <WishList />
          <span className="sm:block hidden">Wish List</span>
        </Link>
        <Link
          href="/dashboard/learning/notification"
          className={`${
            path == "/dashboard/learning/notification" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <Notification />
          <span className="sm:block hidden">Notification</span>
        </Link>
      </ul>
      <ul className="gap-3 grid">
        <Link
          href="/dashboard/learning/profile"
          className={`${
            path == "/dashboard/learning/profile" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <User />
          <span className="sm:block hidden">Profile</span>
        </Link>
        <Link
          href="/dashboard/learning/supports"
          className={`${
            path == "/dashboard/learning/supports" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <SupportIcon />
          <span className="sm:block hidden">Support</span>
        </Link>
        <button
          className={`${
            path == "ai-chat-bot" ? "bg-[#2D2E2D]" : ""
          } flex items-center gap-4 hover:bg-[#2D2E2D] rounded-md p-2`}
        >
          <SupportIcon />
          <span className="sm:block hidden">AI chat bot</span>
        </button>
      </ul>
    </nav>
  );
}
export default SideBar;
