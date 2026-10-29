"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/portfolioData";
import {
  FileDown,
  ArrowRight,
  MapPin,
  Sparkles,
  Mail,
} from "lucide-react";

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/15 to-emerald-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend Roles & Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400">
                Hi there, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-md bg-slate-900 text-teal-400 dark:bg-slate-800 dark:text-teal-300 border border-teal-500/30">
                  {personalInfo.designation}
                </span>
                <span className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
                  • {personalInfo.subtitle}
                </span>
              </div>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.shortIntro}
            </p>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-teal-500" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* CTAs and Socials */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Download Resume Button */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-teal-500" />
              </a>

              {/* Direct Social Links */}
              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:border-teal-500/40 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="relative w-5 h-5">
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
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:border-teal-500/40 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={personalInfo.socials.linkedin.icon}
                      alt="LinkedIn"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative animated glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-pulse" />

              {/* Main Image Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-slate-900 border-2 border-teal-500/40 shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge inside image frame */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/80 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.name}
                    </p>
                    <p className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                      React & Next.js Specialist
                    </p>
                  </div>
                  <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
