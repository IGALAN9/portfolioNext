"use client";
import { useLang } from "./providers";
import dynamic from "next/dynamic";
import LanguageToggle from "@/components/LanguageToggle";
// Indonesia
import HeroID from "@/components/id/Hero";
import AboutID from "@/components/id/About";
import SkillsID from "@/components/id/Skills";
import ProjectsID from "@/components/id/Projects";

// English
import HeroEN from "@/components/eng/Hero";
import AboutEN from "@/components/eng/About";
import SkillsEN from "@/components/eng/Skills";
import ProjectsEN from "@/components/eng/Projects";


export default function Page() {
  const StickySectionNav = dynamic(() => import("@/components/StickySectionNav"), { ssr: false });
  const { lang } = useLang();

  return (
    <main>
      <LanguageToggle />
      <StickySectionNav />

      {/* id untuk sticky nav kamu tetap sama */}
      <div key={lang} className="fade-lang opacity-100 animate-fade">
      {lang === "id" ? (
        <>
          <section id="home"><HeroID /></section>
          <section id="about"><AboutID /></section>
          <section id="skills"><SkillsID /></section>
          <section id="projects"><ProjectsID /></section>
        </>
      ) : (
        <>
          <section id="home"><HeroEN /></section>
          <section id="about"><AboutEN /></section>
          <section id="skills"><SkillsEN /></section>
          <section id="projects"><ProjectsEN /></section>
        </>
      )}
      </div>
    </main>
  );
}
