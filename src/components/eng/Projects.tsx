"use client";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  period: string;
  year: number;
  href?: string;
};

const row1: Project[] = [
  { title: "StockFlow", slug: "stockflow",
    desc: "Team project using Electron and MongoDB for PT Hanica Sukses Makmur. Focus on backend, stock calculations, and real-time integration to the frontend.",
    icon: "/projects/stockflow.png", period: "Feb - Jun", year: 2025 },
  { title: "BalancedBliss", slug: "balancedbliss",
    desc: "Health tips website (Angular/Bootstrap/PostgreSQL). Features login system, auto-logout, and enhanced full-stack capabilities.",
    icon: "/projects/balancedbliss.png", period: "Feb - Jun", year: 2025 },
];

const row2: Project[] = [
  { title: "Flying Eagle", slug: "flying-eagle",
    desc: "Individual project using Unity as a final assignment. Emphasizing game development: game mechanics, animation, and user interaction.",
    icon: "/projects/flyingeagle.png", period: "Agu - Nov", year: 2025 },
  { title: "Pinterest UI Clone", slug: "pinterest-ui-clone",
    desc: "Team project using Flutter to replicate Pinterest UI. Responsibilities included design implementation, responsiveness, and interactive elements.",
    icon: "/projects/pinterest.png", period: "Agu - Nov", year: 2025 },
];

const row3: Project[] = [
  { title: "Social Media App", slug: "social-media-app",
    desc: "Social application with Laravel & PostgreSQL; backend focus: Like/Comment Post, authentication, and media uploads.",
    icon: "/projects/socialmedia.png", period: "Mei - Juni", year: 2024 },
];

/* -------- dotted line lurus dengan state hover baris -------- */
function DottedLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 h-[3px] text-white/60 transition-colors duration-300 ${className}`}
      style={{
        backgroundImage: "radial-gradient(currentColor 1.5px, transparent 2.5px)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "16px 6px",
        backgroundPosition: "0 center",
      }}
    />
  );
}

function Dot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute size-3 rounded-full bg-white transition-all duration-300 ${className}`}
      style={{ top: "-7px" }}
    />
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="relative rounded-3xl bg-white/7 ring-1 ring-white/10 p-4 md:p-5 shadow-[0_20px_40px_rgba(0,0,0,.35)] card-hover">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl bg-black/10 p-3 ring-1 ring-white/10">
          <Image src={p.icon} alt={p.title} width={56} height={56} className="size-12 md:size-14 object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-wide">{p.title}</h3>
          <p className="mt-1 text-sm text-white/80">{p.desc}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide">{p.period}</span>
            <a href={`/projects/${p.slug}`} className="btn-soft">Details &gt;&gt;&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative isolate overflow-hidden mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <h2 className="text-center text-4xl font-semibold tracking-wider md:text-5xl mb-8">PROJECTS</h2>

      <div className="space-y-20">
        {/* ===== ROW 1 ===== */}
        <div className="relative group/row">
          {/* garis + efek glow saat hover baris */}
          <DottedLine className="top-[-10px] group-hover/row:text-white/90 group-hover/row:anim-dash" />
          {/* titik ujung + glow saat hover */}
          <Dot className="left-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          <Dot className="right-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          {/* tahun di bawah titik */}
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2025</div>
          <div className="absolute right-0 top-[10px] text-xs text-white/80">2025</div>

          {/* label periode di tengah */}
          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">Feb - Jun</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {row1.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="relative group/row">
          <DottedLine className="top-[-10px] group-hover/row:text-white/90 group-hover/row:anim-dash" />
          <Dot className="left-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          <Dot className="right-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2024</div>
          <div className="absolute right-0 top={[10]} text-xs text-white/80">2024</div>

          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">Agu - Nov</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {row2.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="relative group/row">
          <DottedLine className="top-[-10px] group-hover/row:text-white/90 group-hover/row:anim-dash" />
          <Dot className="left-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          <Dot className="right-1 group-hover/row:scale-110 group-hover/row:glow-soft" />
          <div className="absolute left-0 top-[10px] text-xs text-white/80">2024</div>
          <div className="absolute right-0 top-[10px] text-xs text-white/80">2024</div>

          <p className="mb-3 mt-10 text-center text-sm tracking-wide text-white/90">Mei - Juni</p>

          <div className="mx-auto max-w-3xl">
            {row3.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
