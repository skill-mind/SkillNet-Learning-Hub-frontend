"use client";
import React, { useState } from "react";
import { ArrowLeft, X, CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
import TextArea from "@/app/dashboard/learning/profile/components/TextArea";

interface EditAboutProps {
  onClose: () => void;
}

export default function EditAbout({ onClose }: EditAboutProps) {
  const [about, setAbout] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ submit?: string }>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate an API call to save the "about" information
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // If successful, close the modal
      onClose();
    } catch (error) {
      setErrors({ submit: "Failed to save the information. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="absolute inset-0 backdrop-blur-3xl  top-0 left-0 w-full flex justify-center py-[100px]">
      <section className="bg-[#161716] max-w-[761px] h-fit w-full text-white p-[24px] rounded-[12px] border flex flex-col gap-[24px] border-[#40403E]">
        <div className="flex justify-between gap-[10px] w-full">
          <div className="flex space-x-1 items-center justtify-center">
            <span className="hover:cursor-pointer">
              <ArrowLeft onClick={onClose} />
            </span>{" "}
            <span className="text-[24px] font-[600] text-[#FCFCFC]">
              Edit About
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
          <TextArea
            name="about"
            label="About"
            placeholder="Write something about yourself..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
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
      </section>
    </div>
  );
}
