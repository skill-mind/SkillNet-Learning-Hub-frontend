"use client";

import { useState } from "react";
import { X,ArrowLeft} from "lucide-react";
import { Plus } from "lucide-react";
import SectionOverview from "./SectionOverview";

interface Question {
  title: string;
  sectionImage: string;
  durration: string;
}

interface CreateCourseModelProps {
  onClose: () => void;
  isOpen: boolean;
}

function CreateCourseModel({ onClose, isOpen }: CreateCourseModelProps) {
  const [hovered, setHovered] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [certification, setCertification] = useState<string>("Yes");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newOptions, setNewOptions] = useState<string[]>(["", "", "", ""]);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [examName, setExamName] = useState<string>("");
  const [examDescription, setExamDescription] = useState<string>("");
  const [candidateEligibility, setCandidateEligibility] =
    useState<string>("SC");

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItem: string = `Button ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleCertificationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCertification(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //form submission,
    const formData = {
      examName,
      examDescription,
      candidateEligibility,
      items,
      files,
      certification,
    };
    console.log(formData);
  };
  const handleAddQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      newQuestion.trim() !== "" &&
      newAnswer.trim() !== "" &&
      newOptions.every((option) => option.trim() !== "")
    ) {
      const question: Question = {
        title: newQuestion,
        durration: '',
        sectionImage: '',
      };
      setQuestions([...questions, question]);
      setNewQuestion("");
      setNewOptions(["", "", "", ""]);
      setNewAnswer("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-full relative h-auto flex bg-inherit transition-all duration-300 flex-col p-5 overflow-x-hidden">
      <div className="flex justify-start -top-4 left-5 mb-2">
        <button onClick={onClose}>
          <ArrowLeft className="text-4xl" color="white" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="md:flex w-full space-y-5 md:space-y-0 gap-4">
            <div className="flex flex-col w-full md:w-[60%] gap-[20px]">
              <div
                className="w-full h-52 border border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center bg-[#121212] hover:border-gray-400 transition-colors"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <p className="text-gray-300 mb-3">Upload Image</p>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#2a2a2a] ${
                    hovered ? "bg-gray-500" : ""
                  } transition-colors`}
                >
                  <Plus className="text-gray-200" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examName"
                >
                  Course title*
                </label>
                <input
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  type="text"
                  name="examName"
                  id="examName"
                  placeholder="Design made simple"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examDescription"
                >
                  Course Description
                </label>
                <textarea
                  id="examDescription"
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] h-full min-h-[176px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  placeholder="Write your cover letter"
                  value={examDescription}
                  onChange={(e) => setExamDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[24px] md:w-[40%]">
              <button className="text-[#0E0F0E] bg-[#D0EFB1] py-3 text-center rounded-lg">
                Publish For $50
              </button>
              <button className="text-[#D6DFFE] bg-[#2D2E2D] py-3 text-center rounded-lg">
                Add to draft
              </button>
              <div className="flex w-full flex-col items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="courseAmount"
                >
                  Course amount*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-3 py-2 rounded-[0.5rem]"
                  value={candidateEligibility}
                  onChange={(e) => setCandidateEligibility(e.target.value)}
                >
                  <option className="bg-[#161716]" value="24">
                    $24
                  </option>
                  <option className="bg-[#161716]" value="45">
                    $45
                  </option>
                </select>
              </div>
              <div className="flex w-full flex-col items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="candidateEligibility"
                >
                  Access*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full  px-3 py-2 rounded-[0.5rem]"
                  value={candidateEligibility}
                  onChange={(e) => setCandidateEligibility(e.target.value)}
                >
                  <option className="bg-[#161716]" value="SC">
                    Paid Course
                  </option>
                  <option className="bg-[#161716]" value="MC">
                    Free Exam
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="courseCategory"
                >
                  Skills you wll gain
                </label>
                <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.30rem] rounded-[0.5rem]">
                  <div className="flex flex-row items-center">
                    {/* Buttons moved to left side with reduced gap */}
                    <div className="flex flex-row gap-2 mr-3">
                      <button
                        onClick={handleAddItem}
                        className="bg-transparent text-white px-2 border-[#252625] border rounded-[8px]"
                      >
                        button x
                      </button>
                      <button
                        onClick={handleAddItem}
                        className="bg-transparent text-white px-2 border-[#252625] border rounded-[8px]"
                      >
                        Add
                      </button>
                    </div>

                    {/* Scrollable items container */}
                    <div
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                      className="overflow-x-scroll flex gap-[8px] flex-grow"
                    >
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="bg-transparent text-white gap-2 flex items-center flex-none px-2 border-[#252625] border rounded-[8px]"
                        >
                          {item}
                          <X size={14} color="white" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[5px] items-stretch">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="certification"
                >
                  Certification*
                </label>
                <select
                  className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full  px-3 py-2 rounded-[0.5rem]"
                  value={certification}
                  onChange={handleCertificationChange}
                >
                  <option className="bg-[#161716]" value="Yes">
                    Yes
                  </option>
                  <option className="bg-[#161716]" value="No">
                    No
                  </option>
                </select>
                {certification === "Yes" && (
                  <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.30rem] mt-2 rounded-[0.5rem]">
                    <div className="flex flex-row gap-5">
                      <div
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                        className="overflow-x-scroll flex gap-[8px]"
                      >
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="bg-transparent text-white px-2 flex flex-none border-[#252625] border rounded-[8px] items-center gap-2"
                          >
                            {file.name}
                            <button onClick={() => handleRemoveFile(index)}>
                              <X size={14} color="white" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleAddFile}
                        multiple
                      />
                      <label
                        htmlFor="fileInput"
                        className="bg-transparent text-white px-2 border-[#252625] border rounded-[8px] flex items-center gap-1 cursor-pointer"
                      >
                        Add file <X size={16} color="white" />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>

        {/* created questions section */}

        {questions.length > 0 && <SectionOverview />}

        {/* create question form */}
        <form className="bg-[#161716] rounded-[8px] gap-[24px] p-[24px] flex flex-row">
          {/* Left side - Add Video box */}

          <div className="flex-shrink-0">
            <h1 className="text-[#9596A0] text-[0.875rem] mb-4">Section 1</h1>
            <div
              className="w-64 h-40 border border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center bg-[#121212] hover:border-gray-400 transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p className="text-gray-300 mb-3">Add Video</p>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#2a2a2a] ${
                  hovered ? "bg-gray-500" : ""
                } transition-colors`}
              >
                <Plus className="text-gray-200" />
              </div>
            </div>
          </div>

          {/* Right side - Form fields */}
          <div className="flex-grow ml-6">
            <h1 className="text-[#9596A0] text-[0.875rem] mb-4">
              Lecture title*
            </h1>
            <div className="flex flex-col gap-8">
              <input
                className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                type="text"
                name=""
                placeholder="Enter lecture title"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-[#9596A0] text-[0.875rem] mb-1">
                  Duration *
                </h1>
                <div className="flex w-[30%] items-stretch">
                  <input
                    className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                    type="text"
                    placeholder="1hr"
                    value={newOptions[0]}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions];
                      updatedOptions[0] = e.target.value;
                      setNewOptions(updatedOptions);
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label
                  className="text-[#9596A0] text-[0.875rem] mb-1"
                  htmlFor="examDescription"
                >
                  Note*
                </label>
                <textarea
                  id="examDescription"
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] min-h-[176px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  placeholder="Note description"
                  value={examDescription}
                  onChange={(e) => setExamDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-[#9596A0] text-[0.875rem] mb-1">Quiz</h1>
                <div className="flex w-full items-stretch">
                  <input
                    className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                    type="text"
                    placeholder="Enter title"
                    value={newOptions[0]}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions];
                      updatedOptions[0] = e.target.value;
                      setNewOptions(updatedOptions);
                    }}
                  />
                </div>
                <textarea
                  id="examDescription"
                  className="bg-transparent placeholder:text-[#5E5E5E] border-[1px] min-h-[176px] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                  placeholder="Quiz description"
                  value={examDescription}
                  onChange={(e) => setExamDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-[#9596A0] text-[0.875rem] mb-1">
                  Excercise
                </h1>
                <div className="flex w-full items-stretch">
                  <input
                    className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                    type="text"
                    placeholder="Enter excercise details"
                    value={newOptions[0]}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions];
                      updatedOptions[0] = e.target.value;
                      setNewOptions(updatedOptions);
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-[#9596A0] text-[0.875rem] mb-1">
                  Assignment
                </h1>
                <div className="flex w-full items-stretch">
                  <input
                    className="bg-transparent border-[1px] placeholder:text-[#5E5E5E] outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.40rem] rounded-[0.5rem]"
                    type="text"
                    placeholder="Enter Assignment details"
                    value={newOptions[0]}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions];
                      updatedOptions[0] = e.target.value;
                      setNewOptions(updatedOptions);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" w-full mt-4 ml-36">
              <button
                onClick={handleAddQuestion}
                className="font-workSans py-[10px] px-[24px] font-medium bg-transparent rounded-[8px] border border-[#2D2E2D]"
              >
                <span className="font-black text-[#D6DFFE]">+</span> ADD SECTION
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCourseModel;
