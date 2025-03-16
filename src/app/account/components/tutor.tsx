"use client";
import Input from "@/components/Forms/Input";
import React from "react";
import TextArea from "@/components/Forms/TextArea";
import Selector from "@/components/Forms/Selector";
import Checkbox from "@/components/Forms/Checkbox";
import Button from "@/components/Forms/Button";

const skills = [
  "UI/UX",
  "Solidity",
  "TypeScript",
  "Cairo",
  "Rust",
  "React.js",
  "Tailwind CSS",
  "Node JS",
];

function Tutor() {
  const handleSkillSelection = (selectedSkills: string[]) => {
    console.log(selectedSkills);
  };
  const handleContinue = () => {};

  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-0">
      <div className="header-details text-center">
        <h2 className="text-white font-UbuntuBold text-[1.5rem] mb-2">
          Build your profile as tutor
        </h2>
        <p className="text-grayText text-[0.875rem]">
          Enter your professional details
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="mt-5 md:mt-10 w-full">
          <Input
            type="text"
            name="title"
            placeholder="eg. Web3 Developer"
            label="Title"
            onChange={() => {}}
            value=""
          />
        </div>
        <div className="w-full">
          <TextArea
            name="bio"
            placeholder="Tell us about yourself"
            label="Brief Bio"
            onChange={() => {}}
            value=""
          />
        </div>
        <div className="w-full">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            label="Email"
            onChange={() => {}}
            value=""
          />
        </div>
        <div className="w-full">
          <Selector
            dataArray={skills}
            onSelectionChange={handleSkillSelection}
            label="Select skills (At least 5)"
          />
        </div>
        <div className="my-2">
          <Checkbox isAgreement={true} privacyUrl="" termsUrl="" />
        </div>
        <div className="my-2 w-full">
          <Button label="CONTINUE" onButtonClick={handleContinue} />
        </div>
      </div>
    </div>
  );
}

export default Tutor;