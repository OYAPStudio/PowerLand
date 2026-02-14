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
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-5 py-5 shadow-xl ring-1 ring-white/10">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(37,99,235)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Animated electrical lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-32 w-full max-w-md">
                  {/* Central bolt */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-pulse">
                      <Zap className="h-16 w-16 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" fill="currentColor" />
                    </div>
                  </div>

                  {/* Orbiting dots */}
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite]">
                    <div className="absolute left-0 top-1/2 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <div className="absolute right-0 top-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                    <div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <div className="absolute bottom-0 left-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  </div>

                  {/* Outer ring */}
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                    <div className="absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                    <div className="absolute right-0 top-1/2 h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                    <div className="absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-sky-300/60" />
                    <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 rounded-full bg-sky-300/60" />
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="relative flex items-center justify-between text-xs text-blue-400/80">
                <span>⚡ POWERLAND SYSTEMS</span>
                <span className="animate-pulse">● ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
