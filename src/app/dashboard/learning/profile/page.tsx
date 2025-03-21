"use client";

import Details from "@/components/details";
import { Subtitles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Page() {
  const user = true;

  const skill = ["Typescript", "python", "Power BI", "javaScript"];
  return (
    <section className="font-['UbuntuSans']">
      <div className="w-full h-[90px]">
        <Image
          className="w-full h-full"
          src={"/headerBg.svg"}
          alt="Header Background"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-7 mt-5">
        {/* user profile */}
        <div className="flex items-center gap-[12px]">
          <Image
            className="h-[82px] w-[82px] rounded-full cover"
            src="/userProfile.jpeg"
            alt="User Profile Image"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-[24px] text-[#FCFCFC] font-bold">
                Daniel Ochoja
              </h1>
              <span className="text-[14px] text-[#FCFCFC] font-thin">
                Software Engineer
              </span>
            </div>
            <div className="flex space-x-2">
              <Link className="text-[#A8C789]" href="www.danielochoja.com">
                www.danielochoja.com
              </Link>
              <div className="flex space-x-2">
                {skill.map((skill) => (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      className="w-[5px] h-[5px]"
                      src={"/dot.svg"}
                      alt="dot"
                      width={100}
                      height={100}
                    />{" "}
                    <span className="text-[#BBBBBB]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-10">
            {user ? (
              <button className="border w-[auto] h-[40px] border-[#696969] text-[#ABABAB] rounded-md px-4 py-2">
                Edit Profile
              </button>
            ) : (
              <button className="border w-[auto] h-[40px] border-[#696969] text-[#ABABAB] rounded-md px-4 py-2">
                Send A Message
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-[761px] bg-[">
          <Details
            onClick={() => {}}
            topic={"About"}
            user={user}
            title={""}
            description={
              "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team. In this role, you will be responsible for ensuring that our products and services meet the highest standards of quality and reliability. You will develop and implement quality assurance strategies, oversee testing processes, and collaborate with cross-functional teams to drive continuous improvement. As the Quality Assurance Manager, you will play a critical role in maintaining customer satisfaction and upholding the company’s reputation for excellence. This position requires strong leadership, analytical, and problem-solving skills, as well as a deep understanding of QA methodologies and best practices."
            }
            date={""}
            subtitle={""}
          />
        </div>

        <div className="w-full md:w-[761px] bg-[#161716] border-[1px] rounded-[12px] border-[#1D1D1C] flex flex-col gap-[48px] p-[24px_20px]">
          <Details
            onClick={() => {}}
            topic={"Experience"}
            user={user}
            title={"AI Researcher and Data analyst"}
            subtitle={"CityScape"}
            date={"2019 - Present"}
            description={
              "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."
            }
          />
          <Details
            onClick={() => {}}
            topic={""}
            user={false}
            title={"AI Researcher and Data analyst"}
            subtitle={"CityScape"}
            date={"2017 - 2019"}
            description={
              "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."}
          />
          <Details
            onClick={() => {}}
            topic={""}
            user={false}
            title={"AI Researcher and Data analyst"}
            subtitle={"CityScape"}
            date={"2015 - 2017"}
            description={ 
              "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."}
          />
        </div>
      </div>
    </section>
  );
}
export default Page;
