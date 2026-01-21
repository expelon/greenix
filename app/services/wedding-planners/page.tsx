import Image from "next/image";
import Link from "next/link";

const weddingServices = [
  {
    title: "Wedding Design & Theme Planning",
    description:
      "Our creative team curates customized wedding themes and décor concepts that bring your vision to life. From stage design, floral décor, lighting, and props to complete venue styling, we create visually stunning and immersive wedding experiences.",
  },
  {
    title: "Venue Selection & Destination Wedding Planning",
    description:
      "Choosing the perfect venue is key to a successful wedding. We help you select the best wedding venues across Kerala, including backwaters, beaches, hill stations, luxury resorts, and heritage properties — ensuring the location aligns with your aesthetic and logistical needs.",
  },
  {
    title: "Vendor Management & Budget Planning",
    description:
      "We collaborate with trusted wedding vendors in Kerala, including caterers, decorators, photographers, videographers, makeup artists, entertainers, and technical teams. Our transparent budgeting ensures optimal cost control without compromising quality.",
  },
  {
    title: "Guest Hospitality & Wedding Logistics",
    description:
      "From travel coordination and accommodation bookings to guest reception and on-ground management, we ensure seamless hospitality so your guests enjoy a comfortable and memorable experience throughout the celebrations.",
  },
  {
    title: "Wedding Day Coordination & Event Flow",
    description:
      "Our professional wedding coordinators oversee every ceremony and function — from pre-wedding rituals to the reception — ensuring perfect timing, smooth transitions, and flawless execution on your special day.",
  },
];

export default function WeddingPlannersPage() {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.15),_transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Wedding Planners</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Wedding Planners in Kerala – Creating Timeless Celebrations with Greenix
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Planning a wedding is a beautiful journey, but it also involves countless details, decisions, and coordination. At Greenix, we are experienced wedding planners in Kerala, dedicated to transforming your wedding vision into a flawlessly planned and unforgettable celebration that truly reflects your personality, traditions, and style.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              As a trusted event management company in Kerala, we handle every stage of your wedding — from concept development to seamless execution — ensuring a smooth, stress-free experience for you and your family. Our goal is to deliver elegant, well-organized, and memorable weddings that exceed expectations.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src="/about-home.jpg"
                alt="Wedding planning in Kerala"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">Timeless Celebrations</p>
                <p className="mt-2 text-2xl font-semibold">Traditional · Destination · Luxury Weddings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Customized Wedding Planning in Kerala</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Every couple has a unique story, and we believe every wedding should reflect that individuality. We begin by understanding your ideas, preferences, cultural requirements, and budget. Based on this, we design a personalized wedding plan — whether you envision a traditional Kerala wedding, a modern luxury celebration, or a breathtaking destination wedding in Kerala.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {weddingServices.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50 via-white to-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Why Choose Greenix as Your Wedding Planner in Kerala</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From bespoke concepts to flawless coordination, our team handles every moment with artistry and calm precision.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              "Personalized wedding concepts tailored to your vision",
              "Professional planning and execution backed by experience",
              "Strong local network of premium venues and trusted vendors",
              "End-to-end wedding management from planning to post-event support",
              "A stress-free wedding experience while we manage every detail",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-rose-100 bg-white/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-rose-200"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg font-semibold text-rose-500 shadow-inner">
                    ✦
                  </span>
                  <p className="text-base font-medium text-slate-800 sm:text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Kerala – The Perfect Wedding Destination</p>
          <h2 className="mt-4 text-3xl font-semibold">God’s Own Country for Your Special Day</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Kerala, famously known as God’s Own Country, is one of India’s most sought-after wedding destinations. With lush greenery, serene backwaters, scenic hill stations, and pristine beaches, Kerala offers stunning backdrops for unforgettable weddings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Whether you’re planning a culturally rich traditional wedding or a luxurious destination celebration, Greenix ensures every detail is thoughtfully planned and beautifully executed.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 text-slate-900 shadow-sm sm:px-8 lg:bg-gradient-to-br lg:from-rose-900 lg:via-pink-900 lg:to-slate-900 lg:text-white lg:shadow-lg lg:py-14">
          <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500 sm:text-sm lg:text-rose-300">Start Planning</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                Start Planning Your Dream Wedding in Kerala
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-white/80">
                Your wedding should be filled with joy, celebration, and beautiful memories — not stress. Let Greenix, your trusted wedding planners in Kerala, take care of everything while you enjoy every moment of your special day.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:w-64 lg:bg-white lg:text-slate-900 lg:hover:bg-white/90"
              >
                Plan Your Wedding
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
