// src/app/dashboard/student/notification/page.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessagesTab } from "../components/NotificationsTabs/MessagesTab";
import { AnnouncementsTab } from "../components/NotificationsTabs/AnnouncementsTab";
import { NewRequestsTab } from "../components/NotificationsTabs/NewRequestsTab";
import { PaymentsTab } from "../components/NotificationsTabs/PaymentsTab";
import { TabButtons } from "../components/NotificationsTabs/TabButtons";

// Components

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("Messages");
  const pathname = usePathname();

  return (
    <div className="min-h-screen  max-w-[1000px] ">
      {/* Tabs Navigation */}
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Area */}
      <div className="mx-auto px-4 ">
        {activeTab === "Messages" && <MessagesTab />}
        {activeTab === "Payments" && <PaymentsTab />}
        {activeTab === "Announcements" && <AnnouncementsTab />}
        {activeTab === "New Requests" && <NewRequestsTab />}
      </div>
    </div>
  );
};

export default NotificationPage;
