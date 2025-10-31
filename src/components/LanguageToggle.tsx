"use client";
import { useLang } from "@/app/providers";

export default function LanguageToggle({ fixed = true }: { fixed?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div className={fixed ? "fixed right-4 top-4 z-50" : ""} suppressHydrationWarning>
      <div className="flex overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/10 backdrop-blur">
        {(["id","en"] as const).map(code => {
          const active = lang === code;
          return (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-3 py-1.5 text-xs font-medium transition ${
                active ? "bg-white text-black" : "text-white/85 hover:bg-white/20"
              }`}
              aria-pressed={active}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
