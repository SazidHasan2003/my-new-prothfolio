"use client";

import React from "react";
import { portfolioData } from "@/portfolioData";
import {
  Code2,
  Cpu,
  Tv,
  Puzzle,
  CheckCircle2,
  Sparkles,
  Compass,
  GraduationCap,
} from "lucide-react";

export default function AboutSection() {
  const { aboutMe } = portfolioData;

  // Icon mapping for hobbies
  const getInterestIcon = (name: string) => {
    switch (name) {
      case "Anime & Manga":
        return <Tv className="w-6 h-6 text-pink-500" />;
      case "Tech Exploration & Systems":
        return <Cpu className="w-6 h-6 text-teal-500" />;
      case "Cinema & Logical Puzzles":
        return <Puzzle className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {aboutMe.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" />
        </div>

        {/* Bio & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio & Journey (8 columns on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-500" />
                <span>Frontend Architecture & Creative Logic</span>
              </h3>
              {aboutMe.bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 dark:text-slate-300 leading-relaxed text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Journey Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-teal-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Evolution & Fundamentals</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {aboutMe.journey.title}
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {aboutMe.journey.description}
                </p>
              </div>
            </div>
          </div>

          {/* What I Enjoy Working On (5 columns on lg) */}
          <div className="lg:col-span-5 h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {aboutMe.workPreference.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {aboutMe.workPreference.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-500/5 dark:hover:bg-teal-500/10 border border-slate-100 dark:border-slate-800 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-500 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat footer inside card */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <p className="text-2xl font-black text-teal-600 dark:text-teal-400">
                    4+
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Years Academics
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    100%
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests Sub-Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {aboutMe.hobbiesAndInterests.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Personal passions that fuel my creativity and perspective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutMe.hobbiesAndInterests.interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4">
                  {getInterestIcon(interest.name)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {interest.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

