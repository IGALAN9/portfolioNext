"use client";
import Image from "next/image";

type Icon = { src: string; alt: string };

const languages: Icon[] = [
  { src: "/icons/html.png", alt: "HTML" },
  { src: "/icons/CSS.png", alt: "CSS" },
  { src: "/icons/js.png", alt: "JavaScript" },
  { src: "/icons/python.png", alt: "Python" },
  { src: "/icons/flutter.png", alt: "Flutter" },
];

const frameworks: Icon[] = [
  { src: "/icons/laravel.png", alt: "Laravel" },
  { src: "/icons/nextjs.png", alt: "Next.js" },
  { src: "/icons/electron.png", alt: "Electron" },
];

const backend: Icon[] = [
  { src: "/icons/nodejs.png", alt: "Node.js" },
  { src: "/icons/express.png", alt: "Express.js" },
  { src: "/icons/mongodb.png", alt: "MongoDB" },
  { src: "/icons/postgres.png", alt: "PostgreSQL" },
];

const nonCoding: Icon[] = [
  { src: "/icons/ps.png", alt: "Adobe Photoshop" },
  { src: "/icons/pr.png", alt: "Adobe Premiere Pro" },
  { src: "/icons/davinci.png", alt: "DaVinci Resolve" },
  { src: "/icons/figma.png", alt: "Figma" },
];

function RowIcons({ items, size = 64, gap = "gap-5" }: { items: Icon[]; size?: number; gap?: string }) {
  return (
    <div className={`flex flex-wrap ${gap}`}>
      {items.map((it) => (
        <div key={it.alt} className="icon-tile p-2">
          <Image
            src={it.src}
            alt={it.alt}
            width={size}
            height={size}
            className="size-12 md:size-16 object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr]">
        {/* Kolom kiri */}
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold tracking-wide text-shadow md:text-5xl">SKILLS</h2>

          <div className="space-y-6">
            <div>
              <p className="text-lg/6 text-white/85">Coding Related:</p>
              <p className="text-2xl/7 font-medium mt-1">Languages</p>
              <div className="mt-4">
                <RowIcons items={languages} />
              </div>
            </div>

            <div>
              <p className="text-2xl/7 font-medium">FrameWork</p>
              <div className="mt-4">
                <RowIcons items={frameworks} />
              </div>
            </div>

            <div>
              <p className="text-lg/6 text-white/85 mt-6">Non-Coding Related:</p>
              <div className="mt-4">
                <RowIcons items={nonCoding} />
              </div>
            </div>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="space-y-6 md:pt-14">
          <p className="text-2xl/7 font-medium">Backend</p>
          {/* Susun ikon backend memanjang seperti mockup */}
          <div className="mt-2 flex flex-wrap items-center gap-6 md:gap-8">
            {backend.map((it) => (
              <div key={it.alt} className="icon-tile p-3">
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={72}
                  height={72}
                  className="size-14 md:size-[72px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
