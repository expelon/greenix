export default function Blog() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-slate-900">Blog</h1>
        <p className="mt-4 text-lg text-slate-600">
          Latest news, tips, and stories from the world of events.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="aspect-video w-full rounded-xl bg-slate-100" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900">Blog Post Title {i}</h2>
              <p className="mt-2 text-sm text-slate-500">January {i + 10}, 2026</p>
              <p className="mt-3 text-slate-600">
                Brief excerpt of the blog post content goes here...
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
