"use client";

import { useState } from "react";
import Image from "next/image";

type OrgItem = {
  org: string;
  role: string;
  division?: string;
  period: string;
  logo: string;
  bullets: string[];
  gallery?: string[];
};

const ORGS_ID: OrgItem[] = [
  {
    org: "NEON (National English Competition)",
    role: "Anggota",
    division: "Divisi Perlengkapan",
    period: "2023 – 2024",
    logo: "/orgs/neon-logo.png",
    bullets: [
      "Bertanggung jawab atas perlengkapan acara dan berkoordinasi dengan tim untuk memastikan kebutuhan terpenuhi tepat waktu.",
      "Mengasah kemampuan kerja tim, koordinasi, dan manajemen waktu.",
      "Menyiapkan dan mengatur seluruh kebutuhan perlengkapan sebelum dan saat acara.",
    ],
    gallery: ["/orgs/neon-cert-1.jpg"],
  },
  // Tambah item lain di sini …
];

export default function OrganisationsID() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  return (
    <section id="organisations" className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">ORGANISASI</h2>
        <p className="text-sm text-white/70 mt-1">Pengalaman organisasi & kepanitiaan</p>
      </div>

      <div className="space-y-8">
        {ORGS_ID.map((o, idx) => (
          <article
            key={idx}
            className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            {/* Meta atas */}
            <div className="flex items-center justify-between px-5 pt-4 text-xs text-white/70">
              <span>{o.period}</span>
              <span className="inline-flex gap-1 opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                  <i key={i} className="size-1.5 rounded-full bg-white/30" />
                ))}
              </span>
            </div>

            {/* Isi kartu */}
            <div className="px-5 pb-6 pt-3 md:px-6 md:pt-4 md:pb-7">
              <div className="flex gap-5 md:gap-6">
                {/* Logo */}
                <div className="shrink-0">
                  <div className="size-[92px] md:size-[110px] rounded-2xl bg-black/20 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={o.logo}
                      alt={o.org}
                      width={160}
                      height={160}
                      className="object-contain p-3"
                    />
                  </div>
                </div>

                {/* Teks */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">{o.org}</h3>
                  <p className="text-sm md:text-base text-white/80 mt-1">
                    {o.role}
                    {o.division ? (
                      <>
                        {" • "}
                        <span className="text-white/70">{o.division}</span>
                      </>
                    ) : null}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {o.bullets.map((b, i) => (
                      <li key={i} className="text-sm md:text-[15px] leading-relaxed text-white/85">
                        • {b}
                      </li>
                    ))}
                  </ul>

                  {o.gallery?.length ? (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {o.gallery.map((g, gi) => (
                        <div
                          key={gi}
                          onClick={() => setZoomSrc(g)}
                          className="cursor-pointer rounded-xl ring-1 ring-white/10 bg-black/20 overflow-hidden hover:scale-105 hover:ring-white/30 transition-transform duration-300"
                        >
                          <Image
                            src={g}
                            alt={`Dokumentasi ${gi + 1} - ${o.org}`}
                            width={640}
                            height={400}
                            className="w-full h-28 md:h-32 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* ===== MODAL ZOOM ===== */}
                  {zoomSrc && (
                    <div
                      onClick={() => setZoomSrc(null)}
                      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                      <div className="relative max-w-4xl w-full">
                        <Image
                          src={zoomSrc}
                          alt="Zoomed certificate"
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-xl ring-2 ring-white/30 shadow-2xl"
                        />
                        <button
                          onClick={() => setZoomSrc(null)}
                          className="absolute -top-4 -right-4 bg-white/80 text-black px-3 py-1.5 rounded-full font-semibold hover:bg-white"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
