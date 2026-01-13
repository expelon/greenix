export default function Event() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero2.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">Events</h1>
            <p className="mt-4 text-lg text-white/80">
              Discover our upcoming and past events.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6">
                <div className="aspect-video w-full rounded-xl bg-slate-100" />
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Event Title {i}</h2>
                <p className="mt-2 text-slate-600">Event description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
