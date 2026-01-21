import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(16,185,129,0.08),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
          {/* Blank About Page - Content Removed */}
        </div>
      </section>
    </main>
  );
}
