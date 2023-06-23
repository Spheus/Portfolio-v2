import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sam Mejia",
  description: "Software developer, i build digital assets for the web, focusing on quality and performance.",
  openGraph: {
    title: "Sam Mejia",
    description: "Software developer, i build digital assets for the web, focusing on quality and performance.",
    images: ["https://portfolio-v2-cyan-three.vercel.app/images/og_image.jpg"],
  },
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
