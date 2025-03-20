import { Edit2Icon } from "lucide-react";

type courseProps = {
  id: number;
  banner: string;
  title: string;
  enrollment: number;
  rating: number;
  published: boolean;
  videosAvailable: boolean;
};
interface courseCardprops {
  courses: courseProps;
}

const CourseCard: React.FC<courseCardprops> = ({ courses }) => {
  return (
    <div className="bg-[#161716] p-3 sm:p-4 md:p-[24px] rounded-[8px] flex flex-col sm:flex-row gap-3 sm:gap-[15px]">
      <section className="w-full sm:w-[150px] md:w-[200px] lg:w-[300px] h-[120px] sm:h-[150px] md:h-[170px] bg-slate-500/20 rounded-[8px] flex-shrink-0">
        {/* <Image src={courses.banner} width={100} height={100} alt="course-banner" className="w-full h-full object-cover rounded-[8px]" /> */}
      </section>

      <section className="flex-grow flex flex-col gap-2 sm:gap-[15px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
          <div className="flex flex-col gap-1 sm:gap-3">
            <h3 className="font-[600] text-[#FCFCFC] text-base sm:text-[18px] line-clamp-2">
              {courses.title}
            </h3>
            <h4 className="font-[500] text-[#8DCAD7CC] text-xs sm:text-[14px]">
              {courses.videosAvailable ? "Video/Note guide available" : ""}
            </h4>
          </div>
          <div className="self-start py-[4px] px-[14px] rounded-[48px] bg-[#2D2E2D] text-[12px] font-[500] flex justify-center items-center">
            {courses.published ? "published" : "draft"}
          </div>
        </div>

        <div className="flex flex-col xs:flex-row justify-between gap-1 xs:gap-0">
          <div className="text-[#6E6E6E] font-[500] text-xs sm:text-[14px]">
            Enrolment:{" "}
            <span className="text-white"> {courses.enrollment} Learners</span>
          </div>
          <div className="text-[#6E6E6E] font-[500] text-xs sm:text-[14px]">
            Rating:{" "}
            <span className="text-white">
              {courses.rating <= 0 ? "N/A" : `${courses.rating}/5`}
            </span>
          </div>
        </div>

        {courses.published ? (
          ""
        ) : (
          <button className="w-[110px] h-[30px] border-[#2F302F] border-[1px] border-solid rounded-[8px] font-[400] text-[12px] flex justify-center items-center gap-2 mt-auto">
            <Edit2Icon className="w-[14px] h-[14px]" />
            Edit Course
          </button>
        )}
      </section>
    </div>
  );
};

export default CourseCard;
