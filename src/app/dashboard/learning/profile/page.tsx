"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// components
import { Pencil, Plus, ArrowLeft } from "lucide-react";
import Details from "@/components/details";
import EditCertification from "@/components/edit-certification";
import EditExperience from "@/components/edit-experience";
import EditSkill from "@/components/edit-skill";


function Page() {
  const user = true;
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [openModal, setOpenModal] = useState<string | null>(null);

    const toggleModal = (modalId: string) => {
        setOpenModal((prevModal) => (prevModal === modalId ? null : modalId));
    };
  interface Section {
    section: string;
  }
  const handleBackClick = () => {
    setActiveSection(null);
  };

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };


  const skills = [
    { name: "Typescript", link: "https://example.com/typescript" },
    { name: "Python", linksection: "https://example.com/python" },
    { name: "Power BI", link: "https://example.com/powerbi" },
    { name: "JavaScript", link: "https://example.com/javascript" },
  ];
  return (
    <section className="font-['UbuntuSans'] flex flex-col items-center relative">
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
            className="h-[82px] w-[82px] object-cover rounded-full cover"
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
                {skills.map((skill) => (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      className="w-[5px] h-[5px]"
                      src={"/dot.svg"}
                      alt="dot"
                      width={100}
                      height={100}
                    />{" "}
                    <span className="text-[#BBBBBB]">{skill.name}</span>
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
          <div className="flex justify-between w-full items-center my-7 border-b pb-5 border-[#1D1D1C]">
            <h1 className="text-[24px] font-[600] text-[#FCFCFC]">About</h1>
            {user && (
              <button className="w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex">
                <Pencil size={16} />
                <span className="text-[14px]">EDIT</span>
                <Plus size={20} />
              </button>
            )}
          </div>
          <Details
            onClick={() => {}}
            title={""}
            description={
              "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team. In this role, you will be responsible for ensuring that our products and services meet the highest standards of quality and reliability. You will develop and implement quality assurance strategies, oversee testing processes, and collaborate with cross-functional teams to drive continuous improvement. As the Quality Assurance Manager, you will play a critical role in maintaining customer satisfaction and upholding the company’s reputation for excellence. This position requires strong leadership, analytical, and problem-solving skills, as well as a deep understanding of QA methodologies and best practices."
            }
            date={""}
            subtitle={""}
          />
        </div>

        <div className="w-full md:w-[761px] bg-[#161716] border-[1px] rounded-[12px] border-[#1D1D1C] flex flex-col gap-[48px] p-[24px_20px]">
          {/* experience section */}
          {(activeSection === null ||
            activeSection.section === "experience") && (
            <div className="flex flex-col justify-between w-full items-center my-7 border-b pb-5 border-[#1D1D1C]">
              <div className="flex justify-between w-full items-center">
                <h1 className="text-[24px] items-center flex space-x-2 font-[600] text-[#FCFCFC]">
                  {activeSection && (
                    <div>
                      <ArrowLeft onClick={handleBackClick} />
                    </div>
                  )}
                  <span>Experience</span>
                </h1>
                {user && (
                  <button
                    onClick={() =>
                      handleSectionClick({ section: "experience" })
                    }
                    className="w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex">
                    <div
                      className={`space-x-1 ${
                        activeSection ? "hidden" : "flex"
                      }`}>
                      <Pencil size={16} />
                      <span className="text-[14px]">EDIT</span>
                    </div>
                    <Plus onClick={() => toggleModal('experience')} size={20} />
                  </button>
                )}
              </div>
              <Details
                onClick={() => {}}
                title={"AI Researcher and Data analyst"}
                subtitle={"CityScape"}
                date={"2019 - Present"}
                description={
                  "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."
                }
                activeSection={activeSection?.section === "certifications"}
                link="www.skillnetacademy.com"
              />
              <Details
                onClick={() => {}}
                topic={""}
                title={"AI Researcher and Data analyst"}
                subtitle={"CityScape"}
                date={"2017 - 2019"}
                description={
                  "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."
                }
                activeSection={activeSection?.section === "certifications"}
                link="www.skillnetacademy.com"
              />
              <div
                className={`${activeSection ? "flex" : "hidden"} w-full gap-3`}>
                {skills &&
                  skills.map((skill, index) => (
                    <div
                      className="border rounded-[4px] px-[12px] py-[6px] border-[#313130] text-[#BBBBBB] mt-3"
                      key={index}>
                      {" "}
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* certication section */}
          {(activeSection === null ||
            activeSection.section === "certifications") && (
            <div className="flex flex-col justify-between w-full items-center my-7 border-b pb-5 border-[#1D1D1C]">
              <div className="flex justify-between w-full items-center">
                <h1 className="text-[24px] items-center flex space-x-2 font-[600] text-[#FCFCFC]">
                  {activeSection && (
                    <div>
                      <ArrowLeft onClick={handleBackClick} />
                    </div>
                  )}
                  <span>Certifications</span>
                </h1>
                {user && (
                  <button
                    onClick={() =>
                      handleSectionClick({ section: "certifications" })
                    }
                    className="w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex">
                    <div
                      className={`space-x-1 ${
                        activeSection ? "hidden" : "flex"
                      }`}>
                      <Pencil size={16} />
                      <span className="text-[14px]">EDIT</span>
                    </div>

                    <Plus  onClick={() => toggleModal('certification')} size={20} />
                  </button>
                )}
              </div>
              <Details
                onClick={() => {}}
                user={user}
                title={"Blockchain Developer"}
                subtitle={"Provider: SkillNet Academy"}
                date={"2019 - Present"}
                description={
                  "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."
                }
                link="www.skillnetacademy.com"
                activeSection={activeSection?.section === "certifications"}
              />
              <Details
                onClick={() => {}}
                user={user}
                title={"Blockchain Developer"}
                subtitle={"Provider: SkillNet Academy"}
                date={"2019 - Present"}
                description={
                  "I design experiments that could rival a sci-fi plot, pushing machines to understand everything from Shakespeare to cat memes. Translating complex AI jargon into something humans can actually understand? That’s me too—essentially an interpreter for our soon-to-be overlords. And let's not forget about writing papers that make it sound like I have everything under control, while secretly wondering if my latest model is sentient or just being sarcastic."
                }
                activeSection={activeSection?.section === "certifications"}
                link="www.skillnetacademy.com"
              />
              <div
                className={`${activeSection ? "flex" : "hidden"} w-full gap-3`}>
                {skills &&
                  skills.map((skill, index) => (
                    <div
                      className="border rounded-[4px] px-[12px] py-[6px] border-[#313130] text-[#BBBBBB] mt-3"
                      key={index}>
                      {" "}
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* skilles section */}
          {(activeSection === null || activeSection.section === "skills") && (
            <div className="flex flex-col justify-between w-full items-center my-7 border-b pb-5 border-[#1D1D1C]">
              <div className="flex justify-between w-full items-center">
                <h1 className="text-[24px] items-center flex space-x-2 font-[600] text-[#FCFCFC]">
                  {activeSection && (
                    <div>
                      <ArrowLeft onClick={handleBackClick} />
                    </div>
                  )}
                  <span>Skills</span>
                </h1>
                {user && (
                  <button
                    onClick={() => handleSectionClick({ section: "skills" })}
                    className="w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex">
                    <div
                      className={`space-x-1 ${
                        activeSection ? "hidden" : "flex"
                      }`}>
                      <Pencil size={16} />
                      <span className="text-[14px]">EDIT</span>
                    </div>
                    <Plus onClick={() => toggleModal('skill')} size={20} />
                  </button>
                )}
              </div>
              <div className={`${activeSection? "hidden": "flex"} w-full gap-3`}>
                {skills &&
                  skills.map((skill, index) => (
                    <div
                      className="border rounded-[4px] px-[12px] py-[6px] border-[#313130] text-[#BBBBBB] mt-3"
                      key={index}>
                      {" "}
                      {skill.name}
                    </div>
                  ))}
              </div>
              <div className={`${activeSection? "flex": "hidden"}  w-full flex-col gap-[32px]`}>
              {skills.map((skill, index) => (
                <>
                
                  <div
                  className="border flex justify-between rounded-[4px] px-[12px] py-[6px] border-[#313130] text-[#BBBBBB] mt-3"
                  key={index}>
                    <div className="flex flex-col w-full">
                      <span className="text-[18px] font-[500] text-[#FCFCFC]">
                  {skill.name}
                      </span>
                      <a className="text-[14px] text-[#D0EFB1] font-[400]" href="#">{skill.link}</a>
                    </div>
                    {user && (
                  <button
                  onClick={() => toggleModal('skill')}
                    className="w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex">
                      <Pencil size={16} />
                      <span className="text-[14px]">EDIT</span>
                  </button>
                )}
                  </div>
                  <div className="bg-[#1D1D1C] h-[2px] w-full"></div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {openModal === 'experience' && (<EditExperience  onClose={() => toggleModal('experience')}/> )}
      {openModal === 'certification' && (<EditExperience  onClose={() => toggleModal('certification')}/> )}
      {openModal === 'skill' && (<EditSkill  onClose={() => toggleModal('skill')}/>)}
    </section>
  );
}
export default Page;
