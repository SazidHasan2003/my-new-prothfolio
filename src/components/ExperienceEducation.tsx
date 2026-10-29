"use client";

import React from "react";
import { portfolioData } from "@/portfolioData";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Building,
  CheckCircle,
} from "lucide-react";

export default function ExperienceEducation() {
  const { education, experience } = portfolioData;

  return (
    <section className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Professional Experience Column */}
          <div id="experience" className="scroll-mt-24 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {experience.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {experience.subtitle}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" />
            </div>

            {/* Experience Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {experience.items.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-teal-500 group-hover:scale-125 transition-transform duration-200 shadow-md shadow-teal-500/20" />

                  {/* Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                        {item.role}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-teal-500" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Building className="w-4 h-4 text-teal-500" />
                        <span>{item.company}</span>
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Background Column */}
          <div id="education" className="scroll-mt-24 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {education.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {education.subtitle}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
            </div>

            {/* Education Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {education.items.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-emerald-500 group-hover:scale-125 transition-transform duration-200 shadow-md shadow-emerald-500/20" />

                  {/* Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        Undergraduate Degree
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>
                        Core coursework: Data Structures, Algorithms, Software
                        Engineering, Web Technologies
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Academic Highlights summary pill */}
              <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  🎓 Strong theoretical foundation in algorithmic problem-solving,
                  procedural logic in C/C++, and object-oriented principles,
                  enabling rapid adaptation to high-level JavaScript and Next.js
                  ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

