"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookText, NotepadText } from "lucide-react";
import Image from "next/image";
import glob from "@/svg/Vector.svg";
import videoCircle from "@/svg/video.svg";

// Types for our content
type ContentType = "video" | "article" | "assessment";

interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  completed?: boolean;
}

interface ModuleProps {
  id: string;
  title: string;
  videoCount: number;
  assessmentCount: number;
  articleCount: number;
  contents: ContentItem[];
}

const TutorsAndFacilitatorss = () => {
  // Course instructor info
  const instructor = {
    name: "Satoshi Nakamoto",
    stats: [
      { count: 24, label: "Videos" },
      { count: 10, label: "Assessments" },
      { count: 5, label: "Articles" },
    ],
  };

  // Sample module data
  const modules: ModuleProps[] = [
    {
      id: "module-1",
      title: "Blockchain Fundamentals",
      videoCount: 3,
      assessmentCount: 1,
      articleCount: 1,
      contents: [
        { id: "content-1", title: "What is Blockchain", type: "video" },
        {
          id: "content-2",
          title: "Who created cryptocurrency",
          type: "video",
        },
        {
          id: "content-3",
          title: "Satoshi Nakamoto White Paper",
          type: "article",
        },
        {
          id: "content-4",
          title: "Distributed Ledgers & Layers",
          type: "video",
          completed: true,
        },
        {
          id: "content-5",
          title: "Assessment",
          type: "assessment",
          completed: true,
        },
      ],
    },
    {
      id: "module-2",
      title: "Blockchain Fundamentals",
      videoCount: 3,
      assessmentCount: 1,
      articleCount: 1,
      contents: [
        { id: "content-1", title: "What is Blockchain", type: "video" },
        {
          id: "content-2",
          title: "Who created cryptocurrency",
          type: "video",
        },
        {
          id: "content-3",
          title: "Satoshi Nakamoto White Paper",
          type: "article",
        },
        {
          id: "content-4",
          title: "Distributed Ledgers & Layers",
          type: "video",
          completed: true,
        },
        {
          id: "content-5",
          title: "Assessment",
          type: "assessment",
          completed: true,
        },
      ],
    },
    {
      id: "module-3",
      title: "Blockchain Fundamentals",
      videoCount: 3,
      assessmentCount: 1,
      articleCount: 1,
      contents: [
        { id: "content-1", title: "What is Blockchain", type: "video" },
        {
          id: "content-2",
          title: "Who created cryptocurrency",
          type: "video",
        },
        {
          id: "content-3",
          title: "Satoshi Nakamoto White Paper",
          type: "article",
        },
        {
          id: "content-4",
          title: "Distributed Ledgers & Layers",
          type: "video",
          completed: true,
        },
        {
          id: "content-5",
          title: "Assessment",
          type: "assessment",
          completed: true,
        },
      ],
    },
    {
      id: "module-4",
      title: "Blockchain Fundamentals",
      videoCount: 3,
      assessmentCount: 1,
      articleCount: 1,
      contents: [
        { id: "content-1", title: "What is Blockchain", type: "video" },
        {
          id: "content-2",
          title: "Who created cryptocurrency",
          type: "video",
        },
        {
          id: "content-3",
          title: "Satoshi Nakamoto White Paper",
          type: "article",
        },
        {
          id: "content-4",
          title: "Distributed Ledgers & Layers",
          type: "video",
          completed: true,
        },
        {
          id: "content-5",
          title: "Assessment",
          type: "assessment",
          completed: true,
        },
      ],
    },
  ];

  // State to track which modules are expanded
  const [expandedModules, setExpandedModules] = useState<{
    [key: string]: boolean;
  }>({
    "module-1": true,
  });

  // Toggle module expansion
  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <div className="bg-none text-white p-4">
      {/* Instructor Information */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">{instructor.name}</h2>
        <div className=" flex gap-4 text-gray-400 text-sm mt-1">
          {instructor.stats.map((stat, index) => (
            <div className="cursor-pointer flex gap-4lex gap-1">
              <Image src={glob} alt="Icon" width={16} height={16} />
              <span>
                {stat.count} {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules */}
      <div className="space-y-2">
        {modules.map((module) => (
          <div
            key={module.id}
            className="border border-gray-800 rounded-md overflow-hidden"
          >
            {/* Module Header */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer border border-[#161716] bg-[#161716]"
              onClick={() => toggleModule(module.id)}
            >
              <div>
                <h3 className="font-medium">{module.title}</h3>
                <div className="flex gap-4 text-xs text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Image
                      src={videoCircle}
                      alt="video circle"
                      height={12}
                      width={12}
                      className="text-gray-400"
                    />
                    {module.videoCount} Videos
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <NotepadText size={12} />
                    {module.assessmentCount} Assessment
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <BookText size={12} />
                    {module.articleCount} Article
                  </span>
                </div>
              </div>
              {expandedModules[module.id] ? (
                <ChevronUp size={18} className="text-gray-400" />
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </div>

            {/* Module Content */}
            {expandedModules[module.id] && module.contents.length > 0 && (
              <div className="p-4 border-t border-gray-800 bg-[#161716]">
                <ul className="space-y-2">
                  {module.contents.map((content) => (
                    <li
                      key={content.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      {content.type === "video" ? (
                        <Image
                          src={videoCircle}
                          alt="video circle"
                          height={14}
                          width={14}
                          className="text-gray-400"
                        />
                      ) : content.type === "article" ? (
                        <BookText size={14} className="text-gray-400" />
                      ) : (
                        <NotepadText size={14} className="text-gray-400" />
                      )}
                      <span className={"text-gray-300"}>{content.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsAndFacilitatorss;
