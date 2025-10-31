"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/providers";

type BiText = { id: string; en: string };

type Project = {
  slug: string;
  title: BiText;
  period: string; // kalau perlu bilingual juga, ubah ke BiText
  desc: BiText;
  tech: string[];
  image: string;

  images?: string[];
  videos?: { src: string; type?: "mp4" | "webm" }[];
  youtubeId?: string;
  driveEmbeds?: { title: string; url: string }[];
};

const projects: Project[] = [
  {
    slug: "stockflow",
    title: { id: "StockFlow", en: "StockFlow" },
    period: "Feb - Jun • 2025",
    desc: {
      id: "Aplikasi manajemen stok berbasis Electron dan MongoDB untuk PT Hanica Sukses Makmur. Fokus saya pada logika backend, perhitungan stok, dan integrasi realtime dengan UI.",
      en: "A stock management app built with Electron and MongoDB for PT Hanica Sukses Makmur. I focused on backend logic, stock calculations, and real-time UI integration."
    },
    tech: ["Electron", "MongoDB", "Node.js"],
    image: "/projects/stockflow.png",
    images: ["/projects/stockflow-1.png", "/projects/stockflow-2.png"],
    videos: [{ src: "/projects/stockflow-demo.mp4", type: "mp4" }],
    driveEmbeds: [
      { title: "SRS (PDF)", url: "https://drive.google.com/file/d/FILE_ID/preview" },
    ],
  },
  {
    slug: "balancedbliss",
    title: { id: "BalancedBliss", en: "BalancedBliss" },
    period: "Feb - Jun • 2025",
    desc: {
      id: "Website tips kesehatan (Angular + PostgreSQL) dengan sistem login dan auto-logout. Saya mengembangkan fitur autentikasi dan session management.",
      en: "A health tips website (Angular + PostgreSQL) with login and auto-logout. I worked on authentication and session management."
    },
    tech: ["Angular", "PostgreSQL", "Bootstrap"],
    image: "/projects/balancedbliss.png",
    images: ["/projects/balancedbliss-1.png"],
  },
  {
    slug: "flying-eagle",
    title: { id: "Flying Eagle", en: "Flying Eagle" },
    period: "Agu - Nov • 2025",
    desc: {
      id: "Game Unity individu sebagai proyek UAS. Saya membangun sistem gameplay, animasi, dan mekanik interaktif.",
      en: "A solo Unity game for the final exam. I built gameplay systems, animations, and interactive mechanics."
    },
    tech: ["Unity", "C#"],
    image: "/projects/flyingeagle.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "pinterest-ui-clone",
    title: { id: "Pinterest UI Clone", en: "Pinterest UI Clone" },
    period: "Agu - Nov • 2025",
    desc: {
      id: "Clone antarmuka Pinterest menggunakan Flutter. Fokus pada grid layout, interaksi, dan performa UI.",
      en: "A Pinterest interface clone built with Flutter. Focused on grid layout, interactions, and UI performance."
    },
    tech: ["Flutter", "Dart"],
    image: "/projects/pinterest.png",
  },
  {
    slug: "social-media-app",
    title: { id: "Social Media App", en: "Social Media App" },
    period: "Mei - Juni • 2024",
    desc: {
      id: "Aplikasi sosial berbasis Laravel + PostgreSQL dengan fitur like, komentar, dan unggah media.",
      en: "A social app using Laravel + PostgreSQL with likes, comments, and media uploads."
    },
    tech: ["Laravel", "PostgreSQL"],
    image: "/projects/socialmedia.png",
  },
];

type Props = { params: Promise<{ slug: string }> };

export default function ProjectDetail({ params }: Props) {
  // Next.js 15: params adalah Promise → gunakan React.use() di client component
  const { slug } = use(params);
  const { lang } = useLang();

  const p = projects.find((x) => x.slug === slug);

  // helper label bilingual cepat
  const L = (key: "backList" | "tech" | "gallery" | "video" | "demo" | "docs" | "notfound" | "backHome") => {
    const id = {
      backList: "← Kembali ke Projects",
      tech: "Teknologi",
      gallery: "Galeri",
      video: "Video",
      demo: "Demo Video",
      docs: "Dokumen",
      notfound: "Project tidak ditemukan",
      backHome: "← Kembali ke beranda",
    }[key];
    const en = {
      backList: "← Back to Projects",
      tech: "Technologies",
      gallery: "Gallery",
      video: "Video",
      demo: "Demo Video",
      docs: "Documents",
      notfound: "Project not found",
      backHome: "← Back to Home",
    }[key];
    return lang === "id" ? id : en;
  };

  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">{L("notfound")}</h1>
        <Link href="/projects" className="mt-4 inline-block text-white/70 hover:text-white">
          {L("backHome")}
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/#projects" className="text-sm text-white/70 hover:text-white">
        {L("backList")}
      </Link>

      <header className="mt-6 flex items-center gap-4">
        <Image
          src={p.image}
          alt={p.title[lang]}
          width={80}
          height={80}
          className="rounded-2xl ring-1 ring-white/10 bg-black/10 object-contain"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-wide">{p.title[lang]}</h1>
          <p className="text-sm text-white/80">{p.period}</p>
        </div>
      </header>

      <section className="mt-6 space-y-8 text-white/90 leading-relaxed">
        {/* TEKNOLOGI */}
        {p.tech?.length ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">{L("tech")}</h3>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        ) : null}

        <p>{p.desc[lang]}</p>

        {/* GALERI FOTO */}
        {p.images?.length ? (
          <div>
            <h3 className="text-lg font-semibold mb-3">{L("gallery")}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {p.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${p.title[lang]} image ${i + 1}`}
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl ring-1 ring-white/10 object-cover"
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* VIDEO LOKAL */}
        {p.videos?.length ? (
          <div>
            <h3 className="text-lg font-semibold mb-3">{L("video")}</h3>
            {p.videos.map((v, i) => (
              <div key={i} className="overflow-hidden rounded-2xl ring-1 ring-white/10 [aspect-ratio:16/9]">
                <video controls className="size-full object-cover" preload="metadata" poster={p.images?.[0]}>
                  <source src={v.src} type={`video/${v.type ?? "mp4"}`} />
                  {lang === "id" ? "Browser kamu tidak mendukung video HTML5." : "Your browser does not support HTML5 video."}
                </video>
              </div>
            ))}
          </div>
        ) : null}

        {/* YOUTUBE */}
        {p.youtubeId ? (
          <div>
            <h3 className="text-lg font-semibold mb-3">{L("demo")}</h3>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 [aspect-ratio:16/9]">
              <iframe
                src={`https://www.youtube.com/embed/${p.youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="size-full"
              />
            </div>
          </div>
        ) : null}

        {/* GOOGLE DRIVE / DOCS / SHEETS / SLIDES / PDF */}
        {p.driveEmbeds?.length ? (
          <div>
            <h3 className="text-lg font-semibold mb-3">{L("docs")}</h3>
            <div className="space-y-4">
              {p.driveEmbeds.map((d) => (
                <div key={d.url}>
                  <p className="mb-2 text-sm text-white/80">{d.title}</p>
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20 [aspect-ratio:16/9]">
                    <iframe src={d.url} className="size-full" allow="autoplay; clipboard-write" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
