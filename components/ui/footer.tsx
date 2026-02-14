"use client";

import { useTranslations } from "next-intl";
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
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#services"
                >
                  {tNav("services")}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
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
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#about"
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
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
            <ul className="flex gap-1">
              <li>
                <a
                  className="flex items-center justify-center text-amber-500 transition hover:text-amber-600"
                  href="#0"
                  aria-label="Facebook"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-amber-500 transition hover:text-amber-600"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 26h-8c-3.309 0-6-2.691-6-6v-8c0-3.309 2.691-6 6-6h8c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6zm-8-18c-2.206 0-4 1.794-4 4v8c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4v-8c0-2.206-1.794-4-4-4h-8z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-amber-500 transition hover:text-amber-600"
                  href="#0"
                  aria-label="WhatsApp"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.025.503 3.935 1.386 5.611L3.6 27.4l7.063-1.854A11.945 11.945 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.09 17.09c-.255.714-1.483 1.367-2.046 1.453-.563.085-1.082.397-3.626-.754-3.072-1.39-5.032-4.53-5.183-4.74-.15-.213-1.233-1.64-1.233-3.127 0-1.487.78-2.22 1.057-2.523.278-.303.607-.378.81-.378.202 0 .405.002.582.01.187.009.438-.071.686.523.255.607.867 2.11.943 2.264.076.153.127.332.025.535-.101.204-.152.331-.303.509-.15.178-.316.397-.452.533-.15.152-.307.316-.132.619.176.303.78 1.287 1.674 2.084 1.15 1.025 2.12 1.342 2.423 1.495.303.153.48.128.657-.076.178-.204.76-.887.963-1.19.202-.303.405-.252.683-.152.278.101 1.763.832 2.066.983.303.152.505.228.58.354.076.127.076.735-.178 1.45z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom brand watermark */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['PowerLand'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['PowerLand'] after:[text-shadow:0_1px_0_white] dark:before:from-gray-800 dark:before:to-gray-900/30 dark:after:bg-gray-700/70 dark:after:mix-blend-lighten dark:after:[text-shadow:0_1px_0_black]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-amber-500 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
