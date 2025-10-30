"use client";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  icon: string;
  period: string;
  year: number;
  href?: string;
};

const row1: Project[] = [
  {
    title: "StockFlow",
    desc: "Proyek tim menggunakan Electron dan MongoDB untuk PT Hanica Sukses Makmur. Fokus pada backend, perhitungan stok, dan integrasi realtime ke frontend.",
    icon: "/projects/stockflow.png",
    period: "Feb - Jun",
    year: 2025,
  },
  {
    title: "BalancedBliss",
    desc: "Website tips kesehatan (Angular/Bootstrap/PostgreSQL). Fitur login system, auto-logout, dan peningkatan kapabilitas full-stack.",
    icon: "/projects/balancedbliss.png",
    period: "Feb - Jun",
    year: 2025,
  },
];

const row2: Project[] = [
  {
    title: "Flying Eagle",
    desc: "Proyek individu menggunakan Unity sebagai tugas akhir UAS. Menekankan game development: mekanik permainan, animasi, dan interaksi pengguna.",
    icon: "/projects/flyingeagle.png",
    period: "Agu - Nov",
    year: 2025,
  },
  {
    title: "Pinterest UI Clone",
    desc: "Proyek tim menggunakan Flutter untuk mereplikasi UI Pinterest. Tanggung jawab pada implementasi desain, responsivitas, dan elemen interaktif.",
    icon: "/projects/pinterest.png",
    period: "Agu - Nov",
    year: 2025,
  },
];

const row3: Project[] = [
  {
    title: "Social Media App",
    desc: "Aplikasi sosial dengan Laravel & PostgreSQL; fokus backend: Like/Comment Post, autentikasi, dan unggahan media.",
    icon: "/projects/socialmedia.png",
    period: "Mei - Juni",
    year: 2024,
  },
];

/* ========== COMPONENT CARD ========== */
function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="relative rounded-3xl bg-white/7 ring-1 ring-white/10 p-4 md:p-5 shadow-[0_20px_40px_rgba(0,0,0,.35)]">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl bg-black/10 p-3 ring-1 ring-white/10">
          <Image
            src={p.icon}
            alt={p.title}
            width={56}
            height={56}
            className="size-12 md:size-14 object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-wide">{p.title}</h3>
          <p className="mt-1 text-sm text-white/80">{p.desc}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide">
              {p.period}
            </span>
            <a
              href={p.href ?? "#"}
              className="rounded-xl bg-white/80 px-3 py-1.5 text-xs font-medium text-black hover:bg-white"
            >
              Details &gt;&gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== GARIS DOTTED ========== */
function DottedLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 h-[3px] text-white/70 ${className}`}
      style={{
        backgroundImage: "radial-gradient(currentColor 1.5px, transparent 2.5px)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "16px 6px",
        backgroundPosition: "center",
      }}
    />
  );
}

/* TITIK BULAT */
function BigDot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute size-3 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.15)] ${className}`}
      style={{ top: "-7px" }}
    />
  );
}

/* ========== MAIN SECTION ========== */
export default function Projects() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <h2 className="text-center text-4xl font-semibold tracking-wider md:text-5xl mb-8">
        PROJECTS
      </h2>

      <div className="space-y-20">
        {/* ===== ROW 1 ===== */}
        <div className="relative">
          <DottedLine className="top-[-10px]" />
          <BigDot className="left-1" />
          <BigDot className="right-1" />
          {/* Tahun di bawah titik */}
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2025</div>
          <div className="absolute right-0 top-[10px] text-xs text-white/80">2025</div>

          {/* Bulan di tengah */}
          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">
            Feb - Jun
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {row1.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="relative">
          <DottedLine className="top-[-10px]" />
          <BigDot className="left-1" />
          <BigDot className="right-1" />
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2024</div>
          <div className="absolute right-0 top-[10px] text-xs text-white/80">2024</div>

          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">
            Agu - Nov
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {row2.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="relative">
          <DottedLine className="top-[-10px]" />
          <BigDot className="left-1" />
          <BigDot className="right-1" />
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2024</div>
          <div className="absolute right-0 top-[10px] text-xs text-white/80">2024</div>

          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">
            Mei - Juni
          </p>

          <div className="mx-auto max-w-3xl">
            {row3.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
