"use client";

import { useTranslations } from "next-intl";
import { Shield } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stats.projects"), label: t("stats.projectsLabel") },
    { value: t("stats.clients"), label: t("stats.clientsLabel") },
    { value: t("stats.experience"), label: t("stats.experienceLabel") },
    { value: t("stats.support"), label: t("stats.supportLabel") },
  ];

  return (
    <section id="about" className="relative bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              <Shield className="h-3.5 w-3.5" />
              {t("sectionLabel")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          {/* Stats grid */}
          <div
            className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-y-out"
                data-aos-delay={index * 100}
              >
                <div className="mb-1 text-4xl font-bold text-blue-600 dark:text-blue-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
