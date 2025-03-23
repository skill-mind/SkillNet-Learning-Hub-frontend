"use client";
import { Edit2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";
import { EditModal } from "./EditModal";

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
    
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    
  const [taskContent, setTaskContent] = useState(`Research & Write:

• Provide a brief history of digital technology, starting from early computing devices to modern-day innovations (e.g., AI, blockchain, IoT).
• Identify and discuss three major technological breakthroughs that have significantly impacted businesses, education, and daily life.
• Explain how digital technology has transformed communication, entertainment, and the workplace.

Submission

• Format: PDF or DOCX
• Submission Method: Upload via the course portal`);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveTask = (newContent: string) => {
    setTaskContent(newContent);
  };

  return (
    <>
      <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Tasks</h2>
          {canEdit && (
            <button
              onClick={handleOpenEditModal}
              className="flex items-center gap-2 text-[#767776] hover:text-white border border-[#373737] rounded-full px-4 py-2"
            >
              <Edit2 size={16} />
              <span className="text-sm">Edit</span>
            </button>
          )}
        </div>
        <hr className="border-[#292929] my-4" />

        <div className="space-y-4 mb-8 whitespace-pre-line text-[#D9D9D9] text-[14px]">
          {taskContent}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#767776]">
            Student Submissions
          </h3>
          <div className="space-y-3">
            {MOCK_SUBMISSIONS.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between p-4 border border-[#252625] hover:bg-[#1D1E1D] transition-all duration-200 rounded-lg cursor-pointer"
                onClick={() => setSelectedSubmission(submission)}
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
                <div className="text-[#767776]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedSubmission && (
        <DownloadModal
          isOpen={selectedSubmission !== null}
          onClose={() => setSelectedSubmission(null)}
          userName={selectedSubmission.user.name}
          taskName={selectedSubmission.taskName}
        />
      )}

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Task"
        content={taskContent}
        onSave={handleSaveTask}
      />
    </>
  );
};
