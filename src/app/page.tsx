"use client";
import { useLang } from "./providers";
import dynamic from "next/dynamic";
import LanguageToggle from "@/components/LanguageToggle";
import Contact from "@/components/Contact";

// Indonesia
import HeroID from "@/components/id/Hero";
import AboutID from "@/components/id/About";
import SkillsID from "@/components/id/Skills";
import ProjectsID from "@/components/id/Projects";
import OrganisationsID from "@/components/id/Organisations";

// English
import HeroEN from "@/components/eng/Hero";
import AboutEN from "@/components/eng/About";
import SkillsEN from "@/components/eng/Skills";
import ProjectsEN from "@/components/eng/Projects";
import OrganisationsEN from "@/components/eng/Organisations";


export default function Page() {
  const StickySectionNav = dynamic(() => import("@/components/StickySectionNav"), { ssr: false });
  const { lang } = useLang();

  return (
    <main>
      <LanguageToggle />
      <StickySectionNav />

      <div key={lang} className="fade-lang opacity-100 animate-fade">
      {lang === "id" ? (
        <>
          <section id="home"><HeroID /></section>
          <section id="about"><AboutID /></section>
          <section id="skills"><SkillsID /></section>
          <section id="projects"><ProjectsID /></section>
          <section id="organisations"><OrganisationsID /></section>
          <section id="contact"><Contact /></section>
        </>
      ) : (
        <>
          <section id="home"><HeroEN /></section>
          <section id="about"><AboutEN /></section>
          <section id="skills"><SkillsEN /></section>
          <section id="projects"><ProjectsEN /></section>
          <section id="organisations"><OrganisationsEN /></section>
          <section id="contact"><Contact /></section>
        </>
      )}
      </div>
    </main>
  );
}
