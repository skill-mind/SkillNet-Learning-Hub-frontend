"use client";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import Tutor from "./tutor/tutor";
import Student from "./students/students";
import Notification from "./notification/notification";
import Profile from "./profile/profile";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  return (
    <div className="overflow-y-auto scrollbar-hide scroll-smooth">
      {activeSection === "home" && <Tutor />}
      {activeSection === "students" && <Student />}
      {activeSection === "notifications" && <Notification />}
      {activeSection === "courses" && "courses"}
      {activeSection === "earnings" && "earnings"}
      {activeSection === "support" && "support"}
      {activeSection === "profile" && <Profile />}
    </div>
  );
}

export default Page;
