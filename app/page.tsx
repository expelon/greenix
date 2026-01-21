"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, MapPin, Phone, Mail, Calendar, Users, Sparkles, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const heroImages = ["/hero.webp", "/about-home.jpg", "/hero3.webp"];
const trustLogos = [
  "/trust1.jpg",
  "/trust2.png",
  "/trust3.png",
  "/trust4.png",
  "/trust5.png",
  "/trust6.png",
];
const faqItems = [
  {
    question: "What types of events does Greenix Experiences specialize in?",
    answer:
      "We curate a wide spectrum of events—from high-impact corporate gatherings like leadership summits and dealer meets to private island celebrations, weddings, and intimate functions—all infused with Kerala's cultural richness.",
  },
  {
    question: "How is Kerala's culture integrated into the events?",
    answer:
      "From traditional Kathakali performances and Kalaripayattu displays to fragrant jasmine canopies and chenda drumming processions, we seamlessly weave Kerala’s heritage into every event touchpoint.",
  },
  {
    question: "What kind of team-building experiences do you offer?",
    answer:
      "Our signature experience is the thrilling Chundanvallam Snakeboat Race—an unforgettable team-building activity that promotes coordination, camaraderie, and pure adrenaline.",
  },
  {
    question: "Can you organize cultural tours or heritage experiences alongside events?",
    answer:
      "Definitely. We offer curated city tours, heritage walks, and immersive experiences to help your guests connect with Kerala’s soul beyond the event setting.",
  },
  {
    question: "How do I get started with logistics and on-ground execution?",
    answer:
      "Simply reach out to us via our contact page or call us directly. We'll schedule a discovery session to understand your vision, then bring it to life with our signature cultural finesse.",
  },
];

const testimonials = [
  {
    name: "Anjali Menon",
    role: "Corporate Offsite",
    quote:
      "Greenix planned our leadership meet end-to-end with absolute precision. The Kerala cultural touches made it unforgettable.",
  },
  {
    name: "Rohit Nair",
    role: "Destination Wedding",
    quote:
      "From venue curation to on-ground coordination, everything was seamless. Our guests still talk about the experience.",
  },
  {
    name: "Meera Krishnan",
    role: "Private Celebration",
    quote:
      "Elegant decor, punctual execution, and a calm team even under pressure. Greenix made the day stress-free.",
  },
  {
    name: "Vishnu S.",
    role: "Dealer Meet",
    quote:
      "Professional, creative, and incredibly responsive. The flow of the event was perfect from start to finish.",
  },
  {
    name: "Sarah Joseph",
    role: "Beach Wedding",
    quote:
      "The styling was premium and the coordination was flawless. It felt like a movie set brought to life.",
  },
  {
    name: "Arjun Pillai",
    role: "Team Building",
    quote:
      "The Snakeboat Race experience was the highlight of our retreat. Our team bonded like never before.",
  },
];
const shortsVideos = [
  {
    id: "c69srCGO2Fk",
    title: "Temple Courtyard Elegance",
    mood: "A sun-dappled snippet from a heritage venue setup.",
  },
  {
    id: "GhiaUiAsHzg",
    title: "Dreamy Floral Mandap",
    mood: "An ethereal jasmine-soaked micro moment.",
  },
  {
    id: "ePJ3lnJ6FLE",
    title: "Chenda Regal Welcome",
    mood: "Energy-packed beats welcoming guests in style.",
  },
  {
    id: "I3hZmEnPsRU",
    title: "Backwater Golden Hour",
    mood: "Cinematic aerial views across Kerala’s waters.",
  },
  {
    id: "aYND4-QcyK4",
    title: "Sangeet Under The Stars",
    mood: "Lights, music, and joyous motion on the dance floor.",
  },
  {
    id: "Ufuxu8x-pCk",
    title: "Signature Spark Finale",
    mood: "A dramatic closing shot drenched in sparkle.",
  },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [playingShort, setPlayingShort] = useState<{ key: string; videoId: string } | null>(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const shortsPlayerRef = useRef<any>(null);
  const ytReadyRef = useRef(false);
  const shortsPlayerHostRef = useRef<HTMLDivElement | null>(null);
  const shortsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((previous) => (previous + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const win = window as any;

    const markReady = () => {
      const YT = win.YT;
      if (!YT || !YT.Player) return;
      ytReadyRef.current = true;
    };

    if (win.YT && win.YT.Player) {
      markReady();
      return;
    }

    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const previousReady = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === "function") previousReady();
      markReady();
    };
  }, []);

  useEffect(() => {
    if (!playingShort) {
      setIsMarqueePaused(false);
      try {
        shortsPlayerRef.current?.destroy?.();
      } catch {
        // ignore
      }
      shortsPlayerRef.current = null;
      if (shortsPlayerHostRef.current) {
        shortsPlayerHostRef.current.innerHTML = "";
      }
      shortsPlayerHostRef.current = null;
      return;
    }

    const hostEl = shortsPlayerHostRef.current;
    const win = window as any;
    const YT = win?.YT;

    if (!hostEl || !ytReadyRef.current || !YT?.Player) {
      return;
    }

    setIsMarqueePaused(true);

    try {
      shortsPlayerRef.current?.destroy?.();
    } catch {
      // ignore
    }
    shortsPlayerRef.current = null;
    hostEl.innerHTML = "";

    shortsPlayerRef.current = new YT.Player(hostEl, {
      videoId: playingShort.videoId,
      playerVars: {
        autoplay: 1,
        mute: 0,
        controls: 1,
        playsinline: 1,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onStateChange: (event: any) => {
          if (event?.data === YT.PlayerState.ENDED) {
            try {
              shortsPlayerRef.current?.destroy?.();
            } catch {
              // ignore
            }
            shortsPlayerRef.current = null;
            if (shortsPlayerHostRef.current) {
              shortsPlayerHostRef.current.innerHTML = "";
            }
            setPlayingShort(null);
            setIsMarqueePaused(false);
          }
        },
      },
    });

    return () => {
      try {
        shortsPlayerRef.current?.destroy?.();
      } catch {
        // ignore
      }
      shortsPlayerRef.current = null;
      if (shortsPlayerHostRef.current) {
        shortsPlayerHostRef.current.innerHTML = "";
      }
    };
  }, [playingShort]);

  useEffect(() => {
    const section = shortsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playingShort) {
            try {
              shortsPlayerRef.current?.destroy?.();
            } catch {
              // ignore
            }
            shortsPlayerRef.current = null;
            if (shortsPlayerHostRef.current) {
              shortsPlayerHostRef.current.innerHTML = "";
            }
            setPlayingShort(null);
            setIsMarqueePaused(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [playingShort]);

  return (
    <main>
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
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/25 hover:bg-white/20"
              >
                Contact Us
              </a>
              
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
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
        </div>
      </section>


      <section className="bg-white py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-black">
            Trusted By
          </h2>
          
          {/* Mobile: Animated marquee */}
          <div className="lg:hidden mt-8 relative overflow-hidden">
            <div className="marquee-track flex gap-8">
              {[...trustLogos, ...trustLogos].map((logo, index) => {
                const sizeConfig =
                  index === 1 || index === 7
                    ? { width: 210, height: 70, className: "h-16" }
                    : index === 0 || index === 6
                    ? { width: 150, height: 55, className: "h-12" }
                    : index === 2 || index === 3 || index === 8 || index === 9
                    ? { width: 130, height: 45, className: "h-11" }
                    : { width: 140, height: 50, className: "h-12" };

                return (
                  <div key={`mobile-${logo}-${index}`} className="flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Trusted brand ${(index % 6) + 1}`}
                      width={sizeConfig.width}
                      height={sizeConfig.height}
                      className={`w-auto object-contain ${sizeConfig.className}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Static grid */}
          <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-10 lg:mt-8">
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
                <div key={`desktop-${logo}`} className="flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Trusted brand ${index + 1}`}
                    width={sizeConfig.width}
                    height={sizeConfig.height}
                    className={`w-auto object-contain ${sizeConfig.className}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        <section className="order-2 bg-gradient-to-b from-white via-white to-slate-50 py-16">
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

        <section id="about" className="order-1 bg-slate-50 py-16">
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
                  Creating Unforgettable Moments in Kerala
                </h3>
                <p className="mt-6 text-base leading-relaxed text-slate-700">
                  We specialize in curating unforgettable experiences that blend the elegance of Kerala’s heritage with the innovation and purpose of your corporate events. From leadership meets and dealer gatherings to private island celebrations, we bring your vision to life with a unique touch of Kerala&apos;s rich cultural legacy!
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="why-choose-us" className="why-choose-aura relative overflow-hidden py-24">
        <div className="why-choose-aura-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Why Choose Us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="group rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-xl shadow-slate-300/50 ring-1 ring-slate-100/70 backdrop-blur-sm transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-slate-900/15 lg:order-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100 transition-colors lg:group-hover:bg-sky-500 lg:group-hover:text-white lg:group-hover:ring-sky-500">
                01
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Tailored Experiences</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every event is meticulously customized to reflect your goals and brand identity.
              </p>
            </div>

            <div className="group rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-xl shadow-slate-300/50 ring-1 ring-slate-100/70 backdrop-blur-sm transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-slate-900/15 lg:order-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100 transition-colors lg:group-hover:bg-sky-500 lg:group-hover:text-white lg:group-hover:ring-sky-500">
                02
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Cultural Expertise</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our deep-rooted connections with Kerala's cultural custodians ensure authenticity.
              </p>
            </div>

            <div className="group rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-xl shadow-slate-300/50 ring-1 ring-slate-100/70 backdrop-blur-sm transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-slate-900/15 lg:order-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100 transition-colors lg:group-hover:bg-sky-500 lg:group-hover:text-white lg:group-hover:ring-sky-500">
                03
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Seamless Execution</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                From logistics to last-minute changes, we handle everything with precision.
              </p>
            </div>

            <div className="group rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-xl shadow-slate-300/50 ring-1 ring-slate-100/70 backdrop-blur-sm transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-slate-900/15 lg:order-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100 transition-colors lg:group-hover:bg-sky-500 lg:group-hover:text-white lg:group-hover:ring-sky-500">
                04
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Exclusive Access</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Private islands, historic forts, tranquil backwaters-we open doors to Kerala's hidden gems.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[28px] bg-slate-900/95 p-8 text-white shadow-2xl shadow-slate-900/40 ring-1 ring-white/20 transition-all duration-300 backdrop-blur-sm lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-black/40 lg:order-3 lg:row-span-2">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top_left,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.35),transparent_60%)]" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white ring-1 ring-white/15">
                  05
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-snug">Engaging Team-Building</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Our activities, like the Snakeboat Race, go beyond fun-they build stronger, more connected teams.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Corporate Event</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                End-to-end corporate event planning with premium venues, hospitality, and flawless execution.
              </p>
              <Link
                href="/services/corporate-events"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Wedding Planners</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Full-service wedding planning with curated themes, decor, and seamless coordination for your special day.
              </p>
              <Link
                href="/services/wedding-planners"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Destination Weddings</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Stunning destination weddings in Kerala with curated venues, logistics, and unforgettable experiences.
              </p>
              <Link
                href="/services/destination-weddings"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Private Parties</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Exclusive private parties with custom themes, entertainment, and impeccable guest management.
              </p>
              <Link
                href="/services/private-party"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Music & Entertainment</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Live music, DJs, and entertainment services to elevate your events with energy and style.
              </p>
              <Link
                href="/services/music-entertainment"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Beach Wedding</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Romantic beach weddings with stunning setups, decor, and seamless coordination by the sea.
              </p>
              <Link
                href="/services/beach-wedding"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
              >
                View More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="shorts" ref={shortsSectionRef} className={`relative overflow-hidden bg-white text-slate-900 ${isMarqueePaused ? "marquee-paused" : ""}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(56,189,248,0.08),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(16,185,129,0.06),transparent_60%),radial-gradient(700px_circle_at_50%_90%,rgba(99,102,241,0.05),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        <div className="relative w-full">
          <div className="mx-auto max-w-6xl mb-12 text-center px-4 sm:px-6 lg:px-8">
            <p className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              Shorts Gallery
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Micro Stories from the Greenix Lens
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base leading-relaxed text-slate-600">
              Immerse yourself in quick, cinematic cuts straight from our YouTube Shorts—each a showcase of Kerala&apos;s
              culture, color, and rhythm.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="marquee-track flex gap-6 lg:gap-8">
              {[...shortsVideos, ...shortsVideos].map((video, idx) => {
                const thumbnail = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                const key = `${video.id}-${idx}`;
                const isPlaying = playingShort?.key === key;

                return (
                  <button
                    key={`${video.id}-${idx}`}
                    type="button"
                    onClick={() => {
                      if (isPlaying) return;
                      setPlayingShort({ key, videoId: video.id });
                    }}
                    className="group relative flex-none w-[240px] sm:w-[270px] lg:w-[300px] focus:outline-none"
                    aria-label={isPlaying ? `Playing ${video.title}` : `Play ${video.title}`}
                  >
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black">
                        {isPlaying ? (
                          <div
                            ref={(el) => {
                              shortsPlayerHostRef.current = el;
                            }}
                            className="h-full w-full"
                          />
                        ) : (
                          <>
                            <img src={thumbnail} alt={video.title} className="h-full w-full object-cover" loading="lazy" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-xl transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-7 w-7">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">Team</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">The People Behind the Magic</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Meet the passionate professionals who bring your events to life.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              {
                name: "Ms. Sarita Babu",
                title: "Managing Director, Greenix Experiences Pvt. Ltd.",
                bio: "Ms. Sarita Babu’s dynamic leadership keeps Greenix Experiences delivering meaningful, memorable, and culturally rich celebrations across the globe.",
              },
              {
                name: "Ms. Anu Stalin",
                title: "Director, Greenix Experiences Pvt. Ltd.",
                bio: "Ms. Anu Stalin inspires guests and teams alike with her dedication, creativity, and love for all things natural and nourishing.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-3xl text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12">
                      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{member.title}</p>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{member.bio}</p>
                    <div className="mt-6 flex gap-3">
                      {[
                        {
                          label: "X",
                          href: "#",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                              <path d="M15.5 3H18l-4.5 5.15L19.5 21H13l-3.5-5-4 5H2l5-6.1L3 3h5l3.1 4.5L15.5 3Zm-1.6 15h1.7L9.7 5.76h-1.8l6 12.24Z" />
                            </svg>
                          ),
                        },
                        {
                          label: "Facebook",
                          href: "#",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                              <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v6.98A10 10 0 0 0 22 12Z" />
                            </svg>
                          ),
                        },
                        {
                          label: "Instagram",
                          href: "#",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                              <rect width="14" height="14" x="5" y="5" rx="4" />
                              <circle cx="12" cy="12" r="3" />
                              <circle cx="16.5" cy="7.5" r=".75" fill="currentColor" stroke="none" />
                            </svg>
                          ),
                        },
                        {
                          label: "LinkedIn",
                          href: "#",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.75h3.96V21H3V8.75Zm6.48 0H13v1.66h.05c.55-1.04 1.89-2.14 3.89-2.14 4.16 0 4.93 2.74 4.93 6.3V21h-3.96v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.85V21H9.48V8.75Z" />
                            </svg>
                          ),
                        },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-400 hover:text-slate-700"
                          aria-label={`${social.label} profile`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="w-full">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              A few words from the people who trusted Greenix to craft their most important moments.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="relative overflow-hidden">
              <div className="marquee-track marquee-track-reverse flex gap-5">
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div
                    key={`${t.name}-${t.role}-${idx}-top`}
                    className="w-[280px] sm:w-[320px] flex-none rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40"
                  >
                    <p className="text-sm leading-relaxed text-slate-700">{t.quote}</p>
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="marquee-track flex gap-5">
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div
                    key={`${t.name}-${t.role}-${idx}-bottom`}
                    className="w-[280px] sm:w-[320px] flex-none rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-200/40"
                  >
                    <p className="text-sm leading-relaxed text-slate-700">{t.quote}</p>
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-slate-900 py-20" style={{ backgroundImage: "url(/hero3.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Looking for the most creative & innovative event planners in Kerala?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Imagine celebrating the most special events of your life without worrying about a single thing. Greenix
                Experiences is here to make your dream events come true! Our expert event management team offers
                professional event planning and management services in cities, villages, and small towns across Kerala,
                from south to north, using creative and innovative methods to plan and curate perfect, hassle-free
                celebrations that will captivate your attendees. Contact us today to bring your vision to life and create
                unforgettable memories!
              </p>
            </div>
            <div className="rounded-xl bg-white/95 p-8 shadow-2xl shadow-slate-900/40">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600 ring-1 ring-sky-500/20">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Answers to common questions about our Kerala-inspired experiences.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`group overflow-hidden rounded-2xl border bg-white/80 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-300/50 ${
                    isOpen ? "border-sky-200/70 ring-1 ring-sky-500/20" : "border-slate-200/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center text-sky-600 transition-transform duration-200 ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid px-6 transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden border-t border-slate-100/70 pb-6 pt-4 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
