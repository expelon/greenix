import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Corporate Event Management Company Kerala | Business Events | Greenix',
  description: 'Greenix is a leading corporate event management company in Kerala. We organize conferences, seminars, product launches, exhibitions, and corporate meetings with precision and creativity.',
  keywords: ['corporate event management kerala', 'business event planners kerala', 'conference organizers kerala', 'product launch events kerala', 'corporate meeting planners'],
  openGraph: {
    title: 'Corporate Event Management Company Kerala | Business Events | Greenix',
    description: 'Greenix is a leading corporate event management company in Kerala. We organize conferences, seminars, product launches, exhibitions, and corporate meetings with precision and creativity.',
    url: 'https://greenix.com/services/corporate-events',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Corporate Event Management Kerala - Greenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Management Company Kerala | Business Events | Greenix',
    description: 'Greenix is a leading corporate event management company in Kerala. We organize conferences, seminars, product launches, exhibitions, and corporate meetings with precision and creativity.',
    images: [
      {
        url: '/logo.png',
        alt: 'Corporate Event Management Kerala - Greenix',
      },
    ],
  },
};

const corporateServices = [
  {
    title: "Conferences & Seminars",
    description:
      "Strategic planning and execution for impactful conferences and seminars with venue selection, stage design, and full technical support.",
  },
  {
    title: "Product Launches",
    description:
      "High-profile product launch events with branding, media coordination, stage production, and guest experience management.",
  },
  {
    title: "Exhibitions & Trade Shows",
    description:
      "Complete exhibition management from booth design and setup to visitor engagement and lead capture systems.",
  },
  {
    title: "Annual Meetings & Award Nights",
    description:
      "Corporate galas and award ceremonies with elegant themes, entertainment, and seamless event flow management.",
  },
  {
    title: "Brand Activation Events",
    description:
      "Creative brand experiences and activation events that connect with audiences and drive measurable business results.",
  },
];

export default function CorporateEventsPage() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(71,85,105,0.15),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Corporate Events</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Corporate Event Management Company in Kerala
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Greenix is a professional corporate event management company in Kerala, offering complete end-to-end solutions for corporate and business events of all sizes. From concept creation and strategic planning to seamless execution and post-event coordination, we ensure every corporate event is managed with precision, creativity, and professionalism.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              As experienced corporate event planners in Kerala, we specialize in designing impactful corporate events that align with your brand identity, marketing goals, and business objectives. Our expert team works closely with clients to understand their vision, audience, and expectations—delivering engaging, well-organized, and result-driven corporate experiences.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/about-home.jpg"
                alt="Corporate event setup in Kerala"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">Professional Excellence</p>
                <p className="mt-2 text-2xl font-semibold">Conferences · Launches · Brand Activations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Our Corporate Event Management Services in Kerala</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our corporate event management services in Kerala include conferences, seminars, corporate meetings, product launches, exhibitions, trade shows, annual meetings, award nights, and brand activation events. We manage every detail, including premium venue selection across Kerala, stage and set design, audio-visual production, lighting, hospitality services, logistics management, registration systems, and complete technical support.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {corporateServices.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Why Greenix</p>
          <h2 className="mt-4 text-3xl font-semibold">Kerala's Corporate Event Specialists</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            With access to top corporate event venues in Kerala and a strong vendor network, Greenix ensures smooth coordination, timely execution, and high-quality service delivery. Whether it is a formal corporate conference, a high-profile product launch, or a large-scale brand event, our customized solutions create lasting impressions and measurable business results.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-emerald-900 lg:via-slate-900 lg:to-slate-900 lg:text-white lg:shadow-lg lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 sm:text-sm lg:text-emerald-300">Corporate Excellence</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Let Us Deliver Your Next Corporate Event with Precision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Recognized as one of the trusted corporate event management companies in Kerala, Greenix is committed to delivering excellence, innovation, and reliability in every project we undertake—helping brands connect, engage, and succeed through professionally managed corporate events.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Plan a Corporate Event
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
