import { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NewCourse from "../component/CreateNewCourse";
import { PlusIcon, PencilIcon } from "lucide-react";
import { MdOutlineEdit } from "react-icons/md";

interface Course {
  id: string;
  title: string;
  description: string;
  status: "Published" | "Draft";
  enrollment: number;
  rating?: number;
  imageUrl: string;
}

const Dashboard: FC = () => {
  const [showNewCourse, setShowNewCourse] = useState(false);

  const handleCardClick = () => {
    setShowNewCourse(true);
  };

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      title: "Become a Web3 Developer: A beginners approach",
      description: "Video/course guides available",
      status: "Published",
      enrollment: 20,
      rating: 4.5,
      imageUrl: "/Image.png",
    },
    {
      id: "2",
      title: "Design made simple",
      description: "Video/course guides available",
      status: "Draft",
      enrollment: 20,
      imageUrl: "/image.png",
    },
  ]);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Head>
          <title>Course Dashboard</title>
        </Head>

        <main className="container py-8 px-4">
          {showNewCourse ? (
            <NewCourse />
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#101110] rounded-lg p-4 flex h-[218px]"
                  >
                    <div className="bg-[#161716] relative overflow-hidden rounded-md mr-4 flex-shrink-0">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start">
                          <h2 className="text-lg font-semibold">
                            {course.title}
                          </h2>
                          <div
                            className={`text-xs px-2 py-1 rounded ${
                              course.status === "Published"
                                ? "bg-green-900 text-green-400"
                                : "bg-zinc-700 text-zinc-300"
                            }`}
                          >
                            {course.status}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {course.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col items-start gap-10">
                          <div className="text-sm text-gray-400">
                            Enrollment: {course.enrollment} Learners
                          </div>
                          <button className="text-xs border border-gray-600 text-gray-300 px-3 py-1 rounded flex items-center gap-3">
                            <PencilIcon size={16} />

                            <span>Edit Course</span>
                          </button>
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm text-gray-400 mr-6 mb-12">
                            {course.rating
                              ? `Rating: ${course.rating}/5`
                              : "Rating: N/A"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button className="text-sm text-gray-400 hover:text-white">
                  View More
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm mb-2">Create A New Course</h3>
                <div className="bg-[#161716] rounded-lg p-6 h-[240px]">
                  <p className="text-sm text-center text-gray-400 mb-6">
                    Create a new course, publish for new learners, and earn an
                    income.
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={handleCardClick}
                      className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mb-6"
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleCardClick}
                      className="bg-zinc-800 text-xs text-gray-300 px-4 py-2 rounded flex items-center gap-2"
                    >
                      <PlusIcon size={16} />
                      <span>CREATE NEW COURSE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
