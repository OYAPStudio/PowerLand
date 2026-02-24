"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: Mail,
      label: t("email"),
      value: t("emailValue"),
      href: `mailto:${t("emailValue")}`,
      color: "from-blue-500 to-blue-700",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: t("phoneValue"),
      href: `tel:${t("phoneValue")}`,
      color: "from-sky-500 to-cyan-700",
      shadow: "shadow-sky-500/20",
    },
    {
      icon: MapPin,
      label: t("address"),
      value: t("addressValue"),
      href: "#",
      color: "from-emerald-500 to-emerald-700",
      shadow: "shadow-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
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
              <Mail className="h-3.5 w-3.5" />
              {t("sectionLabel")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Contact info cards */}
            <div className="space-y-4" data-aos="fade-up">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-5 rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg ${item.shadow}`}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-500 rtl:rotate-180 rtl:group-hover:-translate-x-1 dark:text-slate-600 dark:group-hover:text-slate-400" />
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div
              className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all dark:border-white/10 dark:bg-white/[0.04]"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              {/* Form accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500" />

              <form
                className="p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-5">
                  <div>
                    <label
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500"
                      htmlFor="name"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500/50"
                      placeholder={t("form.name")}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500"
                      htmlFor="email"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500/50"
                      placeholder={t("form.email")}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500"
                      htmlFor="message"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500/50"
                      placeholder={t("form.message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    <span>{t("form.send")}</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
