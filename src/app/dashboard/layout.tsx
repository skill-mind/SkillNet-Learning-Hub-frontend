// import React from "react";
// import Navbar from "@/app/dashboard/Navbar";
// import Sidebar from "@/app/dashboard/sidebar";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex flex-col min-h-screen bg-black">
//       <Navbar />
//       <div className="flex flex-1 mt-[80px]"> {/* Adjust margin-top to account for fixed navbar height */}
//         <Sidebar />
//         <main className="flex-1 p-4 bg-black">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

"use client"

import React, { useState } from "react";
import Navbar from "@/app/dashboard/Navbar";
import Sidebar from "@/app/dashboard/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 mt-[64px] md:mt-[80px]"> {/* Adjust margin-top for mobile and desktop */}
        {/* Sidebar */}
        <aside
          className={`
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            transition-transform duration-300 ease-in-out
            w-72 md:w-72
            fixed md:static
            top-[64px] md:top-0
            left-0
            bottom-0
            z-40 md:z-0
          `}
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-black w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
