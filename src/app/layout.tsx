import "./globals.css";
import Providers from "./providers";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ cookies() sekarang async → WAJIB await
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;

  // pastikan hanya "id" | "en"
  const initialLang: "id" | "en" = langCookie === "en" ? "en" : "id";

  return (
    <html lang={initialLang}>
      <body>
        <Providers initialLang={initialLang}>{children}</Providers>
      </body>
    </html>
  );
}
