"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Zap,
  ArrowRight,
  Activity,
  CheckCircle2,
  Cpu,
  Globe,
  ChevronDown,
} from "lucide-react";

const STYLE_ID = "hero-animations";

const DeckGlyph = () => (
  <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden>
    <circle
      cx="60"
      cy="60"
      r="46"
      fill="none"
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="1.4"
      className="motion-safe:animate-[hero-orbit_8.5s_linear_infinite] motion-reduce:animate-none"
      style={{ strokeDasharray: "18 14", transformOrigin: "60px 60px" }}
    />
    <rect
      x="34"
      y="34"
      width="52"
      height="52"
      rx="14"
      fill="rgba(59,130,246,0.08)"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.2"
      className="motion-safe:animate-[hero-grid_5.4s_ease-in-out_infinite] motion-reduce:animate-none"
      style={{ transformOrigin: "60px 60px" }}
    />
    <circle cx="60" cy="60" r="7" fill="rgba(59,130,246,0.8)" />
    <path
      d="M60 30v10M60 80v10M30 60h10M80 60h10"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.4"
      strokeLinecap="round"
      className="motion-safe:animate-[hero-pulse_6s_ease-in-out_infinite] motion-reduce:animate-none"
    />
  </svg>
);

export default function HeroHome() {
  const t = useTranslations("hero");
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<"energy" | "automation">("energy");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes hero-intro {
        0% { opacity: 0; transform: translate3d(0, 64px, 0) scale(0.98); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes hero-orbit {
        0% { stroke-dashoffset: 0; transform: rotate(0deg); }
        100% { stroke-dashoffset: -64; transform: rotate(360deg); }
      }
      @keyframes hero-grid {
        0%, 100% { transform: rotate(-2deg); opacity: 0.7; }
        50% { transform: rotate(2deg); opacity: 1; }
      }
      @keyframes hero-pulse {
        0%, 100% { stroke-dasharray: 0 200; opacity: 0.2; }
        45%, 60% { stroke-dasharray: 200 0; opacity: 1; }
      }
      @keyframes hero-glow {
        0%, 100% { opacity: 0.3; transform: translate3d(0,0,0); }
        50% { opacity: 0.7; transform: translate3d(0,-8px,0); }
      }
      @keyframes hero-drift {
        0%, 100% { transform: translate3d(0,0,0) rotate(-3deg); }
        50% { transform: translate3d(0,-12px,0) rotate(3deg); }
      }
      @keyframes hero-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") {
      setVisible(true);
      return;
    }

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const modes = useMemo(
    () => ({
      energy: {
        title: t("modeEnergy"),
        description: t("modeEnergyDesc"),
        items: [
          t("modeEnergyItem1"),
          t("modeEnergyItem2"),
          t("modeEnergyItem3"),
        ],
      },
      automation: {
        title: t("modeAutomation"),
        description: t("modeAutomationDesc"),
        items: [
          t("modeAutomationItem1"),
          t("modeAutomationItem2"),
          t("modeAutomationItem3"),
        ],
      },
    }),
    [t]
  );

  const activeMode = modes[mode];

  const capabilities = [
    { name: t("capSolar"), status: t("capSolarStatus") },
    { name: t("capVFD"), status: t("capVFDStatus") },
    { name: t("capMonitoring"), status: t("capMonitoringStatus") },
  ];

  const metrics = [
    { icon: Activity, value: "99.9%", label: t("metricUptime"), color: "text-blue-500" },
    { icon: Globe, value: "500+", label: t("metricProjects"), color: "text-sky-500" },
    { icon: Cpu, value: "24/7", label: t("metricMonitoring"), color: "text-emerald-500" },
    { icon: CheckCircle2, value: "ISO", label: t("metricCertified"), color: "text-purple-500" },
  ];

  const setSpotlight = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--hero-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--hero-y", `${event.clientY - rect.top}px`);
  };

  const clearSpotlight = (event: React.MouseEvent<HTMLLIElement>) => {
    event.currentTarget.style.removeProperty("--hero-x");
    event.currentTarget.style.removeProperty("--hero-y");
  };

  return (
    <div className="relative isolate min-h-screen w-full bg-slate-950 text-white">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          backgroundColor: "#040404",
          backgroundImage: [
            "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(100,116,139,0.10), transparent 70%)",
          ].join(", "),
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(250,250,250,0.06) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.06) 0.7px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 10%, rgba(59,130,246,0.10), transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* Floating orbs */}
      <span className="pointer-events-none absolute -left-16 top-32 h-40 w-40 rounded-full border border-blue-500/10 opacity-50 motion-safe:animate-[hero-glow_9s_ease-in-out_infinite]" />
      <span className="pointer-events-none absolute -right-12 bottom-32 h-48 w-48 rounded-full border border-white/5 opacity-30 motion-safe:animate-[hero-drift_12s_ease-in-out_infinite]" />

      <section
        ref={sectionRef}
        className={`relative flex min-h-screen w-full flex-col gap-16 px-6 pb-12 pt-28 transition-opacity duration-700 md:gap-20 md:px-10 lg:px-16 xl:px-24 ${
          visible
            ? "motion-safe:animate-[hero-intro_1s_cubic-bezier(.22,.68,0,1)_forwards]"
            : "opacity-0"
        }`}
      >
        {/* Top: heading + mode card */}
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.4em] text-blue-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {t("title")}{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                  {t("titleHighlight")}
                </span>
              </h1>
              <p className="max-w-2xl text-base text-slate-400 md:text-lg">
                {t("description")}
              </p>
            </div>

            {/* CTA + metrics row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <Zap className="h-4 w-4 fill-current" />
                  <span>{t("cta")}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <span>{t("ctaSecondary")}</span>
                </a>
              </div>
              <div className="hidden divide-x divide-white/10 overflow-hidden rounded-full border border-white/10 text-xs uppercase tracking-[0.3em] lg:flex">
                {metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="flex flex-col px-5 py-3">
                    <span className="text-[11px] text-slate-500">
                      {m.label}
                    </span>
                    <span className="text-lg font-semibold tracking-tight">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mode card */}
          <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  {t("modeLabel")}
                </p>
                <h2 className="text-xl font-semibold tracking-tight">
                  {activeMode.title}
                </h2>
              </div>
              <DeckGlyph />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {activeMode.description}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setMode("energy")}
                className={`flex-1 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                  mode === "energy"
                    ? "border-blue-500/40 bg-blue-500/20 text-blue-300"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                {t("modeEnergyTab")}
              </button>
              <button
                type="button"
                onClick={() => setMode("automation")}
                className={`flex-1 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                  mode === "automation"
                    ? "border-blue-500/40 bg-blue-500/20 text-blue-300"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                {t("modeAutomationTab")}
              </button>
            </div>
            <ul className="space-y-2 text-sm">
              {activeMode.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-400"
                >
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Bottom: features + capabilities */}
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] xl:items-stretch">
          {/* Control stack */}
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {t("stackTitle")}
              </h3>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-600">
                v3.0
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t("stackDesc")}
            </p>
            <div className="grid gap-3">
              {[t("stackItem1"), t("stackItem2"), t("stackItem3")].map(
                (item) => (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-2xl border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 transition duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
                  >
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Stats grid (mobile-visible version) */}
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition">
            <h3 className="text-xs uppercase tracking-[0.35em] text-slate-400">
              {t("statsTitle")}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-2">
                  <div className={`flex items-center gap-2 ${m.color}`}>
                    <m.icon className="h-5 w-5" />
                    <span className="text-2xl font-bold text-white">
                      {m.value}
                    </span>
                  </div>
                  <span className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {t("capTitle")}
              </h3>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-600">
                {t("capIndexed")}
              </span>
            </div>
            <ul className="space-y-4">
              {capabilities.map((cap, index) => (
                <li
                  key={cap.name}
                  onMouseMove={setSpotlight}
                  onMouseLeave={clearSpotlight}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 px-5 py-4 transition duration-500 hover:-translate-y-0.5 hover:border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(190px circle at var(--hero-x, 50%) var(--hero-y, 50%), rgba(59,130,246,0.12), transparent 72%)",
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
                      {cap.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
                      {cap.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Scroll indicator */}
        <div className="mt-auto flex justify-center pb-4">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
            aria-label="Scroll down"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">
              {t("scrollHint")}
            </span>
            <ChevronDown className="h-5 w-5 motion-safe:animate-[hero-bounce_2s_ease-in-out_infinite]" />
          </a>
        </div>
      </section>
    </div>
  );
}
