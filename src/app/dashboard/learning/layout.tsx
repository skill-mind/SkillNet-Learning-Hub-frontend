"use client"

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "./components/LearningNav";
import SideBar from "./components/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 

  const hideNavbarAndSidebar = pathname === "/dashboard/learning/class";

  return (
    <section>
      {!hideNavbarAndSidebar && <Navbar />}
      <main className={`min-h-screen text-[#D9D9D9] ${hideNavbarAndSidebar ? "px-8" : "sm:px-8 grid grid-cols-[1fr_5fr] gap-4"}`}>
        {!hideNavbarAndSidebar && <SideBar />}
        <div className="overflow-y-auto scrollbar-hide scroll-smooth">
          {children}
        </div>
      </main>
    </section>
  );
}
