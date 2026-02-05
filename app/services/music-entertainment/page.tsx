import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/music-entertainment',
  },
  title: 'Music & Entertainment for Events Kerala | Live Bands & DJs | Greenix',
  description: 'Greenix provides professional music and entertainment services for events in Kerala. Live bands, DJs, traditional cultural performances, stage shows for weddings, corporate events, and parties.',
  keywords: ['music entertainment kerala', 'live bands kerala', 'dj services kerala', 'event entertainment kerala', 'cultural performances kerala'],
  openGraph: {
    title: 'Music & Entertainment for Events Kerala | Live Bands & DJs | Greenix',
    description: 'Greenix provides professional music and entertainment services for events in Kerala. Live bands, DJs, traditional cultural performances, stage shows for weddings, corporate events, and parties.',
    url: 'https://www.thegreenix.com/services/music-entertainment',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Music & Entertainment Kerala - Greenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music & Entertainment for Events Kerala | Live Bands & DJs | Greenix',
    description: 'Greenix provides professional music and entertainment services for events in Kerala. Live bands, DJs, traditional cultural performances, stage shows for weddings, corporate events, and parties.',
    images: [
      {
        url: '/logo.png',
        alt: 'Music & Entertainment Kerala - Greenix',
      },
    ],
  },
};

const entertainmentServices = [
  {
    title: "Live Music for Events in Kerala",
    description:
      "Enjoy soulful performances from talented live bands, classical musicians, and fusion artists, tailored to your event type—whether it’s a wedding ceremony, corporate gala, or private party.",
  },
  {
    title: "DJ Services in Kerala",
    description:
      "Our professional DJs create the perfect soundtrack for your event, combining contemporary hits, regional favorites, and customized playlists to keep guests dancing all night.",
  },
  {
    title: "Traditional and Cultural Performances",
    description:
      "Showcase the rich cultural heritage of Kerala with Kathakali, Mohiniyattam, classical dance performances, and folk music, adding authenticity and charm to your celebration.",
  },
  {
    title: "Stage Shows and Themed Entertainment",
    description:
      "From theatrical performances to interactive shows and themed entertainment experiences, we provide unique attractions that captivate and delight guests of all ages.",
  },
  {
    title: "Full Event Entertainment Management",
    description:
      "Our team manages every aspect of entertainment planning, including scheduling, sound setup, lighting, and technical support, ensuring a seamless and professional experience.",
  },
];

export default function MusicEntertainment() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-50 via-white to-slate-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.18),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.15),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">Music & Entertainment</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Music & Entertainment Services in Kerala
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Bring your events to life with Greenix, the leading provider of event entertainment services in Kerala. Whether it’s a wedding, corporate function, or private celebration, we deliver immersive music and entertainment experiences that leave a lasting impression on your guests.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our expert team offers a wide range of entertainment options, carefully curated to complement your event theme and audience, creating vibrant, engaging, and unforgettable atmospheres. From live performances to modern DJ sets, we ensure every moment is filled with energy, excitement, and elegance.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/hero3.webp"
                alt="Music and entertainment in Kerala"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">Immersive Performances</p>
                <p className="mt-2 text-2xl font-semibold">Live Bands · DJs · Cultural Acts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our Entertainment Services</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We curate vibrant, engaging, and unforgettable atmospheres with entertainment experiences that align perfectly with your theme and audience.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {entertainmentServices.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl px-4 text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          As a trusted wedding entertainment and event management company in Kerala, Greenix is dedicated to transforming ordinary gatherings into extraordinary celebrations. Our personalized approach ensures that every performance, song, and show aligns perfectly with your vision, making your event truly memorable.
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Greenix</p>
          <h2 className="mt-4 text-3xl font-semibold">Kerala's Entertainment Specialists</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            From sound design to performer coordination, we handle the pulse of your event so you can focus on your guests. Expect flawless execution, premium talent, and unforgettable ambience.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-slate-900 lg:via-slate-800 lg:to-slate-900 lg:text-white lg:shadow-lg lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-500 sm:text-sm lg:text-purple-300">Amplify with Greenix</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Let Us Orchestrate Your Event's Soundtrack
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Share your vibe, audience, and storyboard—we’ll pair you with the perfect performers, playlists, and stagecraft for a truly immersive celebration.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Talk to Our Team
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
