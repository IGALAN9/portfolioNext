import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  period: string;
  desc: string;
  tech: string[];
  image: string;
};

const projects: Project[] = [
  {
    slug: "stockflow",
    title: "StockFlow",
    period: "Feb - Jun • 2025",
    desc: "Aplikasi manajemen stok berbasis Electron dan MongoDB untuk PT Hanica Sukses Makmur. Fokus saya pada logika backend, perhitungan stok, dan integrasi realtime dengan UI.",
    tech: ["Electron", "MongoDB", "Node.js"],
    image: "/projects/stockflow.png",
  },
  {
    slug: "balancedbliss",
    title: "BalancedBliss",
    period: "Feb - Jun • 2025",
    desc: "Website tips kesehatan (Angular + PostgreSQL) dengan sistem login dan auto-logout. Saya mengembangkan fitur autentikasi dan session management.",
    tech: ["Angular", "PostgreSQL", "Bootstrap"],
    image: "/projects/balancedbliss.png",
  },
  {
    slug: "flying-eagle",
    title: "Flying Eagle",
    period: "Agu - Nov • 2025",
    desc: "Game Unity individu sebagai proyek UAS. Saya membangun sistem gameplay, animasi, dan mekanik interaktif.",
    tech: ["Unity", "C#"],
    image: "/projects/flyingeagle.png",
  },
  {
    slug: "pinterest-ui-clone",
    title: "Pinterest UI Clone",
    period: "Agu - Nov • 2025",
    desc: "Clone antarmuka Pinterest menggunakan Flutter. Fokus pada grid layout, interaksi, dan performa UI.",
    tech: ["Flutter", "Dart"],
    image: "/projects/pinterest.png",
  },
  {
    slug: "social-media-app",
    title: "Social Media App",
    period: "Mei - Juni • 2024",
    desc: "Aplikasi sosial berbasis Laravel + PostgreSQL dengan fitur like, komentar, dan unggah media.",
    tech: ["Laravel", "PostgreSQL"],
    image: "/projects/socialmedia.png",
  },
];

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params; // 🟢 unwrapping Promise

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Project tidak ditemukan</h1>
        <Link href="/" className="text-white/70 hover:text-white block mt-4">
          ← Kembali ke beranda
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/#projects" className="text-sm text-white/70 hover:text-white">
        ← Kembali ke Projects
      </Link>

      <header className="mt-6 flex items-center gap-4">
        <Image
          src={project.image}
          alt={project.title}
          width={80}
          height={80}
          className="rounded-2xl ring-1 ring-white/10 bg-black/10 object-contain"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-wide">{project.title}</h1>
          <p className="text-sm text-white/80">{project.period}</p>
        </div>
      </header>

      <section className="mt-6 space-y-4 text-white/90 leading-relaxed">
        <p>{project.desc}</p>

        <h3 className="mt-8 text-lg font-semibold">Teknologi</h3>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-white/10 px-3 py-1 text-xs"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
