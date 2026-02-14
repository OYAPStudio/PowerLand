"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#partners", label: t("partners") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition-all ${
            scrolled
              ? "bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              : "bg-white/60 dark:bg-gray-900/60 shadow-md border border-gray-200/30 dark:border-gray-800/30"
          } backdrop-blur-md backdrop-saturate-150`}
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileNavOpen && (
          <div className="mt-2 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:bg-gray-900/95 md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
