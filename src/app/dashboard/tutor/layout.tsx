"use client";

import { useState } from "react";
import Header from "./component/DashboardHeader";
import { Sidebar } from "./component/TutorDashboardSidebar";
import DashBoardContextProvider from "@/app/useContext/dashboardContext";
import { Logs } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <DashBoardContextProvider>
      <main className="bg-[#101110] h-[90vh] max-h-screen">
        <Header />
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden px-8"
        >
          <Logs size={30} className="text-white" />
        </div>
        <div className="flex h-[100%] text-white overflow-y-auto scrollbar-hide scroll-smooth">
          {isSidebarOpen && (
            <section className="">
              {" "}
              <Sidebar />
            </section>
          )}

          <section className=" hidden md:block">
            {" "}
            <Sidebar />
          </section>

          <main className="flex-grow overflow-y-scroll scrollbar-hide h-auto hide-scrollbar">
            {children}
          </main>
        </div>
      </main>
    </DashBoardContextProvider>
  );
};

export default Layout;
