"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/** Komponen kecil untuk efek ngetik */
function Typing({
  words,
  typingSpeed = 90,     
  deletingSpeed = 45,   
  holdTime = 1000,      
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);      
  const [sub, setSub] = useState("");          
  const [del, setDel] = useState(false);       

  useEffect(() => {
    const current = words[index % words.length];

   
    const delay = del ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!del) {
        // ketik maju
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) {
          // selesai ketik → tahan sebentar lalu mulai hapus
          setTimeout(() => setDel(true), holdTime);
        }
      } else {
        // hapus mundur
        const next = current.slice(0, sub.length - 1);
        setSub(next);
        if (next.length === 0) {
          setDel(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [sub, del, index, words, typingSpeed, deletingSpeed, holdTime]);

  return (
    <span className={`typing-caret ${className}`} aria-live="polite">
      {sub}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden mx-auto w-full max-w-7xl px-6 pt-20 pb-24 md:pt-24 md:pb-32">
      {/* Konten grid */}
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Kiri: Heading + typing */}
        <div className="max-w-xl">
          <h1 className="text-4xl/tight font-semibold tracking-wide text-shadow-lg md:text-6xl">
            GALANG AFDALA HARSA
          </h1>

          {/* Label + teks dinamis */}
          <p className="mt-6 text-lg/relaxed text-white/80">I’M A</p>
          <div className="mt-2 text-2xl font-medium text-white/95 md:text-3xl">
            <Typing
              words={[
                "Web Developer",
                "Mobile Developer",
                "Software Developer",
              ]}
              typingSpeed={90}
              deletingSpeed={45}
              holdTime={1200}
            />
          </div>

          <div className="mt-6">
            <a href="/cv.pdf" className="btn text-base" download>
              Download CV
            </a>
          </div>
        </div>

        {/* Kanan: Foto bulat */}
        <div className="relative mx-auto md:justify-self-end">
          <div className="size-72 md:size-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
            <Image
              src="/Galang1.png"
              alt="Galang Afdala Harsa"
              width={800}
              height={800}
              priority
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
