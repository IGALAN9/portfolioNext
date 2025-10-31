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
                Mahasiswa Semester 5 Universitas Tarumanagara Jakarta Barat dengan IPK 3.72,
                memiliki ketertarikan tinggi dalam bidang pengembangan aplikasi berbasis web
                maupun mobile. Berpengalaman dalam membangun antarmuka pengguna yang interaktif
                sekaligus mengelola logika dan struktur data di sisi backend. Menguasai berbagai
                teknologi seperti Flutter, Electron, NodeJs, MongoDB, dan PostgreSQL. Terbiasa
                bekerja secara kolaboratif dalam tim untuk mengembangkan aplikasi dari tahap
                perancangan hingga implementasi akhir. Berkomitmen untuk menciptakan solusi digital
                yang efisien, modern, dan memiliki performa optimal di seluruh lapisan sistem.
            </p>
            </div>
        </div>
    </section>
  );
}
