export default function Experience() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-slate-900">Our Experience</h1>
        <p className="mt-4 text-lg text-slate-600">
          Years of expertise in creating unforgettable events across Kerala.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-900">Experience {i}</h2>
              <p className="mt-4 text-slate-600">
                Detailed description of our experience and expertise in this area.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
