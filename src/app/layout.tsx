import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sam Mejia",
  description: "Software developer, i build digital assets for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950	 leading-relaxed text-slate-100 antialiased selection:bg-teal-300 selection:text-teal-900 relative`}
      >
        {children}
      </body>
    </html>
  );
}
