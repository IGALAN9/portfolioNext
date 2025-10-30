import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
