import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/beach-wedding',
  },
  title: 'Beach Wedding Planners Kerala | Seaside Weddings | Greenix',
  description: 'Greenix offers professional beach wedding planning in Kerala. Create your dream seaside wedding with pristine beaches, golden sands, and scenic sunsets. Expert beach wedding coordinators for unforgettable ceremonies.',
  keywords: ['beach wedding kerala', 'seaside wedding planners', 'kerala beach wedding', 'beach wedding coordinators', 'coastal wedding kerala'],
  openGraph: {
    title: 'Beach Wedding Planners Kerala | Seaside Weddings | Greenix',
    description: 'Greenix offers professional beach wedding planning in Kerala. Create your dream seaside wedding with pristine beaches, golden sands, and scenic sunsets.',
    url: 'https://www.thegreenix.com/services/beach-wedding',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Beach Wedding Planners Kerala - Greenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beach Wedding Planners Kerala | Seaside Weddings | Greenix',
    description: 'Greenix offers professional beach wedding planning in Kerala. Create your dream seaside wedding with pristine beaches, golden sands, and scenic sunsets.',
    images: [
      {
        url: '/logo.png',
        alt: 'Beach Wedding Planners Kerala - Greenix',
      },
    ],
  },
};

const beachServices = [
  {
    title: "Venue Selection and Permissions",
    description:
      "We help you choose the perfect beach location and manage all necessary permissions to ensure a smooth event.",
  },
  {
    title: "Décor and Styling",
    description:
      "From elegant floral arrangements and thematic décor to luxurious seating and lighting, we create a stunning seaside ambiance tailored to your preferences.",
  },
  {
    title: "Guest Arrangements",
    description:
      "Coordinating accommodation, transportation, and hospitality for your guests to ensure comfort and convenience throughout the celebration.",
  },
  {
    title: "Event Coordination",
    description:
      "Complete management of event flow, timelines, and logistics to guarantee a seamless beach wedding experience.",
  },
  {
    title: "Entertainment and Experiences",
    description:
      "From live music and DJ services to cultural performances, we curate entertainment that complements your wedding theme and enhances the joyous atmosphere.",
  },
];

export default function BeachWeddingPage() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-rose-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(248,113,113,0.15),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Beach Wedding</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Beach Wedding Planners in Kerala
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Turn your dream of a romantic beach wedding in Kerala into reality with Greenix, one of the most trusted beach wedding planners in Kerala. Kerala’s pristine coastlines, golden sands, and scenic sunsets provide the perfect backdrop for creating an unforgettable seaside wedding experience. Whether you envision an intimate ceremony or a grand celebration, Greenix ensures every moment is magical, elegant, and stress-free.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              As a leading Kerala beach wedding company, we specialize in designing customized beach weddings that reflect your style, traditions, and vision. Our professional team takes care of all aspects of planning and execution, so you can focus on enjoying your special day.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/about-home.jpg"
                alt="Beach wedding setup in Kerala"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">Seaside Ceremonies</p>
                <p className="mt-2 text-2xl font-semibold">Golden Sands · Sunset Vows · Coastal Bliss</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our Beach Wedding Services in Kerala</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {beachServices.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-4">
        <div className="mx-auto max-w-4xl px-4 text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          With Greenix as your seaside wedding planners in Kerala, every detail of your beach wedding is meticulously planned and executed. We combine creativity, professionalism, and local expertise to transform your seaside wedding dreams into a luxurious and unforgettable reality.
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-sky-900 lg:via-slate-900 lg:to-slate-900 lg:text-white lg:shadow-lg lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-500 sm:text-sm lg:text-sky-300">Beach Wedding Planners</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Let Us Bring Your Romantic Beach Wedding in Kerala to Life
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Turn your dream of a romantic beach wedding in Kerala into reality with Greenix, one of the most trusted beach wedding planners in Kerala. With Greenix as your seaside wedding planners in Kerala, every detail of your beach wedding is meticulously planned and executed. We combine creativity, professionalism, and local expertise to transform your seaside wedding dreams into a luxurious and unforgettable reality.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Plan a Beach Wedding
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
