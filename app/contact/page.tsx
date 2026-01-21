import Image from "next/image";
import ContactPageForm from "@/components/ContactPageForm";

export default function Contact() {
  return (
    <main className="pb-16">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(16,185,129,0.08),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid w-full gap-10 rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 lg:grid-cols-2 lg:gap-14">
            <div className="relative overflow-hidden rounded-l-2xl rounded-r-none bg-slate-200 shadow-2xl shadow-slate-900/10 lg:rounded-r-none h-64 sm:h-80 lg:h-full">
              <Image
                src="/hero3.webp"
                alt="Greenix Experiences"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s Get In Touch.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Share a few details and we&apos;ll get back to you with the best plan for your event.
              </p>

              <ContactPageForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
                Reach Us
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Let&apos;s plan something unforgettable
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Share your requirements and our team will get back to you with the best plan for your event.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Email</h3>
                      <p className="mt-1 text-sm text-slate-600">info@thegreenix.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Visit Our Office</h3>
                      <p className="mt-1 text-sm text-slate-600">Kattadi, 72/2672, Pottakuzhi Lane(West), Kaloor, Ernakulam, India, Kerala - 682026</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Call Us Directly</h3>
                      <p className="mt-1 text-sm text-slate-600">+91 9846020091</p>
                      <p className="mt-1 text-sm text-slate-600">+91 9349372050</p>
                    </div>
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
