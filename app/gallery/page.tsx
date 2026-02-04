import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Gallery - Greenix Kerala | Wedding & Corporate Event Photos',
  description: 'Explore Greenix event gallery showcasing our stunning weddings, corporate events, destination celebrations, and private parties across Kerala. See our expertise in creating memorable experiences.',
  keywords: ['greenix gallery', 'event photos kerala', 'wedding gallery kerala', 'corporate event photos', 'kerala event management portfolio'],
  openGraph: {
    title: 'Event Gallery - Greenix Kerala | Wedding & Corporate Event Photos',
    description: 'Explore Greenix event gallery showcasing our stunning weddings, corporate events, destination celebrations, and private parties across Kerala.',
    url: 'https://greenix.com/gallery',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Greenix Event Gallery - Kerala Wedding & Corporate Events',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Gallery - Greenix Kerala | Wedding & Corporate Event Photos',
    description: 'Explore Greenix event gallery showcasing our stunning weddings, corporate events, destination celebrations, and private parties across Kerala.',
    images: [
      {
        url: '/logo.png',
        alt: 'Greenix Event Gallery - Kerala Wedding & Corporate Events',
      },
    ],
  },
};

export default function Gallery() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">Gallery</h1>
            <p className="mt-4 text-lg text-white/80">
              Explore our collection of memorable events and celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video rounded-2xl bg-slate-100" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
