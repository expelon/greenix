"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = ["/hero.webp", "/hero2.webp", "/hero3.webp"];
const trustLogos = [
  "/trust1.jpg",
  "/trust2.png",
  "/trust3.png",
  "/trust4.png",
  "/trust5.png",
  "/trust6.png",
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((previous) => (previous + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center hero-bg-animate"
          style={{
            backgroundImage: `url(${heroImages[currentHero]})`,
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/30" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
              Kerala's #1 Exclusive Event Company
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Partner with Greenix
              <br />
              Event Management
              <br />
              in Kerala
            </h1>
            <div className="mt-10 flex flex-row gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/25 hover:bg-white/20"
              >
                Contact Us
              </a>
              <a
                href="#brochure"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                View More
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
                  <Image src="/p1.webp" alt="Client 1" fill sizes="40px" className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
                  <Image src="/p2.webp" alt="Client 2" fill sizes="40px" className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
                  <Image src="/p3.webp" alt="Client 3" fill sizes="40px" className="object-cover" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-yellow-400">★★★★★</div>
                <div className="text-xs text-white/80">4.8/5 Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-black">
            Trusted By
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustLogos.map((logo, index) => {
              const sizeConfig =
                index === 1
                  ? { width: 210, height: 70, className: "h-16" }
                  : index === 0
                  ? { width: 150, height: 55, className: "h-12" }
                  : index === 2 || index === 3
                  ? { width: 130, height: 45, className: "h-11" }
                  : { width: 140, height: 50, className: "h-12" };

              return (
                <Image
                  key={logo}
                  src={logo}
                  alt={`Trusted brand ${index + 1}`}
                  width={sizeConfig.width}
                  height={sizeConfig.height}
                  className={`w-auto object-contain ${sizeConfig.className}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        <section className="order-2 bg-gradient-to-b from-white via-white to-slate-50 py-16 lg:order-1">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-[16/9] overflow-hidden shadow-[0_25px_60px_-30px_rgba(15,23,42,0.75)]">
                {isStoryPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/vZGIa23kZvM?rel=0&modestbranding=1&playsinline=1&controls=1&autoplay=1"
                    title="Greenix celebration highlight"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <>
                    <Image
                      src="/hero2.webp"
                      alt="Greenix celebration highlight"
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
                    <button
                      type="button"
                      onClick={() => setIsStoryPlaying(true)}
                      className="group absolute inset-0 flex items-center justify-center"
                      aria-label="Play the Greenix story video"
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-xl transition group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-9 w-9">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="order-1 bg-slate-50 py-16 lg:order-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96">
                <Image
                  src="/about-home.jpg"
                  alt="About Greenix"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
                  About Greenix
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                  Crafting Immersive Corporate Experiences in Kerala
                </h3>
                <p className="mt-6 text-base leading-relaxed text-slate-700">
                  We specialize in curating unforgettable experiences that blend the elegance of Kerala’s heritage with the innovation and purpose of your corporate events. From leadership meets and dealer gatherings to private island celebrations, we bring your vision to life with a unique touch of Kerala&apos;s rich cultural legacy!
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              What We Offer
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              From planning to production, we manage every detail to deliver seamless events with a signature
              Kerala touch.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Corporate Event</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                End-to-end corporate event planning with premium venues, hospitality, and flawless execution.
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Wedding Planners</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Full-service wedding planning with curated themes, decor, and seamless coordination for your special day.
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Destination Weddings</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Stunning destination weddings in Kerala with curated venues, logistics, and unforgettable experiences.
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Private Parties</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Exclusive private parties with custom themes, entertainment, and impeccable guest management.
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Music & Entertainment</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Live music, DJs, and entertainment services to elevate your events with energy and style.
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Beach Wedding</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Romantic beach weddings with stunning setups, decor, and seamless coordination by the sea.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/40"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
