import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://natiocasino.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-DE">
      <body className={poppins.variable}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
