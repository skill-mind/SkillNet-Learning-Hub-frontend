import { CourseCardStatOverView } from "../components/course-card";

function Page() {
  return (
    <section>
      <div className="flex justify-between items-center w-[90%]">
        <h1 className="text-2xl font-semibold">Courses you might like</h1>
        <button className="font-medium text-sm">Load All</button>
      </div>
      <div className="flex flex-wrap justify-between gap-4 2 w-[90%]">
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
        <CourseCardStatOverView />
      </div>
    </section>
  );
}
export default Page;
