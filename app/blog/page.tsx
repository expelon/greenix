export default function Blog() {
  return (
    <main className="pb-16">
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero2.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">Blog</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Latest news, tips, and stories from the world of events.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </main>
  );
}
