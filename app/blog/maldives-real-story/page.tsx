import { Metadata } from 'next';
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/maldives-real-story',
  },
  title: 'The Real Story About the Maldives Most Don\'t Know | Greenix Blog',
  description: 'Discover the authentic Maldives beyond luxury resorts. Learn about local island life, traditional culture, and hidden gems that most travelers never experience. Real Maldivian stories.',
  keywords: ['maldives real story', 'authentic maldives', 'maldives local life', 'maldives culture', 'maldives tourism guide', 'maldives beyond resorts'],
  openGraph: {
    title: 'The Real Story About the Maldives Most Don\'t Know | Greenix Blog',
    description: 'Discover the authentic Maldives beyond luxury resorts. Learn about local island life, traditional culture, and hidden gems that most travelers never experience.',
    url: 'https://greenix.com/blog/maldives-real-story',
    siteName: 'Greenix',
    images: [
      {
        url: '/maldives.webp',
        width: 1200,
        height: 630,
        alt: 'The Real Maldives - Authentic Island Life and Culture',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Real Story About the Maldives Most Don\'t Know | Greenix Blog',
    description: 'Discover the authentic Maldives beyond luxury resorts. Learn about local island life, traditional culture, and hidden gems that most travelers never experience.',
    images: [
      {
        url: '/maldives.webp',
        alt: 'The Real Maldives - Authentic Island Life and Culture',
      },
    ],
  },
};

export default function MaldivesRealStory() {
  return (
    <main className="pb-16">
      <section className="relative isolate min-h-[60svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/maldives.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/70" />

        <div className="mx-auto flex min-h-[60svh] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              The Real Story About the Maldives Most Don't Know
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              January 21, 2026
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-700">
              For many travelers, the Maldives exists as a picture-perfect fantasy—overwater villas, turquoise lagoons, and peaceful private beaches. While this image is appealing, it represents only a small slice of reality. Beyond the resorts lies a country shaped by generations of island life, deep cultural roots, and a deep connection to the sea.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              The Maldives consists of over a thousand small coral islands arranged in long chains known as atolls. Only a limited number of these islands are home to permanent communities. Most Maldivians live on modest local islands where daily life is closely shared, traditions are preserved, and the pace is slower and more intentional. The widespread islands make the Maldives unlike almost any other nation on Earth.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Although the country is now famous for tourism, this industry is relatively new. Large-scale tourism began only a few decades ago. Long before visitors arrived, islanders depended on the ocean for survival. Fishing, sailing, and traditional boat building have been essential skills in Maldivian island life for generations. For centuries, the sea was not a luxury experience—it was the foundation of everyday life.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">A Past Shaped by the Sea</h2>

            <p className="text-lg leading-relaxed text-slate-600">
              The Maldives has always maintained connections beyond its shores. Its location placed it along important sea routes used by traders and travelers from different parts of the world. As these interactions continued, they shaped everyday life, allowing new influences to blend in without erasing local character.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Religion later became a defining element of Maldivian society. Islamic practices guide daily routines, social values, and community life. Faith is woven naturally into everyday activities, offering structure and unity rather than separation from ordinary life.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Despite periods of outside rule and influence, Maldivians retained a strong sense of continuity. The ability to adapt while preserving core traditions helped the culture endure and evolve across centuries.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Nature at the Center of Island Life</h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Life in the Maldives is closely tied to the natural environment. The islands rise only slightly above the ocean, making them visually stunning but environmentally fragile. The sea provides food, employment, and protection, yet it also requires care and respect.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Coral reefs are vital to island survival. They support marine life, protect shorelines, and sustain fishing communities. Beneath the water lies a diverse ecosystem that plays a key role in both nature and local livelihoods. For island residents, protecting the environment is not an option—it is a necessity.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              As environmental pressures increase, sustainability has become deeply personal. Preserving the ocean means safeguarding homes, traditions, and the future of island life.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">A Side of the Maldives Few Travelers Experience</h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Life away from resort islands follows a very different rhythm. Days begin early, often with fishing boats returning to shore. Families prepare simple meals, neighbors exchange greetings, and everyday life follows the rhythm of community and nature, not fixed timetables.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Meals are fresh and simple, shaped by fish, coconut, rice, and flatbread. Boat building and other traditional crafts continue to exist because they are still practiced in daily island routines.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Small moments—sharing tea in the evening, children playing by the water, quiet conversations under open skies—define the true character of island life.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Discover the Maldives Beyond the Surface</h2>

            <p className="text-lg leading-relaxed text-slate-600">
              The Maldives reveals its true beauty when you look past luxury images and take time to connect with its people and places. The most meaningful experiences are found on local islands, in everyday interactions, and in moments that feel genuine and unplanned.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Ready to explore a different side of the Maldives?</h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Greenix Experiences & Events designs travel experiences that go beyond resort stays, connecting travelers with genuine island life.
            </p>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 my-12 border border-sky-100 space-y-3">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-base font-medium sm:text-lg">
                  +91 98460 20091 <span className="text-slate-400">|</span> +91 93460 72050
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-base sm:text-lg">info@thegreenix.com</div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              The Maldives is not just a place to visit; it is a living narrative formed by the ocean, its communities, and generations of island life. Look beyond the brochure to experience what many travelers miss.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link href="/blog" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors group">
              <svg className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
