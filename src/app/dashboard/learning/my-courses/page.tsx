import { MyCourseCard } from "../components/course-card";

function Page(){
    return (
      <section className="flex flex-wrap justify-between gap-4 w-[90%]">
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
      </section>
    );
}
export default Page