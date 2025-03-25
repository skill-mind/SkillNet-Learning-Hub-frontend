import CourseCard, {
  CourseCardStatOverView,
  MyCourseCard,
} from "./components/course-card";

function Page() {
  return (
    <section className="min-h-screen text-[#D9D9D9]">
      <div className="gap-6 flex flex-col">
        <CourseCard />
        <section>
          <div className="flex justify-between items-center sm:w-[90%] my-5 flex-wrap">
            <h1 className="text-2xl font-semibold">Courses you might like</h1>
            <button className="font-medium text-sm border rounded-full px-6 py-2">Load All</button>
          </div>
          <div className="flex flex-wrap justify-between gap-4 2 w-[90%]">
            <CourseCardStatOverView />
            <CourseCardStatOverView />
            <CourseCardStatOverView />
            <CourseCardStatOverView />
            <CourseCardStatOverView />
            <CourseCardStatOverView />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center w-[90%] my-7">
            <h1 className="text-2xl font-semibold">Completed Courses</h1>
            <button className="font-medium text-sm">Load All</button>
          </div>
          <div className="flex flex-wrap justify-between gap-4 2 w-[90%]">
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Page;
