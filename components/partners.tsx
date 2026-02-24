"use client";

import { useTranslations } from "next-intl";
import { Handshake, Award, ExternalLink, Zap, Gauge } from "lucide-react";

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section id="partners" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-100"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(59,130,246,0.04) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.04) 0.7px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              <Handshake className="h-3.5 w-3.5" />
              {t("sectionLabel")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          {/* Partner cards */}
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {/* Bedford */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              data-aos="fade-up"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500" />

              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t("bedford.name")}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Award className="h-3.5 w-3.5 text-blue-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          Official Partner
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all group-hover:border-blue-500/40 group-hover:text-blue-500 dark:border-white/10 dark:text-slate-500 dark:group-hover:border-blue-500/40 dark:group-hover:text-blue-400">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {t("bedford.description")}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["VFD", "Inverters", "Motor Control"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Entes */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500" />

              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-700 shadow-lg shadow-sky-500/20">
                      <Gauge className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t("entes.name")}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Award className="h-3.5 w-3.5 text-sky-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                          Official Partner
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all group-hover:border-sky-500/40 group-hover:text-sky-500 dark:border-white/10 dark:text-slate-500 dark:group-hover:border-sky-500/40 dark:group-hover:text-sky-400">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {t("entes.description")}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["Power Meters", "CTs", "Protection"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
