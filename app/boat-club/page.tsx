import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cochin Boat Club – Luxury on the Waters of Kochi | Greenix',
  description: 'Experience luxury boat tourism at Cochin Boat Club. Discover adventure, relaxation, and waterfront dining on Kochi\'s backwaters with Pepper Island getaways and premium facilities.',
  keywords: ['cochin boat club', 'boat tourism kochi', 'luxury boat club kochi', 'kochi backwaters', 'pepper island', 'waterfront dining kochi', 'marine drive kochi', 'boat docking facilities'],
  openGraph: {
    title: 'Cochin Boat Club – Luxury on the Waters of Kochi | Greenix',
    description: 'Experience luxury boat tourism at Cochin Boat Club. Discover adventure, relaxation, and waterfront dining on Kochi\'s backwaters with Pepper Island getaways.',
    url: 'https://greenix.com/boat-club',
    siteName: 'Greenix',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Cochin Boat Club - Luxury on the Waters of Kochi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BoatClub() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 bg-cover bg-center">
          <Image
            src="/boat1.webp"
            alt="Cochin Boat Club Luxury Waters"
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
              Luxury on the Waters of Kochi
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Cochin Boat Club
            </h1>
            <p className="mt-2 sm:mt-6 text-lg leading-relaxed text-white/90">
              Adventure, Relaxation, and Luxury on Kochi's Backwaters
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/3 lg:pl-12">
            <div className="relative h-48 w-full">
              <Image
                src="/boat-logo.png"
                alt="Cochin Boat Club Logo"
                fill
                sizes="(max-width: 1024px) 0vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">
            Your Unforgettable Backwater Adventure
          </h2>
          <blockquote className="text-xl text-sky-600 font-medium text-center mb-12 italic">
            "Where every ride is a journey, every meal is a delight, and every visit is a memory in the making."
          </blockquote>
          
          {/* First Section with Left Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-16">
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-lg order-1 lg:order-1">
              <Image
                src="/boat1.webp"
                alt="Marine Drive Premier Jetty"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Start Your Adventure at Marine Drive's Premier Jetty
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  Looking for an unforgettable escape on Kochi's backwaters? Welcome to Cochin Boat Club, where adventure, relaxation, and luxury meet to create experiences you'll cherish forever. Whether you're a local seeking a weekend retreat or a traveler exploring Kochi's scenic waterways, our club offers a journey that's truly unique and memorable.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  Step aboard at Marine Drive, Kochi's vibrant waterfront, and cruise in style. Our DTPC-approved jetty ensures safe and smooth boarding, so you can dive straight into the fun. Glide through shimmering waters while enjoying panoramic views of Fort Kochi, Bolgatty Palace, and Vypin Island.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                  Capture stunning photographs, spot local wildlife, or simply relax as gentle breezes and the golden Kochi sunset make your journey magical. Every route is designed for scenic cruising, calm waters, and an unforgettable backwater experience.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section with Right Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Discover Pepper Island – Kochi's Hidden Paradise
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  No visit to Cochin Boat Club is complete without a stop at Pepper Island, a serene getaway tucked away in Kochi's backwaters. This hidden gem is perfect for families, couples, and solo travelers looking for adventure, tranquility, and nature.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sky-600 text-xl">•</span>
                    <div>
                      <strong className="text-slate-900">Thrilling Water Activities:</strong>
                      <p className="text-slate-700">Kayaking, paddle boating, and other exciting water adventures to get your adrenaline pumping.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-600 text-xl">•</span>
                    <div>
                      <strong className="text-slate-900">Fresh Local Flavors:</strong>
                      <p className="text-slate-700">Savor mouth-watering seafood prepared fresh from Kochi's waters.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-600 text-xl">•</span>
                    <div>
                      <strong className="text-slate-900">Relaxation & Leisure:</strong>
                      <p className="text-slate-700">Lounge by the beach, explore walking trails, or simply soak in the peaceful island vibes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-lg order-1 lg:order-2">
              <Image
                src="/boat2.webp"
                alt="Pepper Island Paradise"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Third Section with Left Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-16">
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-lg order-1 lg:order-1">
              <Image
                src="/boat3.webp"
                alt="Boat Club Facilities"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Premium Facilities & Services
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      Facilities for Boat Owners
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Are you a boat owner? The Cochin Boat Club has you covered with complete boat care and docking solutions. Our secure docking facilities and professional maintenance services ensure your vessel is safe, well-maintained, and ready for your next adventure on Kochi's backwaters. Enjoy hassle-free docking and peace of mind every time you visit.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      Waterfront Dining – A Culinary Delight
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-700">
                      No day on the water is complete without delicious food. Our Café at Cochin Boat Club serves a range of local and continental dishes, from juicy burgers and spicy momos to fresh seafood platters. Enjoy a quick snack between activities or a leisurely meal while soaking in breathtaking backwater views — it's the perfect combination of food, fun, and nature.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      Perfect Venue for Events & Celebrations
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Looking for a venue that leaves a lasting impression? Cochin Boat Club is ideal for corporate events, private parties, and family gatherings. With scenic surroundings, flexible spaces, and a dedicated team to assist with planning, every event becomes truly memorable. From intimate celebrations to grand occasions, we ensure every detail is taken care of.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
