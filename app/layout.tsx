// app/layout.tsx
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-fredoka", // sets a CSS variable
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js + Tailwind + Fredoka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} antialiased`}>{children}</body>
    </html>
  );
}
