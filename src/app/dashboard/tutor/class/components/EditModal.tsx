"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onSave: (content: string) => void;
}

export const EditModal = ({
  isOpen,
  onClose,
  title,
  content,
  onSave,
}: EditModalProps) => {
  const [editedContent, setEditedContent] = useState(content);

  // Reset the edited content when the modal is opened with new content
  useEffect(() => {
    if (isOpen) {
      setEditedContent(content);
    }
  }, [isOpen, content]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(editedContent);
    onClose();
  };

  // Prevent clicking inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#161716] border border-[#1D1D1C] rounded-lg w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-2 sm:mx-4 max-h-[90vh] flex flex-col"
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-[#292929]">
          <h2 className="text-white text-base sm:text-lg font-medium">Edit {title}</h2>
          <button
            onClick={onClose}
            className="text-[#767776] hover:text-white transition-colors"
          >
            <X size={20} className="size-10" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 space-y-4 flex-1 overflow-y-auto">
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="bg-[#2a2a2a] border-[#373737] text-white min-h-[200px] sm:min-h-[300px] w-full resize-none focus:border-[#4a4a4a] focus:ring-0 placeholder:text-[#767776]"
            placeholder={`Enter ${title.toLowerCase()} content here...`}
          />
        </div>

        {/* Footer with Save Button */}
        <div className="p-3 sm:p-4 border-t border-[#292929] flex justify-end">
          <button
            onClick={handleSave}
            className="bg-[#D0EFB1] hover:bg-[#b3e085] text-[#161716] text-sm sm:text-base font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}; 