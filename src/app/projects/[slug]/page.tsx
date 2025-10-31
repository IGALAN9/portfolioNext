"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/providers";

type BiText = { id: string; en: string };

type Project = {
  slug: string;
  title: BiText;
  period: string; 
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
      id: "Proyek tim yang dikembangkan menggunakan Electron dan MongoDB, dirancang khusus untuk PT Hanica Sukses Makmur. Aplikasi ini berfungsi untuk menghitung dan mengelola stok produk secara efisien dengan dukungan integrasi data dan antarmuka yang mudah digunakan. Dalam proyek ini, saya berperan dalam pengembangan backend, implementasi fungsi perhitungan utama, serta integrasi sistem dengan frontend agar data stok dapat diperbarui secara real-time.",
      en: "A team-based project developed using Electron and MongoDB, created for PT Hanica Sukses Makmur. The application was designed to calculate and manage product stock efficiently through a user-friendly interface and real-time data integration. My role focused on backend development, implementing core calculation functions, and integrating the system with the frontend for seamless inventory updates."
    },
    tech: ["Electron", "MongoDB", "Node.js"],
    image: "/projects/stockflow.png",
    // images: ["/projects/stockflow-1.png", "/projects/stockflow-2.png"],
    driveEmbeds: [
      { title: "Scrum Report", url: "https://drive.google.com/file/d/1d2d8sssab08yrUEDLWyOgeSZMfhaUxYz/preview" },
    ],
  },
  {
    slug: "balancedbliss",
    title: { id: "BalancedBliss", en: "BalancedBliss" },
    period: "Feb - Jun • 2025",
    desc: {
      id: "Proyek tim yang dikembangkan menggunakan AngularJS, Bootstrap, dan PostgreSQL sebagai latihan untuk meningkatkan kemampuan full-stack development, dengan fokus utama pada pengembangan frontend. Website ini dirancang untuk memberikan tips dan informasi tentang kesehatan kepada pengguna. Dalam proyek ini, saya berperan dalam mengembangkan fitur login system dan automatic logout, memastikan keamanan serta pengalaman pengguna yang optimal.",
      en: "A team-based web project developed using AngularJS, Bootstrap, and PostgreSQL to enhance full-stack development skills, with a primary focus on frontend implementation. The website provides users with health and wellness tips. My contributions included developing the login system and automatic logout features to ensure secure user authentication and an optimal browsing experience."
    },
    tech: ["Angular", "PostgreSQL", "Bootstrap"],
    image: "/projects/balancedbliss.png",
    youtubeId: "bQ1Q5aZjp28",
  },
  {
    slug: "flying-eagle",
    title: { id: "Flying Eagle", en: "Flying Eagle" },
    period: "Agu - Nov • 2025",
    desc: {
      id: "Proyek individu yang dikembangkan menggunakan Unity sebagai bagian dari tugas akhir UAS. Proyek ini bertujuan untuk mengasah kemampuan dalam pengembangan game serta memperdalam pemahaman mengenai mekanik, animasi, dan kontrol dalam dunia game development. Game Flying Eagle dibuat sebagai latihan dalam menerapkan logika permainan, desain level, serta interaksi pengguna secara dinamis.",
      en: "An individual project developed using Unity as part of a final semester assignment. The project aimed to enhance my Unity development skills and explore the fundamentals of game mechanics, animation, and player control. Flying Eagle serves as a hands-on experience in implementing gameplay logic, level design, and user interaction in a dynamic environment."
    },
    tech: ["Unity", "C#"],
    image: "/projects/flyingeagle.png",
    driveEmbeds: [
      { title: "Demo Video", url: "https://drive.google.com/file/d/1SZaNcwEXq0EgVY7P96TOSM3YO8a4b3JB/preview" },
    ],
  },
  {
    slug: "pinterest-ui-clone",
    title: { id: "Pinterest UI Clone", en: "Pinterest UI Clone" },
    period: "Agu - Nov • 2025",
    desc: {
      id: "Proyek tim yang dikembangkan menggunakan Flutter, dengan tujuan untuk membuat ulang antarmuka pengguna (UI) dari aplikasi Pinterest. Dalam proyek ini, saya berperan dalam mengimplementasikan desain dan elemen visual agar menyerupai tampilan aplikasi asli, serta memastikan tata letak responsif dan interaktif di berbagai perangkat. Proyek ini berfokus pada kemampuan desain UI, kolaborasi tim, dan pemahaman struktur widget Flutter.",
      en: "A team-based project developed using Flutter, aimed at recreating the user interface (UI) of the Pinterest application. My role involved implementing layouts and visual components to closely resemble the original app design, ensuring responsive and interactive display across different devices. The project focused on enhancing UI design skills, teamwork, and understanding of Flutter’s widget structure.."
    },
    tech: ["Flutter", "Dart"],
    image: "/projects/pinterest.png",
    youtubeId: "6DG0LItimCQ",
  },
  {
    slug: "social-media-app",
    title: { id: "Social Media App", en: "Social Media App" },
    period: "Mei - Juni • 2024",
    desc: {
      id: "Proyek tim yang dikembangkan menggunakan Laravel dan PostgreSQL, dengan fokus utama pada pengembangan backend. Aplikasi ini dirancang untuk menyediakan fitur interaksi sosial antar pengguna. Dalam proyek ini, saya berperan dalam pembuatan dan implementasi fitur Like Post dan Comment Post, yang memungkinkan pengguna untuk berinteraksi melalui unggahan mereka.",
      en: "A team-based project developed using Laravel and PostgreSQL, primarily focused on backend development. The application is designed to provide interactive social features between users. In this project, I was responsible for creating and implementing the Like Post and Comment Post features, enabling users to engage and interact through their posts."
    },
    tech: ["Laravel", "PostgreSQL"],
    image: "/projects/socialmedia.png",
    youtubeId: "mtiAr-gpcBY",
  },
];

type Props = { params: Promise<{ slug: string }> };

export default function ProjectDetail({ params }: Props) {
  const { slug } = use(params);
  const { lang } = useLang();

  const p = projects.find((x) => x.slug === slug);

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
