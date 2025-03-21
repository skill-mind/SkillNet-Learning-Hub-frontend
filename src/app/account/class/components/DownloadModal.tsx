"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  taskName: string;
}

export const DownloadModal = ({
  isOpen,
  onClose,
  userName,
  taskName,
}: DownloadModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg w-full max-w-xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#292929]">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-[#767776] hover:text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-white text-lg font-medium">
              Download PDF File
            </h2>
          </div>
          <button onClick={onClose} className="text-[#767776] hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-[#D9D9D9] text-center">
            Do you want to download {userName}&apos;s &apos;{taskName}&apos;?
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/pdf.svg"
              alt="PDF file"
              width={100}
              height={100}
              className="w-24 h-24"
            />
          </div>
          <button
            onClick={onClose}
            className="w-full bg-[#D0EFB1] hover:bg-[#b3e085] text-[#161716] font-medium py-3 rounded-lg transition-colors"
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  );
};
