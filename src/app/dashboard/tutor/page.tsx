"use client";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import Tutor from "./tutor/tutor";
import Student from "./students/students";
import Notification from "./notification/notification";
import Profile from "./profile/profile";
import Course from "./courses/courses";
import Earnings from "./earnings/earnings";
import Support from "./support/support";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  return (
    <div className="overflow-y-auto scrollbar-hide scroll-smooth">
      {activeSection === "home" && <Tutor />}
      {activeSection === "students" && <Student />}
      {activeSection === "notifications" && <Notification />}
      {activeSection === "courses" && <Course />}
      {activeSection === "earnings" && <Earnings />}
      {activeSection === "support" && <Support />}
      {activeSection === "profile" && <Profile />}
    </div>
  );
}

export default Page;
