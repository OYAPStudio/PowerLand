"use client";

import { useTranslations } from "next-intl";
import {
  Wrench,
  Cog,
  Scale,
  Cpu,
  Gauge,
  Plug,
  BatteryCharging,
} from "lucide-react";

const serviceIcons = [
  { key: "projects", icon: Wrench },
  { key: "spareParts", icon: Cog },
  { key: "weighing", icon: Scale },
  { key: "automation", icon: Cpu },
  { key: "vfd", icon: Gauge },
  { key: "electrical", icon: Plug },
  { key: "energy", icon: BatteryCharging },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 dark:before:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
              <BatteryCharging className="h-3.5 w-3.5" />
              {t("sectionLabel")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-400">
              {t("description")}
            </p>
          </div>

          {/* Services grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {serviceIcons.map(({ key, icon: Icon }, index) => (
              <article key={key} data-aos="zoom-y-out" data-aos-delay={index * 100}>
                <h3 className="mb-2 flex items-center gap-2 font-medium text-gray-200">
                  <Icon className="h-4 w-4 text-amber-500" />
                  <span>{t(`items.${key}.title`)}</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                  {t(`items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
