"use client";

import { useTranslations } from "next-intl";
import { Handshake, Award } from "lucide-react";

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section id="partners" className="relative">
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
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {/* Bedford */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {t("bedford.name")}
                    </h3>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      Official Partner
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("bedford.description")}
                </p>
              </div>
            </div>

            {/* Entes */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/20 to-transparent" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 shadow-md">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {t("entes.name")}
                    </h3>
                    <span className="text-xs font-medium text-sky-600 dark:text-sky-400">
                      Official Partner
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("entes.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
