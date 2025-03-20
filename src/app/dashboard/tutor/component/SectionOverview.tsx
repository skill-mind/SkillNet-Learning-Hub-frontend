import { Pencil } from "lucide-react";
import Image from "next/image";
import img from "../../../../../public/exam-paper.jpg";

export default function SectionOverview() {
  return (
    <div className="bg-[#161716] rounded-[8px] gap-[24px] p-[24px]">
      <h1 className="text-[#9596A0] text-[0.875rem] mb-1">Section 1</h1>
        <div  className="flex w-full gap-5 mb-3 items-stretch">
          <div className="min-h-[144px] w-[218px]">
            <Image
              className="h-full object-fill"
              src={img}
              alt="section image"
            />
          </div>
          <div className="flex justify-between flex-col gap-6 w-full">
            <div className="w-full">
              <h1 className="text-[#9596A0] text-[0.875rem] mb-1">
                Lecture title*
              </h1>
              <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full  px-4 py-[0.40rem] rounded-[0.5rem]">
                into the bad lands
              </div>
            </div>
            <div>
              <h1 className="text-[#9596A0] text-[0.875rem] mb-1">Duration*</h1>
              <span className="w-48 bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] block px-4 py-[0.40rem] rounded-[0.5rem]">
                4h
              </span>
            </div>
          </div>
          <button className="text-white bg-white/10 p-2 rounded-full w-fit h-fit my-auto">
            <Pencil size={16} color="white" />
          </button>
        </div>
    </div>
  );
}