"use client";
import Image from "next/image";

type Props = {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
};

export default function Contact({
  email = "galangafdalahharsa88@gmail.com",
  githubUrl = "https://github.com/IGALAN9",
  linkedinUrl = "https://www.linkedin.com/in/galang-afdala-harsa/",
  instagramUrl = "https://www.instagram.com/galangafdalah11/",
}: Props) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6">
        Contact Me
      </h2>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="inline-block text-2xl md:text-[36px] text-white hover:text-white/90 transition"
      >
        {email}
      </a>

      {/* Social Icons */}
      <div className="mt-10 flex items-center justify-center gap-6 md:gap-10">
        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/icons/github.png"
            alt="GitHub"
            width={48}
            height={48}
            className="opacity-90 hover:opacity-100"
          />
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={48}
            height={48}
            className="opacity-90 hover:opacity-100 rounded-md"
          />
        </a>

        {/* Instagram */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={48}
            height={48}
            className="opacity-90 hover:opacity-100 rounded-md"
          />
        </a>
      </div>
    </section>
  );
}
