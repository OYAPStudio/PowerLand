"use client";

import { useTranslations } from "next-intl";
import { Zap, ArrowRight } from "lucide-react";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  const t = useTranslations("hero");

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* Badge */}
            <div
              className="mb-6 border-y border-gray-200 dark:border-gray-700"
              data-aos="zoom-y-out"
            >
              <div className="flex items-center justify-center gap-2 py-3">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t("badge")}
                </span>
                <Zap className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            <h1
              className="mb-6 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t("title")}{" "}
              <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-600 dark:text-gray-400"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t("description")}
              </p>

              <div
                className="relative before:absolute before:inset-0 before:border-y before:border-gray-200 dark:before:border-gray-700"
              >
                <div
                  className="mx-auto flex max-w-xs flex-col gap-4 py-4 sm:max-w-none sm:flex-row sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-blue-600 sm:w-auto"
                    href="#services"
                  >
                    <span className="relative inline-flex items-center gap-1">
                      {t("cta")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto"
                    href="#contact"
                  >
                    {t("ctaSecondary")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero visual - Electrical grid animation */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            {/* Dark glassmorphism card */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#0F172A] px-5 py-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
              {/* Grid pattern - subtle blue lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
              
              {/* Radial gradient glow */}
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]"></div>

              {/* Animated electrical center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-40 w-40">
                  {/* Central glowing bolt */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.6)] ring-1 ring-white/20 backdrop-blur-sm">
                      <Zap className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" fill="currentColor" />
                    </div>
                  </div>

                  {/* Orbiting particles */}
                  {/* Orbit 1 */}
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">
                    <div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,1)]" />
                    <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 rounded-full bg-blue-600/50" />
                  </div>
                  
                  {/* Orbit 2 (reverse) */}
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
                    <div className="absolute right-0 top-1/2 h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,1)]" />
                    <div className="absolute left-0 top-1/2 h-1 w-1 rounded-full bg-sky-600/50" />
                  </div>

                  {/* Orbit 3 */}
                  <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite]">
                     <div className="absolute left-1/4 top-1/4 h-1 w-1 rounded-full bg-white/40" />
                     <div className="absolute right-1/4 bottom-1/4 h-1 w-1 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Status bar - Glass effect dashboard style */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/5 bg-[#0B1121]/80 px-4 py-3 text-[10px] font-medium backdrop-blur-md sm:text-xs">
                <div className="flex items-center gap-2 text-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="tracking-wider">SYSTEMS ACTIVE</span>
                </div>
                
                <div className="flex gap-6 text-blue-200/70">
                  <span className="hidden sm:block">EFFICIENCY: <span className="text-white font-semibold">98.5%</span></span>
                  <span className="hidden sm:block">UPTIME: <span className="text-white font-semibold">99.99%</span></span>
                </div>
                
                <div className="flex items-center gap-1 text-blue-200/70">
                  <span>LATENCY:</span>
                  <span className="text-emerald-400 font-semibold">12ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
