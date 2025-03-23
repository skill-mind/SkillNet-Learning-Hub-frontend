import { Bookmark, EllipsisVertical, Star, Timer } from "lucide-react";
import Image from "next/image";
import img1 from "../../../../../public/image/Rectangle 8.jpg";
import Students from "@/svg/students";
import StarIcon from "@/svg/starIcon";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div className="bg-[#191A19] w-[90%] rounded-lg h-fit">
      <Image
        src={img1}
        className="w-full h-[249px] rounded-ss-lg rounded-se-lg"
        alt=""
      />
      <div className="p-6 gap-4 grid">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-medium text-xl">
              Blockchain Development Bootcamp: Zero to Hero
            </h1>
            <h4 className="text-[#696969]">Satoshi Nakamoto</h4>
          </div>
          <span>$29.99</span>
        </div>
        <div className="flex items-center">
          <Timer />
          <h3>
            <span className="text-[#696969]">Completed:</span> 2/5 Modules
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <h2>What would you like to rate this course?</h2>
          <div className="flex justify-between gap-1 items-center text-[#696969]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CourseCardStatOverView() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <div className="bg-[#191A19] w-[332px] rounded-lg h-[468px] relative">
          <button
            type="button"
            className="border-[#767776] absolute p-1 bg-[#6E6E6E3D] text-[#767776] rounded-md border right-2 top-2 w-10 h-10 grid place-content-center"
          >
            <EllipsisVertical />
          </button>
          <Image
            src={img1}
            className="rounded-ss-lg rounded-se-lg w-full h-[202px]"
            alt=""
          />
          <div className="p-4 gap-4 grid">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-medium text-lg">
                  Blockchain Development Bootcamp: Zero to Hero
                </h1>
                <h4 className="text-[#696969]">Satoshi Nakamoto</h4>
              </div>
              <span className="bg-[#1B1B1B] py-1 px-3 rounded-full shadow-md">
                $29.99
              </span>
            </div>
            <div className="flex items-center">
              <Timer className="text-[#696969]" />
              <h3>
                <span className="text-[#696969]">Completed:</span> 2/5 Modules
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <Students />
              <h3>
                <span className="text-[#696969]">Completed:</span> 2/5 Modules
              </h3>
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-[#1F1F1F]  p-3 rounded-md">
                <Bookmark />
              </button>
              <button className="bg-[#1F1F1F] uppercase border border-[#2D2E2D] w-full py-3 rounded-md">
                register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyCourseCard() {
  return (
    <Link href={"/dashboard/learning/class"} className="bg-[#191A19] w-[332px] rounded-lg h-fit relative border border-[#313130]">
      <Image
        src={img1}
        className="rounded-ss-lg rounded-se-lg w-full h-[202px]"
        alt=""
      />
      <div className="p-4 gap-6 grid">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-medium text-lg">
              Blockchain Development Bootcamp: Zero to Hero
            </h1>
            <h4 className="text-[#696969]">Satoshi Nakamoto</h4>
          </div>
          <span className="bg-[#1B1B1B] py-1 px-3 rounded-full shadow-md">
            $29.99
          </span>
        </div>
        <div className="flex items-center">
          <Timer className="text-[#696969]" />
          <h3>
            <span className="text-[#696969]">Completed:</span> 5/5 Modules
          </h3>
        </div>

        <div className="flex items-center gap-3 text-sm font-normal">
          <h2>You gave this course a 4 star rating</h2>
          <div className="flex justify-between gap-1 items-center text-[#696969]">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </Link>
  );
}
