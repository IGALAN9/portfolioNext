"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pt-20 pb-24 md:pt-24 md:pb-32">

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Kiri: Heading */}
        <div className="max-w-xl">
          <h1 className="text-4xl/tight font-semibold tracking-wide drop-shadow-sm text-shadow-lg md:text-6xl">
            GALANG AFDALA HARSA
          </h1>

          <p className="mt-6 text-lg/relaxed text-white/80">I’M A</p>

          <div className="mt-6">
            <a
              href="/cv.pdf"
              className="btn text-base"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Kanan: Foto bulat besar */}
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
