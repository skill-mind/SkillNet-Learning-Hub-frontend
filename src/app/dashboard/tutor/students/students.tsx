"use client";
import React from "react";
import Image from "next/image";
import UserAvatar_Ben from "../../../../../public/studentProfile.svg";
import UserAvatar_Flora from "../../../../../public/dashboardProfile.svg";

interface Student {
  id: string;
  name: string;
  course: string;
  email: string;
  progress: number;
}

interface StudentReview {
  id: string;
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

function Student() {
  const students: Student[] = [
    {
      id: "1",
      name: "Tony Oluyi",
      course: "Product Design",
      email: "Tony@gmail.com",
      progress: 50,
    },
    {
      id: "2",
      name: "Flora Osatuayi",
      course: "Product Design",
      email: "Flora@gmail.com",
      progress: 20,
    },
    {
      id: "3",
      name: "Ejembi Benedict",
      course: "Product Design",
      email: "Ejembi@gmail.com",
      progress: 70,
    },
  ];

  const reviews: StudentReview[] = [
    {
      id: "1",
      name: "Benedict",
      avatar: UserAvatar_Ben,
      review:
        "The course is a must take for anyone looking to start their tech journey in design. A solid 5/5 rating for me",
      rating: 5,
    },
    {
      id: "2",
      name: "Flora",
      avatar: UserAvatar_Flora,
      review:
        "The course is a must take for anyone looking to start their tech journey in design. A solid 5/5 rating for me",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-y-auto flex-grow px-8 md:ml-[20px] w-full md:w-[calc(100vw-372px)] bg-[#101110] text-white">
      <main className="flex-1 flex-grow w-full">
        {/* Students Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full">
            <thead className="h-[48px]">
              <tr className="text-left text-sm bg-[#161716] p-10 box-border border-zinc-800">
                <th className="font-normal text-zinc-400 px-4 py-3">Name</th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Courses
                </th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Email Address
                </th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b h-[68px] border-zinc-800"
                >
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.course}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.email}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.progress}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reviews Section */}
        <div className="overflow-y-auto">
          <h2 className="text-lg font-[14px] mt-8 mb-5">Students Reviews</h2>
          <div className="space-y-[14px] my-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex border-b border-[#2D2E2D] py-3 flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-700 flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#8F8F8F]">{review.name}</h3>
                  <p className="text-[14px] text-white font-medium mt-1">
                    {review.review}
                  </p>
                </div>
                <div className="flex gap-2 align-center text-right sm:self-center">
                  <div className="text-sm text-zinc-400">Rating:</div>
                  <div className="font-medium">
                    {review.rating}/{review.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Student;
