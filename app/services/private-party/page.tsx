import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/private-party',
  },
  title: 'Private Party Planners Kerala | Birthday & Celebration Events | Greenix',
  description: 'Greenix offers professional private party planning services in Kerala. Expert planners for birthday parties, anniversaries, private celebrations with customized themes, entertainment, and catering.',
  keywords: ['private party planners kerala', 'birthday party organizers kerala', 'anniversary celebration kerala', 'private event planners kerala', 'party management kerala'],
  openGraph: {
    title: 'Private Party Planners Kerala | Birthday & Celebration Events | Greenix',
    description: 'Greenix offers professional private party planning services in Kerala. Expert planners for birthday parties, anniversaries, private celebrations with customized themes, entertainment, and catering.',
    url: 'https://greenix.com/services/private-party',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Private Party Planners Kerala - Greenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Party Planners Kerala | Birthday & Celebration Events | Greenix',
    description: 'Greenix offers professional private party planning services in Kerala. Expert planners for birthday parties, anniversaries, private celebrations with customized themes, entertainment, and catering.',
    images: [
      {
        url: '/logo.png',
        alt: 'Private Party Planners Kerala - Greenix',
      },
    ],
  },
};

const partyServices = [
  {
    title: "Customized Themes and Décor",
    description:
      "We craft unique décor concepts and themes tailored to your preferences, from elegant soirées to fun-filled parties, ensuring every detail reflects your style.",
  },
  {
    title: "Entertainment Planning",
    description:
      "From live performances and DJs to interactive games and engaging activities, we curate entertainment that keeps your guests thrilled and engaged throughout the event.",
  },
  {
    title: "Culinary Experiences",
    description:
      "Handpicked menus, live counters, and gourmet catering designed to suit your tastes and elevate the overall celebration experience.",
  },
  {
    title: "Guest Management and Logistics",
    description:
      "Seamless coordination of invitations, guest seating, transportation, and on-site support for a hassle-free experience.",
  },
  {
    title: "Full Event Coordination",
    description:
      "Our professional team oversees the entire event—from planning to execution—ensuring everything runs smoothly and exceeds expectations.",
  },
];

export default function PrivatePartyPage() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_50%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(244,114,182,0.18),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Private Party Events
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Private Party Event Management in Kerala
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Celebrate life’s special moments with Greenix, the leading private party planners in Kerala. Whether it’s a birthday, anniversary, engagement, house party, or any exclusive celebration, we specialize in creating personalized and unforgettable private events that reflect your style, personality, and vision.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our private event management services in Kerala focus on delivering seamless, creative, and memorable experiences. From concept development to flawless execution, we handle every detail so you can enjoy your celebration without stress.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/about-home.jpg"
                alt="Exclusive private party"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">Curated Atmospheres</p>
                <p className="mt-2 text-2xl font-semibold">Boutique Villas · Rooftop Lounges · Heritage Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our Private Party Services</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            From intimate gatherings to high-energy celebrations, we blend creativity, luxury, and seamless coordination to transform ordinary parties into unforgettable experiences.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {partyServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl px-4 text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          As one of the most trusted exclusive party planners in Kerala, Greenix blends creativity, luxury, and professionalism to transform ordinary gatherings into extraordinary celebrations. We are committed to making your private parties in Kerala truly special and memorable, leaving a lasting impression on you and your guests.
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Why Greenix</p>
          <h2 className="mt-4 text-3xl font-semibold">Exclusive Party Planners with Soul</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            We obsess over the right vibe—from mood lighting and music flow to culinary surprises and interactive touchpoints. Our planners stay behind the scenes so you stay in the spotlight.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-slate-900 lg:via-slate-800 lg:to-slate-900 lg:text-white lg:shadow-lg lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500 sm:text-sm lg:text-rose-400">Celebrate with Greenix</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Let Us Elevate Your Next Private Party
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Share your ideas, moods, and guest list—we&apos;ll craft an atmosphere filled with thoughtful touches, energetic flow, and impeccable hospitality.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Plan a Party
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
