import Navbar from "../components/LearningNav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section>
        <Navbar />
        <main>
          <div className="overflow-y-auto scrollbar-hide scroll-smooth">
            {children}
          </div>
        </main>
      </section>
  );
}
