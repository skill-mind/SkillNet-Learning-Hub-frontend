import React, { useState } from "react";
import { PlusIcon, PencilIcon } from "lucide-react";

interface SectionProps {
  initialSectionNumber?: number;
  onAddSection?: () => void;
}
interface FormField {
  id: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  isTextarea?: boolean;
}

interface Section {
  id: number;
  isCollapsed: boolean;
  title: string;
}

const CourseBuilder: React.FC<SectionProps> = ({
  initialSectionNumber = 1,
  onAddSection,
}) => {
  const [sections, setSections] = useState<Section[]>([
    { id: 1, isCollapsed: false, title: "" },
  ]);

  const formFields: FormField[] = [
    {
      id: "lectureTitle",
      label: "Lecture title*",
      placeholder: "Enter lecture title",
      isRequired: true,
    },
    {
      id: "duration",
      label: "Duration*",
      placeholder: "1hrs",
      isRequired: true,
    },
    {
      id: "notes",
      label: "Notes*",
      placeholder: "Note description",
      isRequired: true,
      isTextarea: true,
    },
    { id: "quizTitle", label: "Quiz", placeholder: "Enter title" },
    {
      id: "quizDescription",
      label: "",
      placeholder: "Quiz description",
      isTextarea: true,
    },
    {
      id: "exercise",
      label: "Exercise",
      placeholder: "Enter exercise details",
      isTextarea: true,
    },
    {
      id: "assignment",
      label: "Assignment",
      placeholder: "Enter assignment details",
      isTextarea: true,
    },
  ];

  const handleAddSection = () => {
    const updatedSections = sections.map((section) => ({
      ...section,
      isCollapsed: true,
    }));

    setSections([
      ...updatedSections,
      { id: sections.length + 1, isCollapsed: false, title: "" },
    ]);
  };

  const toggleCollapse = (id: number) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? { ...section, isCollapsed: !section.isCollapsed }
          : section
      )
    );
  };

  const handleTitleChange = (id: number, value: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, title: value } : section
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.id} className="w-full bg-[#161716] rounded-lg">
          {section.isCollapsed ? (
            <div className="flex flex-col">
              <div className="px-4 sm:px-6 py-4">
                <h2 className="text-sm font-normal text-gray-300">
                  Section {section.id}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 border-t border-[#252625]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <img
                      src="/api/placeholder/200/150"
                      alt="Lecture thumbnail"
                      className="w-full sm:w-[116px] h-auto sm:h-[88px] rounded-lg border-4 border-white/10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="text-xs text-white font-medium px-2 py-1 bg-black/50 rounded-sm">
                        Add Video
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-3 sm:mt-0 w-full sm:w-auto">
                    <span className="text-sm text-gray-300">
                      Lecture title*
                    </span>
                    <span className="text-sm text-gray-500 truncate max-w-full sm:max-w-xs md:max-w-md">
                      {section.title || "Enter lecture title"}
                    </span>
                    <div className="flex items-center gap-6 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">Duration*</span>
                        <span className="text-xs text-gray-300">1hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-gray-400 hover:text-white mt-4 sm:mt-0"
                  onClick={() => toggleCollapse(section.id)}
                >
                  <PencilIcon size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-[24px]">
              <div className="mb-4 pb-2">
                <h2 className="text-sm font-normal text-gray-300">
                  Section {section.id}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start mb-6 gap-4 sm:gap-0">
                <div className="w-full sm:w-[218px] h-auto sm:h-[144px] flex flex-col items-center sm:mr-4 border-dashed border border-[#2D2E2D] p-4 sm:p-[24px] rounded-md">
                  <button className="text-white rounded-md px-2 py-1 text-xs mb-4">
                    Add Video
                  </button>
                  <div className="w-8 h-8 rounded-full bg-[#2D2E2D] flex items-center justify-center">
                    <PlusIcon size={16} />
                  </div>
                </div>

                <div className="flex-1 space-y-4 w-full">
                  {formFields.map((field, index) => (
                    <div key={field.id} className="space-y-1">
                      {field.label && (
                        <label
                          htmlFor={`${field.id}-${section.id}`}
                          className="block text-sm text-gray-300"
                        >
                          {field.label}
                        </label>
                      )}
                      {field.isTextarea ? (
                        <textarea
                          id={`${field.id}-${section.id}`}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent border border-[#252625] rounded p-2 text-sm h-24 text-gray-300"
                          required={field.isRequired}
                        />
                      ) : (
                        <input
                          type="text"
                          id={`${field.id}-${section.id}`}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent border border-[#252625] rounded p-2 text-sm text-gray-300"
                          required={field.isRequired}
                          onChange={
                            index === 0
                              ? (e) =>
                                  handleTitleChange(section.id, e.target.value)
                              : undefined
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-center mt-4">
        <button
          onClick={handleAddSection}
          className="flex items-center justify-center border border-[#252625] bg-transparent hover:bg-gray-700 text-white rounded-md px-4 py-2 text-sm"
        >
          <PlusIcon size={16} className="mr-2" />
          ADD SECTION
        </button>
      </div>
    </div>
  );
};

export default CourseBuilder;
