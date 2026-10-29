"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/portfolioData";
import { Layers, Terminal, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;

  // Category Icon & Color Mapping
  const getCategoryMeta = (category: string) => {
    if (category.includes("Frontend")) {
      return {
        icon: <Layers className="w-5 h-5 text-teal-500" />,
        badge: "Core Expertise",
        border: "hover:border-teal-500/50",
      };
    }
    if (category.includes("Programming")) {
      return {
        icon: <Terminal className="w-5 h-5 text-cyan-500" />,
        badge: "Foundational",
        border: "hover:border-cyan-500/50",
      };
    }
    if (category.includes("Database") || category.includes("Authentication")) {
      return {
        icon: <Database className="w-5 h-5 text-emerald-500" />,
        badge: "Working Knowledge",
        border: "hover:border-emerald-500/50",
      };
    }
    return {
      icon: <Wrench className="w-5 h-5 text-indigo-500" />,
      badge: "DevOps & Tools",
      border: "hover:border-indigo-500/50",
    };
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 relative scroll-mt-20 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {skills.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            {skills.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" />
        </div>

        {/* 4 Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((categoryGroup, idx) => {
            const meta = getCategoryMeta(categoryGroup.category);
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-xl ${meta.border} flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                        {meta.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {categoryGroup.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {meta.badge}
                    </span>
                  </div>

                  {/* Skills Grid within Category */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-none hover:shadow-md transition-all duration-200"
                      >
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-slate-900/80 p-1 border border-slate-200/50 dark:border-slate-700/60 group-hover:scale-110 transition-transform duration-200">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-3 text-right">
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {categoryGroup.items.length} Technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

