import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pepper Island - A Hidden Paradise for Boat Tourism in Kochi | Greenix',
  description: 'Discover Pepper Island, one of Kochi\'s most beautiful hidden gems. Experience untouched private island with boat tourism, traditional South Indian cuisine, and authentic Kerala hospitality.',
  keywords: ['pepper island', 'boat tourism kochi', 'private island kochi', 'hidden paradise kochi', 'kerala backwaters', 'traditional south indian cuisine', 'nature tourism'],
  openGraph: {
    title: 'Pepper Island - A Hidden Paradise for Boat Tourism in Kochi | Greenix',
    description: 'Discover Pepper Island, one of Kochi\'s most beautiful hidden gems. Experience untouched private island with boat tourism, traditional South Indian cuisine, and authentic Kerala hospitality.',
    url: 'https://greenix.com/pepper-island',
    siteName: 'Greenix',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Pepper Island - Hidden Paradise in Kochi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PepperIsland() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 bg-cover bg-center">
          <Image
            src="/island4.webp"
            alt="Pepper Island Hidden Paradise"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/40" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
              Hidden Paradise in Kochi
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Pepper Island
            </h1>
            <p className="mt-2 sm:mt-6 text-lg leading-relaxed text-white/90">
              A Hidden Paradise for Boat Tourism in Kochi
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">
            Welcome to Paradise
          </h2>
          <blockquote className="text-xl text-sky-600 font-medium text-center mb-12 italic">
            "Where nature's embrace meets heartfelt hospitality, creating memories that last a lifetime."
          </blockquote>
          {/* First Section with Left Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-16">
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-lg order-1 lg:order-1">
              <Image
                src="/island1.webp"
                alt="Pepper Island Boat Tourism"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-700">
                  Tucked away from the city's rush and noise, Pepper Island is one of Kochi's most beautiful hidden gems an untouched private island that offers an experience rooted in nature, tradition, and genuine hospitality. If you're looking for a refreshing escape that feels both peaceful and authentic, this island is where time slows down and nature takes over.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  What makes Pepper Island truly special is its welcoming atmosphere. From the moment you arrive, you're greeted with warm smiles and a sense of calm that instantly puts you at ease. The staff here aren't just friendly they treat you like family. Their attention to detail, care, and love for what they do reflect in every part of the experience, making visitors feel comfortable and truly valued.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  One of the biggest highlights of Pepper Island is its boat tourism experience. Gliding through the serene backwaters on a fishing speed boat is nothing short of magical. Surrounded by lush greenery, gentle water currents, and the sounds of nature, the journey itself becomes a memory worth cherishing. It's an ideal spot for those who want to reconnect with nature while enjoying a safe and well-organized adventure.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section with Right Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-700">
                  Pepper Island proudly stays true to its roots. Everything here is original and nature based, with no artificial distractions. The island preserves its raw beauty, allowing guests to experience Kerala in its purest form. Whether it's walking through green spaces, watching local fishing practices, or simply sitting by the water, every moment feels grounded and real.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  No visit to Pepper Island is complete without indulging in its traditional South Indian cuisine. Prepared in the most authentic way, the food is rich in flavor and soul. From freshly cooked meals to locally sourced ingredients, every dish reflects Kerala's culinary heritage. Served with love and simplicity, the food here feels like a warm home cooked meal rather than a commercial spread.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  Pepper Island is more than just a destination it's an experience. A place where nature, tradition, and heartfelt hospitality come together to create unforgettable memories. For anyone exploring boat tourism in Kochi, this private island is truly a must-visit escape into calm, culture, and coastal charm.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-lg order-1 lg:order-2">
              <Image
                src="/island3.webp"
                alt="Pepper Island Nature and Cuisine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/island2.webp"
            alt="Pepper Island Experience"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Experience Pepper Island Today
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-200">
            Experience the magic of Pepper Island - where every moment becomes a cherished memory in Kerala's pristine backwaters.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-sky-500 px-10 py-4 text-lg font-semibold text-white hover:bg-sky-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
