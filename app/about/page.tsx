import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: 'About Us - Greenix Event Management Company Kerala',
  description: 'Learn about Greenix, Kerala\'s premier event management company. We craft unforgettable experiences blending Kerala\'s rich cultural heritage with modern innovation for weddings, corporate events, and celebrations.',
  keywords: ['about greenix', 'event management kerala', 'wedding planners kerala', 'corporate events kerala', 'kerala heritage events'],
  openGraph: {
    title: 'About Us - Greenix Event Management Company Kerala',
    description: 'Learn about Greenix, Kerala\'s premier event management company. We craft unforgettable experiences blending Kerala\'s rich cultural heritage with modern innovation for weddings, corporate events, and celebrations.',
    url: 'https://www.thegreenix.com/about',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'About Greenix - Kerala Event Management Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Greenix Event Management Company Kerala',
    description: 'Learn about Greenix, Kerala\'s premier event management company. We craft unforgettable experiences blending Kerala\'s rich cultural heritage with modern innovation.',
    images: [
      {
        url: '/logo.png',
        alt: 'About Greenix - Kerala Event Management Company',
      },
    ],
  },
};

export default function About() {
  return (
    <main>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(16,185,129,0.08),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-lg lg:h-full">
              <Image
                src="/about-home.jpg"
                alt="About Greenix"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                About Us
              </h1>
              <div className="mt-8 text-lg leading-relaxed text-slate-700 space-y-6">
                <p>
                  At Greenix, we don&apos;t just plan events we craft experiences that feel personal, purposeful, and unforgettable.
                </p>
                <p>
                  Born in Kerala and inspired by its rich traditions, Greenix is an event company that seamlessly blends culture, elegance, and modern flair. From intimate luxury weddings steeped in rituals to high-impact corporate meets that demand precision and creativity, we bring stories to life through thoughtful design and flawless execution.
                </p>
                <p>
                  We believe every event has a soul. That&apos;s why we start by listening to your vision, your values, and your expectations. Whether it&apos;s warmth of a traditional celebration or sophistication of a contemporary setup, our team curates every detail with care, creativity, and commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
