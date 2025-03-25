import { CourseCardStatOverView } from "../components/course-card";

function Page() {
  return (
    <section>
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
