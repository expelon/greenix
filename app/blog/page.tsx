"use client";

import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <main className="pb-16">
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero2.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">Blog</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Deep dives into destination stories, insider event wisdom, and the moments that inspire immersive experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/maldives-real-story">
              <article className="rounded-xl border border-slate-200 p-6 transition hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer">
                <div className="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl bg-slate-100">
                  <Image
                    src="/maldives.webp"
                    alt="The real Maldives"
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">The Real Story About the Maldives Most Don't Know</h2>
                <p className="mt-2 text-sm text-slate-500">January 21, 2026</p>
                <p className="mt-3 text-slate-600 line-clamp-3">
                  For many travelers, the Maldives exists as a picture-perfect fantasy—overwater villas, turquoise lagoons, and peaceful private beaches. While this image is appealing, it represents only a small slice of reality. Beyond the resorts lies a country shaped by generations of island life...
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
