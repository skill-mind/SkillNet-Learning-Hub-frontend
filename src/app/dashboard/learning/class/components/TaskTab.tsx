"use client";

import React from "react";
import { useState } from "react";

const TaskTab = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  return (
    <div className="bg-[#161716] p-6 rounded-[12px]">
      <h2 className=" border-b border-[#292929] py-2 font-medium text-[18px]">
        Task
      </h2>

      <div className="border-b border-[#292929] py-[4rem] mb-[2rem]">
        <h3 className="text-[#D9D9D9] font-medium text-[18px] mb-[1rem]">
          Research & Write:
        </h3>{" "}
        <ul className="list-disc ml-4 space-y-4 text-[#D9D9D9]">
          {[
            "Provide a brief history of digital technology, starting from early computing devices to modern-day innovations (e.g., AI, blockchain, IoT).",
            "Identify and discuss three major technological breakthroughs that have significantly impacted businesses, education, and daily life.",
            "Explain how digital technology has transformed communication, entertainment, and the workplace.",
          ].map((text, index) => (
            <li
              key={index}
              className="ml-2 font-normal text-[14px] md:text-[16px] leading-[24px]"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-b border-[#292929] pb-[1rem] mb-[2rem]">
        <h3 className="text-[#767776] font-medium text-[18px] mb-[1rem]">
          Submission
        </h3>{" "}
        <ul className="list-disc ml-4 space-y-2 text-[#D9D9D9]">
          {[
            "Format: PDF or DOCX",
            "Submission Method: Upload via the course portal",
          ].map((text, index) => (
            <li
              key={index}
              className="ml-2 font-normal text-[14px] md:text-[16px] leading-[24px]"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[#767776] font-medium text-[18px] mb-[1rem]">
          Submit Here
        </h3>{" "}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-[14px] md:*:text-[16px] block mb-2">Add File</label>
          <div className="text-[#9596A0] text-[14px] font-normal border p-2 rounded-[8px] border-[#252625]">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="px-3 py-1 bg-[#252625] text-white rounded-md cursor-pointer text-sm"
            >
              Add
            </label>
            <span className="ml-4 text-gray-500 truncate">
              {file ? file.name : "No file selected"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTab;
