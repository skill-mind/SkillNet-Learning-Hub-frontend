"use client";
import { Edit2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

interface Submission {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  taskName: string;
  duration: string;
}

interface TaskProps {
  onEdit?: () => void;
  canEdit?: boolean;
}

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: 1,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop",
    },
    taskName: "Research & Write Task",
    duration: "5 min",
  },
  {
    id: 2,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop",
    },
    taskName: "Research & Write Task",
    duration: "5 min",
  },
  {
    id: 3,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop",
    },
    taskName: "Research & Write Task",
    duration: "5 min",
  },
  {
    id: 4,
    user: {
      name: "Johnny Drill",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop",
    },
    taskName: "Research & Write Task",
    duration: "5 min",
  },
];

export const Task = ({ onEdit, canEdit = false }: TaskProps) => {
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);

  return (
    <>
      <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Tasks</h2>
          {canEdit && (
            <button
              onClick={onEdit}
              className="flex items-center gap-2 text-[#767776] hover:text-white border border-[#373737] rounded-full px-4 py-2"
            >
              <Edit2 size={16} />
              <span className="text-sm">Edit</span>
            </button>
          )}
        </div>
        <hr className="border-[#292929] my-4" />

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-medium text-[#767776]">
            Research & Write:
          </h3>
          <ul className="space-y-4 text-[#D9D9D9] text-[14px]">
            <li className="flex gap-2">
              <span className="text-[#767776]">•</span>
              <span>
                Provide a brief history of digital technology, starting from
                early computing devices to modern-day innovations (e.g., AI,
                blockchain, IoT).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#767776]">•</span>
              <span>
                Identify and discuss three major technological breakthroughs
                that have significantly impacted businesses, education, and
                daily life.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#767776]">•</span>
              <span>
                Explain how digital technology has transformed communication,
                entertainment, and the workplace.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-medium text-[#767776]">Submission</h3>
          <ul className="space-y-4 text-[#D9D9D9] text-[14px]">
            <li className="flex gap-2">
              <span className="text-[#767776]">•</span>
              <span>Format: PDF or DOCX</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#767776]">•</span>
              <span>Submission Method: Upload via the course portal</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#767776]">
            Student Submissions
          </h3>
          <div className="space-y-3">
            {MOCK_SUBMISSIONS.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between p-4 border border-[#252625] hover:bg-[#1D1E1D] transition-all duration-200 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#252625]">
                    <Image
                      src={submission.user.avatar}
                      alt={submission.user.name}
                      width={40}
                      height={40}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-[#A2A2A2] text-[14px]">
                      {submission.user.name}
                    </h4>
                    <p className="text-[#F3F5FF] text-[12px]">
                      {submission.taskName}
                    </p>
                    <p className="text-[#BABABA] text-[12px]">
                      {submission.duration}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSubmission(submission)}
                  className="flex items-center gap-2 text-[#A8C789] hover:text-[#b3e085] border border-[#2D2E2D] bg-[#101110] rounded-lg py-1 px-2 text-[12px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66699 6.66667L8.00033 10L11.3337 6.66667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10V2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        userName={selectedSubmission?.user.name || ""}
        taskName={selectedSubmission?.taskName || ""}
      />
    </>
  );
};
