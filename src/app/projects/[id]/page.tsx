import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioData } from "@/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function generateStaticParams() {
  return portfolioData.projects.items.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.items.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Project Not Found | Sazid Hasan Sarker",
    };
  }

  return {
    title: `${project.title} - Project Details | Sazid Hasan Sarker`,
    description: project.brief,
    openGraph: {
      title: `${project.title} | Sazid Hasan Sarker`,
      description: project.brief,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = portfolioData.projects.items.findIndex(
    (p) => p.id === id
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects.items[projectIndex];
  const allProjects = portfolioData.projects.items;
  const prevProject =
    projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? allProjects[projectIndex + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Project Title & Action Header */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Project Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {project.brief}
            </p>

            {/* CTAs: Live Project & GitHub */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Project Preview Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 shadow-2xl mb-12 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-12 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-500" />
              <span>Core Technologies & Architecture</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-sm font-semibold bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Project Overview
            </h2>
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Key Features & Implementation Highlights
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {project.keyFeatures.map((feat, idx) => {
                // Split title if colon exists for nice badge treatment
                const parts = feat.split(":");
                const title = parts.length > 1 ? parts[0] : null;
                const body = parts.length > 1 ? parts.slice(1).join(":") : feat;

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors flex items-start gap-4"
                  >
                    <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      {title ? (
                        <>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                            {title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {body.trim()}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {feat}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenges Faced & Future Plans - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Challenges Faced */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/40 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400">
                <div className="p-2 rounded-xl bg-amber-500/10">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">Challenges Overcome</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Plans */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-teal-200/60 dark:border-teal-900/40 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-teal-600 dark:text-teal-400">
                <div className="p-2 rounded-xl bg-teal-500/10">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">
                  Future Plans & Enhancements
                </h2>
              </div>
              <ul className="space-y-3">
                {project.futurePlans.map((plan, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Navigation (Previous / Next) */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-teal-500/10 group-hover:text-teal-600 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs text-slate-400">Previous Project</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/#projects"
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-right"
              >
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-slate-400">Next Project</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-teal-500/10 group-hover:text-teal-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
