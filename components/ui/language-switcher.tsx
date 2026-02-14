"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="flex h-8 items-center gap-1.5 rounded-lg border border-gray-200/50 bg-white/50 px-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
