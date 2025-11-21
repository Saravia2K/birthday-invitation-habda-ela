import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";

import "animate.css";
import "./global.scss";
import banner from "@/assets/images/photos/banner-img.jpeg";

export const metadata: Metadata = {
  title: "Cumpleaños de Ela Rodriguez",
  description: "Te invitamos a celebrar la vida de nuestra amada madre",
  openGraph: {
    title: "Cumpleaños de Ela Rodriguez",
    images: [banner.src],
    description: "Te invitamos a celebrar la vida de nuestra amada madre",
  },
};

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-fair-display",
});

const swagume = localFont({
  src: "../assets/fonts/Swagume.otf",
  variable: "--font-swagume",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(playfairDisplay.className, swagume.className)}
    >
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
