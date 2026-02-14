"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600 dark:text-amber-400">
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

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-6" data-aos="fade-up">
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
                    {t("email")}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("emailValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
                    {t("phone")}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("phoneValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
                    {t("address")}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("addressValue")}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="name"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input w-full dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
                      placeholder={t("form.name")}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="email"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
                      placeholder={t("form.email")}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="message"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="form-textarea w-full dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
                      placeholder={t("form.message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn group w-full bg-gradient-to-t from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/25 hover:from-amber-700 hover:to-amber-600"
                  >
                    <span className="relative inline-flex items-center gap-2">
                      {t("form.send")}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                    </span>
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
