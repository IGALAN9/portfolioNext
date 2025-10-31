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

  // observer untuk mendeteksi section yang sedang dominan di viewport
  useEffect(() => {
    const sections = items
      .map(i => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pilih entry dengan intersectionRatio terbesar di tengah layar
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // threshold 0.6 artinya section dianggap aktif kalau 60% terlihat
        threshold: [0.6],
        // rootMargin untuk “menggeser” area fokus ke tengah layar
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const progress = useMemo(() => {
    // progress global (opsional): 0..1 berdasarkan posisi scroll halaman
    const h = typeof window !== "undefined" ? document.documentElement : null;
    if (!h) return 0;
    const total = h.scrollHeight - h.clientHeight;
    return total > 0 ? h.scrollTop / total : 0;
  }, []);

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
