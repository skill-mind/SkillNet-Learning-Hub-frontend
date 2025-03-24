"use client";
import { useState } from "react";
import { Header } from "./components/Header";
import { VideoPlayer } from "./components/VideoPlayer";
import { ContentTracker } from "./components/ContentTracker";
import { NavigationTabs } from "./components/NavigationTabs";
import { Overview } from "./components/Overview";
import { Resources } from "./components/Resources";
import { Task } from "./components/Task";
import { Summary } from "./components/Summary";

const MOCK_LESSONS = [
  { title: "Lesson 1: Intro to Digital Technology", duration: "5 min" },
  { title: "Lesson 2: Understanding Blockchain Basics", duration: "5 min" },
  { title: "Lesson 3: Cryptography Fundamentals", duration: "5 min" },
  { title: "Lesson 4: Smart Contracts Introduction", duration: "5 min" },
  { title: "Lesson 5: DApp Development Basics", duration: "5 min" },
];

const TABS = [
  { label: "Overview", isActive: true },
  { label: "Resources", isActive: false },
  { label: "Task", isActive: false },
  { label: "Summary", isActive: false },
];

const TUTOR = {
  name: "Satoshi Nakamoto",
  role: "Front-End Developer",
  avatar:
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop",
};

export default function ClassPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState(TABS);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setTabs(tabs.map((tab, i) => ({ ...tab, isActive: i === index })));
  };

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-[100px] pb-6 sm:pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Header
              courseTitle="Blockchain Development Bootcamp: Zero to Hero"
              subTitle="Intro to Digital Technology"
            />
            <VideoPlayer thumbnailUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1920" />

            <NavigationTabs tabs={tabs} onTabChange={handleTabChange} />

            {activeTab === 0 && <Overview canEdit={true} />}
            {activeTab === 1 && <Resources />}
            {activeTab === 2 && <Task canEdit={true} />}
            {activeTab === 3 && <Summary canEdit={true} />}
          </div>

          <div className="lg:col-span-1">
            <ContentTracker
              moduleNumber={1}
              lessons={MOCK_LESSONS}
              tutorName={TUTOR.name}
              tutorRole={TUTOR.role}
              tutorAvatar={TUTOR.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
