"use client";

import { useTranslations } from "next-intl";
import { Zap, ArrowRight, Activity, CheckCircle2, Cpu, Globe } from "lucide-react";

export default function HeroHome() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Spotlight Glows */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-sky-500 opacity-10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Animated Badge */}
          <div
            className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md transition-all hover:bg-blue-500/20"
            data-aos="zoom-y-out"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-300">
              {t("badge")}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="mb-6 max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
            data-aos="zoom-y-out"
            data-aos-delay={100}
          >
            {t("title")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 bg-clip-text text-transparent blur-sm filter">
                {t("titleHighlight")}
              </span>
              <span className="absolute inset-0 z-10 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="mb-10 max-w-2xl text-lg text-slate-400 md:text-xl"
            data-aos="zoom-y-out"
            data-aos-delay={200}
          >
            {t("description")}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col gap-4 sm:flex-row"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Zap className="h-5 w-5 fill-current" />
              <span>{t("cta")}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>{t("ctaSecondary")}</span>
            </a>
          </div>

          {/* Bottom Stats / Ticker */}
          <div
            className="mt-24 grid w-full max-w-5xl grid-cols-2 gap-8 border-t border-slate-800/60 pt-8 sm:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-blue-500">
                <Activity className="h-5 w-5" />
                <span className="text-2xl font-bold text-white">99.9%</span>
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Uptime</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-sky-500">
                <Globe className="h-5 w-5" />
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Projects</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-emerald-500">
                <Cpu className="h-5 w-5" />
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Monitoring</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-purple-500">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-2xl font-bold text-white">ISO</span>
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}