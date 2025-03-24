"use client";
import React from "react";
import { ArrowLeft, X, ChevronDown, CirclePlus } from "lucide-react";
import Input from "./Forms/Input";
import { useState, useRef } from "react";
import TextArea from "./Forms/TextArea";
import { Button } from "./ui/button";

interface EditCertificationProps {
  onClose: () => void;
}

export default function EditCertification({ onClose }: EditCertificationProps) {
  const [formData, setFormData] = useState({
    fieldOfStudy: "",
    schoolName: "",
    startDate: "",
    endDate: "",
    description: "",
    grade: "",
    link: "",
    skills: [] as string[],
    media: [] as string[],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  // Function to handle date selection
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Function to trigger the hidden date picker
  const openDatePicker = (ref: React.RefObject<HTMLInputElement | null>) => {
      ref.current?.showPicker();
    };

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Function to validate the form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fieldOfStudy) newErrors.fieldOfStudy = "Field of Study is required";
    if (!formData.schoolName) newErrors.schoolName = "School Name is required";
    if (!formData.startDate) newErrors.startDate = "Start Date is required";
    if (!formData.endDate) newErrors.endDate = "End Date is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.grade) newErrors.grade = "Grade is required";
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
      //please dont forget to here Replace with your API endpoint
      const response = await fetch("/api/certification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit certification");
      }

      // Handle successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting certification:", error);
      setErrors({ submit: "Failed to submit certification. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute inset-0 backdrop-blur-3xl top-0 left-0 w-full flex justify-center py-[100px]">
      <section className="bg-[#161716] max-w-[761px] w-full text-white p-[24px] rounded-[12px] border flex flex-col gap-[24px] border-[#40403E]">
        <div className="flex justify-between gap-[10px] w-full">
          <div className="flex space-x-1 items-center justtify-center">
            <ArrowLeft onClick={onClose} className="hover:cursor-pointer" />
            <span className="text-[24px] font-[600] text-[#FCFCFC]">Edit Certification</span>
          </div>
          <X onClick={onClose} className="hover:cursor-pointer" size={24} color="white" />
        </div>
        <div className="w-full bg-[#1D1D1C] h-[1px]"></div>
        <form className="flex flex-col gap-[20px] w-full" onSubmit={handleSubmit}>
          <Input
            required
            type="text"
            name="fieldOfStudy"
            label="Field of Study"
            placeholder="Enter your field of study"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            mdWidth="100%"
            error={errors.fieldOfStudy}
          />
          <Input
            required
            type="text"
            name="schoolName"
            label="School Name"
            placeholder="Enter the name of the school"
            value={formData.schoolName}
            onChange={handleChange}
            mdWidth="100%"
            error={errors.schoolName}
          />
          <div className="flex gap-[20px] justify-between w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor={"start"}
                className="text-[#9596A0] flex items-center space-x-1 text-[0.875rem] mb-1"
              >
                <span>Start Date</span>
                <span className="text-[#C04639]">*</span>
              </label>
              <div
                className={`flex justify-${
                  formData.startDate ? "between" : "end"
                } bg-transparent border-[1px] appearance-none outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.75rem] rounded-[0.5rem] ${
                  errors.startDate ? "border-red-500" : ""
                }`}
                onClick={() => openDatePicker(startDateInputRef)}
              >
                {formData.startDate ? formData.startDate : ""}
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              <input
                type="date"
                name="startDate"
                ref={startDateInputRef}
                className="absolute opacity-0 w-0 h-0"
                onChange={handleDateChange}
              />
              {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor={"end"}
                className="text-[#9596A0] flex items-center space-x-1 text-[0.875rem] mb-1"
              >
                <span>End Date</span>
                <span className="text-[#C04639]">*</span>
              </label>
              <div
                className={`flex justify-${
                  formData.endDate ? "between" : "end"
                } bg-transparent border-[1px] appearance-none outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.75rem] rounded-[0.5rem] ${
                  errors.endDate ? "border-red-500" : ""
                }`}
                onClick={() => openDatePicker(endDateInputRef)}
              >
                {formData.endDate ? formData.endDate : ""}
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              <input
                type="date"
                name="endDate"
                ref={endDateInputRef}
                className="absolute opacity-0 w-0 h-0"
                onChange={handleDateChange}
              />
              {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <TextArea
              name="description"
              label="Description"
              placeholder="Add description"
              value={formData.description}
              onChange={handleChange}
              mdWidth="100%"
              error={errors.description}
            />
            <span className="text-[14px] font-[400] text-[#696969]">
              For the best help, share details, steps tried, and error screenshots.
            </span>
          </div>
          <Input
            required
            type="text"
            name="grade"
            label="Grade"
            placeholder=""
            value={formData.grade}
            onChange={handleChange}
            mdWidth="100%"
            error={errors.grade}
          />
          <div className="flex flex-col gap-[2px]">
            <label className="flex gap-[4px]" htmlFor="link">
              <span className="text-[14px] text-[#BBBBBB] font-[400]">URL</span>
              <span className="text-[12px] font-[400] text-[#9596A0]">
                (input the link to your NFT certificate)
              </span>
            </label>
            <input
              className={`bg-transparent border-[1px] appearance-none outline-none border-[#252625] text-white text-[0.875rem] w-full px-4 py-[0.75rem] rounded-[0.5rem] ${
                errors.link ? "border-red-500" : ""
              }`}
              type="text"
              name="link"
              placeholder="Add a link"
              value={formData.link}
              onChange={handleChange}
            />
            {errors.link && <span className="text-red-500 text-sm">{errors.link}</span>}
          </div>
          <div className="flex flex-col gap-[12px]">
            <h1 className="flex gap-[4px]">
              <span className="text-[14px] font-[400] text-[#BBBBBB]">Skills</span>
              <span className="text-[12px] font-[400] text-[#9596A0]">
                (we recommend you add your top skills acquired)
              </span>
            </h1>
            <Button className="border border-[#252625] flex items-center">
              <CirclePlus size={32} color="#A8C789" />
              <span className="text-[14px] font-[400] text-[#696969]">Add Skill</span>
            </Button>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h1 className="flex gap-[4px]">
              <span className="text-[14px] font-[400] text-[#BBBBBB]">Media</span>
              <span className="text-[12px] font-[400] text-[#9596A0]">(Optional)</span>
            </h1>
            <Button className="border border-[#252625] flex items-center">
              <CirclePlus size={32} color="#A8C789" />
              <span className="text-[14px] font-[400] text-[#696969]">Add Media</span>
            </Button>
          </div>
          {errors.submit && <span className="text-red-500 text-sm">{errors.submit}</span>}
          <Button
            type="submit"
            className="bg-[#D0EFB1] py-[14px] hover:text-[#D0EFB1] hover:border-[#252625] hover:border rounded-[8px] text-[16px] font-[500] text-[#0E0F0E]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>
      </section>
    </div>
  );
}