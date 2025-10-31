"use client";
import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

export default function StickySectionNav({
  items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ],
}: { items?: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

// ✅ Tentukan section aktif berdasarkan posisi scroll (tanpa IO)
useEffect(() => {
  const els = items
    .map(i => document.getElementById(i.id))
    .filter(Boolean) as HTMLElement[];
  if (!els.length) return;

  const computeActive = () => {
    const scrollY = window.scrollY;
    const viewCenter = scrollY + window.innerHeight * 0.35; // ambil 35% dari tinggi viewport
    let current = els[0].id;

    for (const el of els) {
      const top = scrollY + el.getBoundingClientRect().top;
      const bottom = top + el.offsetHeight;
      if (viewCenter >= top && viewCenter < bottom) current = el.id;
    }

    // Saat mentok di paling bawah, pastikan yang terakhir aktif
    const atBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) current = els[els.length - 1].id;

    setActive(current);
  };

  computeActive();
  window.addEventListener("scroll", computeActive, { passive: true });
  window.addEventListener("resize", computeActive);
  return () => {
    window.removeEventListener("scroll", computeActive);
    window.removeEventListener("resize", computeActive);
  };
}, [items]);


  // Re-render progress on scroll (tanpa membebani)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? h.scrollTop / total : 0;
      const bar = document.getElementById("navProgressFill");
      if (bar) bar.style.transform = `scaleY(${Math.min(1, Math.max(0, p))})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
