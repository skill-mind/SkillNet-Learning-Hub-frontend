"use client";

import React, { useState } from "react";
import AccountTypeSelector from "@/app/account/components/account-type";
import selectImgBg from "../../../../public/svg/selecttype.svg";
import Image from "next/image";
import Student from "../components/student";
import Tutor from "../components/tutor";
import { Button } from "../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

const Page = () => {
  const [accountType, setAccountType] = useState("");

  function accountTypeHandle(type: string) {
    setAccountType(type);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      <div className="hidden md:block hexagon-img border-r-2 border-[#1D1E2B] md:col-span-2 h-screen relative">
        <Image
          src={selectImgBg}
          className=" w-4/5 mx-auto top-[60%] absolute -translate-y-1/2 bottom-0"
          alt="background"
          priority
        />
      </div>
      <div className="col-span-1 md:col-span-3 h-screen py-10 md:py-20 px-5 md:px-8 overflow-y-auto scrollbar-hide scroll-smooth">
        {accountType === "" && (
          <AccountTypeSelector typeHandle={accountTypeHandle} />
        )}
        {accountType !== "" && (
          <div className="relative flex flex-col">
            <Button onClick={()=>{accountTypeHandle("")}} className=" sm:fixed uppercase w-fit font-medium text-base bg-[#D0EFB1] rounded-md text-[#0E0F0E] px-4 py-6">
              <ChevronLeft /> Back
            </Button>

            {accountType === "student" && <Student />}
            {accountType === "tutor" && <Tutor />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;