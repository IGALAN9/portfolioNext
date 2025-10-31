"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden mx-auto w-full max-w-7xl px-6 py-16 md:py-30">

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="relative mx-auto md:mx-0">
            <div className="size-72 md:size-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
                <Image
                src="/Galang2.png"
                alt="Galang Afdala Harsa"
                width={700}
                height={900}
                className="size-full object-cover translate-y-4"
                />
            </div>
            </div>

            {/* Kanan: Teks */}
            <div className="max-w-2xl md:justify-self-end">
            <h2 className="text-4xl font-semibold tracking-wide text-shadow-lg md:text-5xl">
                ABOUT ME
            </h2>

            <p className="mt-6 text-pretty text-base/relaxed text-white/85 md:text-lg/8">
                A fifth-semester student at Tarumanagara University in West Jakarta with a GPA of 3.72, I have a strong interest in web and mobile application development. Experienced in building interactive user interfaces while managing logic and data structures on the backend. Proficient in various technologies such as Flutter, Electron, NodeJs, MongoDB, and PostgreSQL. Accustomed to working collaboratively in teams to develop applications from the design stage to final implementation. Committed to creating efficient, modern digital solutions with optimal performance across all layers of the system.
            </p>
            </div>
        </div>
    </section>
  );
}
