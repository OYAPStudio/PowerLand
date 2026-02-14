"use client";

import { useTranslations } from "next-intl";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 border-t border-gray-200 py-8 dark:border-gray-800 sm:grid-cols-12 md:py-12">
          {/* Brand */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("copyright")}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {t("services")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  href="#services"
                >
                  {tNav("services")}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  href="#partners"
                >
                  {tNav("partners")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {t("company")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  href="#about"
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  href="#contact"
                >
                  {t("contactUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Social
            </h3>
            <ul className="flex gap-4">
              <li>
                <a
                  className="flex items-center justify-center text-blue-600 transition hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                  href="#0"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-blue-600 transition hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                  href="#0"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-blue-600 transition hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                  href="#0"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom brand watermark */}
      <div className="relative -mt-16 h-60 w-full overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['PowerLand'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['PowerLand'] after:[text-shadow:0_1px_0_white] dark:before:from-gray-800 dark:before:to-gray-900/30 dark:after:bg-gray-700/70 dark:after:mix-blend-lighten dark:after:[text-shadow:0_1px_0_black]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-600 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
