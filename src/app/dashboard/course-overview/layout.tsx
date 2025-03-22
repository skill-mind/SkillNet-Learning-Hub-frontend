import Footer from "@/components/Footer";
import Navbar from "../learning/components/LearningNav";
import SideBar from "../learning/components/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      <main className="sm:px-8 grid grid-cols-[1fr_5fr] gap-4 h-screen text-[#D9D9D9]">
        <SideBar />
        <div className="overflow-y-auto scrollbar-hide scroll-smooth">
          {children}
        </div>
      </main>
    </section>
  );
}
