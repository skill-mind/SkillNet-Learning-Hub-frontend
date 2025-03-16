"use client";

import Button from "@/components/Forms/Button";
import Checkbox from "@/components/Forms/Checkbox";
import Input from "@/components/Forms/Input";
import Textarea from "@/components/Forms/TextArea";
import React from "react";

function Student() {
  const handleContinue = () => {};

  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-0">
      <div className="header-details text-center">
        <h2 className="text-white font-UbuntuBold text-[1.5rem] mb-2">
          Personal Information
        </h2>
        <p className="text-grayText text-[0.875rem]">
          Please enter the following information carefully.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="mt-5 md:mt-10 w-full">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            label="Name"
            onChange={() => {}}
            value=""
          />
        </div>

        <div className="w-full">
          <Textarea
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

export default Student;