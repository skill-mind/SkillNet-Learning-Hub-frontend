"use client";
import React, { useState } from "react";
import { ArrowLeft, X, CirclePlus } from "lucide-react";
import { Button } from "./ui/button";

interface EditSkillProps {
  onClose: () => void;
}

export default function EditSkill({ onClose }: EditSkillProps) {
  const [addedSkills, setAddedSkills] = useState<string[]>([]); // State to manage added skills
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // State to manage errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission loading

  const suggestedSkills = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Project Manager",
    "UI/UX Designer",
    "DevOps Engineer",
  ];

  // Function to add a skill
  const addSkill = (skill: string) => {
    if (!addedSkills.includes(skill)) {
      setAddedSkills([...addedSkills, skill]);
    }
  };

  // Function to remove a skill
  const removeSkill = (skill: string) => {
    setAddedSkills(addedSkills.filter((s) => s !== skill));
  };

  // Function to validate the form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (addedSkills.length === 0) {
      newErrors.skills = "At least one skill is required";
    }
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Replace with your API endpoint
      const response = await fetch("/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skills: addedSkills }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit skills");
      }

      // Handle successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting skills:", error);
      setErrors({ submit: "Failed to submit skills. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute inset-0 backdrop-blur-3xl top-0 left-0 w-full flex justify-center py-[100px]">
      <section className="bg-[#161716] max-w-[761px] w-full text-white p-[24px] rounded-[12px] border flex flex-col gap-[24px] border-[#40403E]">
        <div className="flex justify-between gap-[10px] w-full">
          <div className="flex space-x-1 items-center justtify-center">
            <span className="hover:cursor-pointer">
              <ArrowLeft onClick={onClose} />
            </span>{" "}
            <span className="text-[24px] font-[600] text-[#FCFCFC]">
              Edit Skills
            </span>
          </div>
          <span className="hover:cursor-pointer">
            <X
              onClick={onClose}
              className="hover:cursor-pointer"
              size={24}
              color="white"
            />
          </span>
        </div>
        <div className="w-full bg-[#1D1D1C] h-[1px]"></div>
        <form
          className="flex flex-col gap-[20px] w-full"
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[12px]">
            <h1 className="flex gap-[4px]">
              <span className="text-[14px] font-[400] text-[#BBBBBB]">
                Skills
              </span>
              <span className="text-[12px] font-[400] text-[#9596A0]">
                (we recommend you add your top skills acquired)
              </span>
            </h1>

            {/* Display added skills */}
            <div className="flex gap-[10px] max-w-full [&::-webkit-scrollbar]:hidden flex-wrap">
              {addedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="py-[6px] px-[12px] border border-[#313130] rounded-[4px] gap-[4px] flex items-center">
                  <X
                    size={14}
                    color="#40403E"
                    className="hover:cursor-pointer"
                    onClick={() => removeSkill(skill)}
                  />
                  <span className="text-[14px] font-[400] text-[#BBBBBB]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Button to add skill */}
            <Button
              type="button"
              className="border border-[#252625] flex items-center"
              onClick={() => {
                // Open a modal or input field to add a custom skill
                const skill = prompt("Enter a skill:");
                if (skill) {
                  addSkill(skill);
                }
              }}>
              <CirclePlus size={32} color="#A8C789" />
              <span className="text-[14px] font-[400] text-[#696969]">
                Add Skill
              </span>
            </Button>
            {errors.skills && (
              <span className="text-red-500 text-sm">{errors.skills}</span>
            )}
          </div>

          {errors.submit && (
            <span className="text-red-500 text-sm">{errors.submit}</span>
          )}
          <Button
            type="submit"
            className="bg-[#D0EFB1] hover:text-[#D0EFB1] hover:border-[#252625] hover:border py-[14px] rounded-[8px] text-[16px] font-[500] text-[#0E0F0E]"
            disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>

        {/* Suggested skills section */}
        <div className="flex flex-col gap-[12px]">
          <h1 className="flex gap-[2px] items-center">
            <span className="text-[14px] text-[#BBBBBB] font-[400]">
              Suggestions
            </span>
            <p className="text-[#9596A0] text-[12px] font-[400]">
              based on your profile
            </p>
          </h1>
          <div className="grid sm:grid-cols-2 gap-[8px] grid-cols-1 md:grid-cols-3 grid-rows-auto">
            {suggestedSkills.map((skill, index) => (
              <div
                key={index}
                className="text-[#BBBBBB] text-[14px] items-center font-[400] col-span-1 py-[8px] px-[12px] flex border rounded-[8px] gap-[8px] border-[#252625] hover:cursor-pointer"
                onClick={() => addSkill(skill)}>
                <CirclePlus color="#696969" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
