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

      <section className="bg-slate-50 py-16">
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
                We specialize in curating unforgettable experiences that blend the elegance of Kerala’s
                heritage with the innovation and purpose of your corporate events. From leadership meets and
                dealer gatherings to private island celebrations, we bring your vision to life with a unique touch
                of Kerala&apos;s rich cultural legacy!
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
    </main>
  );
}
