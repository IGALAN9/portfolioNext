"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "id" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx | null>(null);

export default function Providers({
  children,
  initialLang = "id",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    // sinkron ke localStorage & cookie agar client/server sama
    localStorage.setItem("lang", lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within <Providers />");
  return ctx;
}
