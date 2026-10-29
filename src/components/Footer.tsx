"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { footer, personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Sazid<span className="text-teal-500 dark:text-teal-400">.dev</span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {personalInfo.designation} • {personalInfo.location}
            </p>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footer.quickLinks.map((link) => (
              <a
                key={link.name}
                href={`/${link.href}`}
                className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <div className="relative w-4 h-4">
                <Image
                  src={personalInfo.socials.github.icon}
                  alt="GitHub"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            </a>

            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <div className="relative w-4 h-4">
                <Image
                  src={personalInfo.socials.linkedin.icon}
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>© 2026 {footer.copyrightText}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 font-medium">
            <span>{footer.builtWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
