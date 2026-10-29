import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sazid Hasan Sarker | Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React.js, Next.js & Modern TypeScript Interfaces. Passionate about crafting pixel-perfect, accessible, and responsive web applications.",
  keywords: [
    "Sazid Hasan Sarker",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Sazid Hasan Sarker" }],
  creator: "Sazid Hasan Sarker",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sazid Hasan Sarker | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React.js, Next.js & Modern TypeScript Interfaces.",
    siteName: "Sazid Hasan Sarker Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased transition-colors duration-300 selection:bg-teal-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
