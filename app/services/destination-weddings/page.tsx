import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Destination Wedding Planners Kerala | Luxury Weddings | Greenix',
  description: 'Greenix specializes in destination weddings across Kerala. Plan your luxury wedding at backwaters, beaches, hill stations, and heritage properties with expert coordinators.',
  keywords: ['destination wedding kerala', 'luxury wedding planners kerala', 'kerala heritage wedding', 'backwater wedding kerala', 'hill station wedding kerala'],
  openGraph: {
    title: 'Destination Wedding Planners Kerala | Luxury Weddings | Greenix',
    description: 'Greenix specializes in destination weddings across Kerala. Plan your luxury wedding at backwaters, beaches, hill stations, and heritage properties with expert coordinators.',
    url: 'https://greenix.com/services/destination-weddings',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Destination Wedding Planners Kerala - Greenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Wedding Planners Kerala | Luxury Weddings | Greenix',
    description: 'Greenix specializes in destination weddings across Kerala. Plan your luxury wedding at backwaters, beaches, hill stations, and heritage properties with expert coordinators.',
    images: [
      {
        url: '/logo.png',
        alt: 'Destination Wedding Planners Kerala - Greenix',
      },
    ],
  },
};

const serviceHighlights = [
  {
    title: "Venue Selection",
    description:
      "Discover Kerala's finest heritage mansions, luxury resorts, and private estates curated to match your dream ceremony.",
  },
  {
    title: "Travel & Accommodation",
    description:
      "Seamless guest logistics with airport pickups, chauffeured transfers, and boutique hotel stays handled end-to-end.",
  },
  {
    title: "Décor & Themes",
    description:
      "Immersive set designs that blend Kerala's timeless elegance with contemporary luxury aesthetics tailored to your vision.",
  },
  {
    title: "Entertainment & Culture",
    description:
      "Live music, traditional artforms, and bespoke performances that celebrate the vibrance of Kerala on your big day.",
  },
  {
    title: "Complete Coordination",
    description:
      "From welcome dinners to farewell brunches, every ritual and celebration is orchestrated with precision.",
  },
];

export default function DestinationWeddings() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.1),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Destination Weddings</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Destination Weddings in Kerala with Greenix
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Plan your dream destination wedding in Kerala with Greenix, one of the most trusted destination wedding planners in Kerala. Whether you imagine a romantic lakeside ceremony or a grand beachside celebration, Kerala offers mesmerizing locations that become the backdrop to unforgettable memories.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              As a leading destination wedding company, we translate your traditions, aesthetics, and personal story into an immersive celebration. From the first consultation to the final send-off, every chapter is artfully orchestrated.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/about-home.jpg"
                alt="Kerala destination wedding"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/80">Kerala, God's Own Country</p>
                <p className="mt-2 text-2xl font-semibold">Private Islands · Backwaters · Hilltop Resorts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our Comprehensive Destination Wedding Services in Kerala</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Let us craft a wedding that feels authentically yours. Greenix pairs strategic planning with heartfelt storytelling, ensuring every moment flows seamlessly for you and your guests.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHighlights.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Greenix</p>
            <h2 className="mt-4 text-3xl font-semibold">Kerala's Destination Wedding Specialists</h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              With years of experience as a luxury event management partner, Greenix curates soulful experiences that reflect your story. We obsess over the details so you can immerse yourself in the joy of every ritual, toast, and heartfelt moment.
            </p>
          </div>
          <div className="flex-1 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg font-semibold">Bespoke Planning</p>
              <p className="mt-2 text-sm text-white/70">
                Custom timelines, guest journeys, and curated experiences tailored to your cultural and personal preferences.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg font-semibold">Luxury Execution</p>
              <p className="mt-2 text-sm text-white/70">
                Trusted partners for design, catering, hospitality, and entertainment delivering flawless craftsmanship.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg font-semibold">End-to-End Support</p>
              <p className="mt-2 text-sm text-white/70">
                Dedicated planners on-ground to manage ceremonies, logistics, and guest experiences without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-slate-900 lg:via-slate-800 lg:to-slate-900 lg:text-white lg:shadow-none lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300 sm:text-sm">Plan with Greenix</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Let Us Bring Your Destination Wedding Vision to Life
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Share your story with us, and we will design an immersive celebration—down to every petal, playlist, and personalized moment.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+919846020091"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/20 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 lg:w-64 lg:border-white/40 lg:text-white lg:hover:bg-white/10"
              >
                Call +91 98460 20091
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
