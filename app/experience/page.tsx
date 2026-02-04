import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Experience - Greenix Event Management Kerala | Expert Event Planners',
  description: 'Discover Greenix\'s extensive experience in event management across Kerala. Years of expertise in creating unforgettable weddings, corporate events, destination celebrations, and private parties with cultural excellence.',
  keywords: ['greenix experience', 'event management expertise kerala', 'wedding planning experience', 'corporate event expertise kerala', 'kerala event company portfolio'],
  openGraph: {
    title: 'Our Experience - Greenix Event Management Kerala | Expert Event Planners',
    description: 'Discover Greenix\'s extensive experience in event management across Kerala. Years of expertise in creating unforgettable weddings, corporate events, and celebrations.',
    url: 'https://greenix.com/experience',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Greenix Experience - Kerala Event Management Expertise',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Experience - Greenix Event Management Kerala | Expert Event Planners',
    description: 'Discover Greenix\'s extensive experience in event management across Kerala. Years of expertise in creating unforgettable weddings, corporate events, and celebrations.',
    images: [
      {
        url: '/logo.png',
        alt: 'Greenix Experience - Kerala Event Management Expertise',
      },
    ],
  },
};

export default function Experience() {
  return (
    <main className="pb-16">
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">Our Experience</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Years of expertise in creating unforgettable events across Kerala.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
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
      </section>
    </main>
  );
}
