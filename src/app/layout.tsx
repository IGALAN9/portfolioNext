import "./globals.css";
import Providers from "./providers";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;

  const initialLang: "id" | "en" = langCookie === "en" ? "en" : "id";

  return (
    <html lang={initialLang}>
      <body>
        <Providers initialLang={initialLang}>{children}</Providers>
      </body>
    </html>
  );
}
