import "./globals.css";



export const metadata = {
  title: "Galang Afdala Harsa — Portfolio",
  description: "Portfolio Next.js + Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
