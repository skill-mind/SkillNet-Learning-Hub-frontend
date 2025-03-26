"use client";
import React, { useState, useRef } from "react";
import { PlusIcon, X } from "lucide-react";
import CourseSection from "./CourseSection";
import { FaChevronDown } from "react-icons/fa6";

interface MediaUploadProps {
  onUpload?: (file: File) => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onUpload }) => {
  const [sections, setSections] = useState([1]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const addSection = () => {
    setSections([...sections, sections.length + 1]);
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("$24");
  const [access, setAccess] = useState<string>("Paid Course");
  const [certification, setCertification] = useState<string>("Yes");
  const [skills, setSkills] = useState<string[]>(["Front-End"]);
  const [newSkill, setNewSkill] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (onUpload) {
        onUpload(files[0]);
      }
      const url = URL.createObjectURL(files[0]);
      setPreviewUrl(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="w-full text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div className="flex flex-col space-y-4">
          <div
            className="bg-gray-300/50 h-48 flex flex-col gap-1 items-center justify-center cursor-pointer"
            onClick={handleUploadClick}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*"
            />
            <div className="text-xs">Upload Image</div>
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="h-full w-full object-contain rounded-md"
              />
            ) : (
              <div className="border border-dashed border-[#2D2E2D] rounded-full w-12 h-12 flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">Course title*</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Design made simple"
                className="bg-transparent border-[#2D2E2D] rounded-md p-3 w-full border"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">
                Course description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your cover letter"
                rows={12}
                className="bg-transparent border border-[#2D2E2D] rounded-md p-3 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <button className="w-full bg-[#D0EFB1] text-gray-900 py-3 rounded-md text-sm font-medium">
            PUBLISH FOR $50
          </button>

          <button className="w-fullbg-transparent border border-[#2D2E2D] text-gray-200 py-3 rounded-md text-sm font-medium">
            ADD TO DRAFT
          </button>

          <div className="space-y-4 mt-2">
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">Course price*</label>
              <div className="relative">
                <input
                  placeholder="Course price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-transparent border border-[#2D2E2D] rounded-md p-3 text-sm appearance-none pr-8"
                ></input>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">Access*</label>
              <div className="relative">
                <select
                  value={access}
                  onChange={(e) => setAccess(e.target.value)}
                  className="w-full bg-transparent border border-[#2D2E2D] rounded-md p-3 text-sm appearance-none pr-8  
                  [&>option]:bg-[#101110]
                  [&>option]:text-[#D9D9D9]
                  [&>option:hover]:bg-[#696969]
                  [&>option:checked]:bg-[#101110]
                  [&>option:checked]:text-[#FCFCFC]"
                >
                  <option value="Paid Course">Paid Course</option>
                  <option value="Free Course">Free Course</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaChevronDown />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">
                Skills you will gain
              </label>
              <div className="flex flex-wrap gap-2 p-2 bg-transparent border border-[#2D2E2D] rounded-md">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-transparent border border-[#2D2E2D] rounded-md px-2 py-1 text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-2 text-gray-400 hover:text-gray-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <div className="flex">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add skill"
                    className="bg-transparent border-none text-sm focus:outline-none"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                  />
                  <button
                    onClick={handleAddSkill}
                    className="text-gray-400 hover:text-gray-200 ml-1"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">Certification*</label>
              <div className="relative">
                <select
                  value={certification}
                  onChange={(e) => setCertification(e.target.value)}
                  className="w-full bg-transparent border border-[#2D2E2D] rounded-md p-3 text-sm appearance-none pr-8  [&>option]:bg-[#101110]
                  [&>option]:text-[#D9D9D9]
                  [&>option:hover]:bg-[#696969]
                  [&>option:checked]:bg-[#101110]
                  [&>option:checked]:text-[#FCFCFC]"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaChevronDown />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-400">Add file</label>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center p-2 border border-[#2D2E2D] rounded-md text-sm hover:bg-gray-700"
              >
                Add file
                <FaChevronDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-transparent px-4">
        {sections.map((sectionNumber, index) => (
          <CourseSection
            key={index}
            initialSectionNumber={sectionNumber}
            onAddSection={addSection}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaUpload;
