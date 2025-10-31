"use client";
import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

const SECTIONS: Item[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function StickySectionNav({ items = SECTIONS }: { items?: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "home");
  const [isWide, setIsWide] = useState(false); // >=1000px = desktop
  const vFill = useRef<HTMLDivElement>(null);
  const hFill = useRef<HTMLDivElement>(null);

  // 1) breakpoint: 1000px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1000px)");
    const on = () => setIsWide(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // 2) penanda aktif pakai titik fokus 35% viewport + fallback ujung bawah
  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const compute = () => {
      const scrollY = window.scrollY;
      const focusY = scrollY + window.innerHeight * 0.35;
      let cur = els[0].id;

      for (const el of els) {
        const top = scrollY + el.getBoundingClientRect().top;
        const bottom = top + el.offsetHeight;
        if (focusY >= top && focusY < bottom) cur = el.id;
      }

      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) cur = els[els.length - 1].id;

      setActive(cur);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [items]);

  // 3) progress bar global
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
      if (vFill.current) vFill.current.style.transform = `scaleY(${p})`;
      if (hFill.current) hFill.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ==========================
  // DESKTOP (≥1000px) — versi LAMA (tidak diubah)
  // ==========================
if (isWide) {
  return (
     <aside
      aria-label="Section navigation"
      className="
        fixed right-4 top-1/2 -translate-y-1/2
        md:right-8
        z-40
      "
    >
      {/* track & progress */}
      <div className="relative flex flex-col items-start">
        {/* garis putus-putus */}
        <div className="nav-dotted-y absolute left-[6px] top-0 bottom-0"></div>
        {/* progress global opsional (fill vertikal) */}
        <div
          id="navProgressFill"
          className="absolute left-[6px] top-0 origin-top w-1 bg-white/40 rounded-full"
          style={{ height: "100%", transform: "scaleY(0)" }}
        />
        {/* items */}
        <nav className="relative flex flex-col gap-10">
          {items.map((it) => {
            const isActive = active === it.id;
            const handleClick = (id: string) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            };

            return (
              <button
                key={it.id}
                onClick={() => handleClick(it.id)}
                className="flex items-center focus:outline-none"
                aria-current={isActive ? "page" : undefined}
              >
                <span className={`nav-dot ${isActive ? "nav-dot-active" : ""}`} />
                <span className={`nav-label ${isActive ? "nav-label-active" : ""}`}>
                  {it.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

  // ==========================
  // TABLET/HP (<1000px) — navbar bawah; dot aktif → label
  // ==========================
  return (
    <aside
      aria-label="Section navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center"
    >
      <div className="w-[80vw] max-w-[480px] px-2">
        <nav className="flex items-center justify-center gap-5">
          {items.map((it) => {
            const on = active === it.id;
            return (
              <button
                key={it.id}
                onClick={() => handleClick(it.id)}
                className="focus:outline-none text-white text-xs sm:text-sm transition-all duration-300"
                aria-current={on ? "page" : undefined}
              >
                {on ? (
                  <span className="font-medium tracking-wide">{it.label}</span>
                ) : (
                  <span className="block w-3 h-3 rounded-full bg-white/40 ring-2 ring-white/20 hover:bg-white/70" />
                )}
              </button>
            );
          })}
        </nav>

        {/* progress horizontal */}
        <div className="relative mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
          <div
            ref={hFill}
            className="absolute left-0 top-0 h-full w-full bg-white origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </aside>
  );
}
