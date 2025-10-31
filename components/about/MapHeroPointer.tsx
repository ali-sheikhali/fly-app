"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * props:
 * - bgSrc: تصویر پس‌زمینه‌ی هیرو (نقشه)
 * - targetPct: مختصات «نقطه‌ی هدف» به درصد از عرض/ارتفاع سکشن
 * - popupPct: مختصات گوشه‌ی بالا-چپ popup به درصد از عرض/ارتفاع سکشن (فقط در lg+ نمایش)
 * - popupSize: اندازه‌ی popup (px)
 * - showOnLgOnly: فقط در lg به بالا نمایش فلش و هایلایت
 */
type PctPoint = { x: number; y: number };

export default function MapHeroPointer({
  bgSrc = "/about/Group.png",
  targetPct = { x: 43, y: 57 },  // ≈ تهران روی نقشه ایران در تصویر نمونه
  popupPct = { x: 73, y: 12 },   // جای کارت سمت راست-بالا
  popupSize = { w: 420, h: 240 },
  showOnLgOnly = true,
}: {
  bgSrc?: string;
  targetPct?: PctPoint;
  popupPct?: PctPoint;
  popupSize?: { w: number; h: number };
  showOnLgOnly?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [wh, setWh] = useState({ w: 0, h: 0 });

  // اندازه‌ی سکشن را بگیر تا مسیر SVG دقیق حساب شود
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setWh({ w: rect.width, h: rect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // مختصات پیکسلی از درصدها
  const targetPx = useMemo(
    () => ({ x: (targetPct.x / 100) * wh.w, y: (targetPct.y / 100) * wh.h }),
    [targetPct, wh]
  );
  const popupTL = useMemo(
    () => ({ x: (popupPct.x / 100) * wh.w, y: (popupPct.y / 100) * wh.h }),
    [popupPct, wh]
  );

  // نقطه‌ی اتصال فلش به کارت (کنار چپ کارت، کمی پایین‌تر از وسط)
  const arrowEnd = useMemo(() => {
    const x = popupTL.x; // لبه‌ی چپ کارت
    const y = popupTL.y + popupSize.h * 0.55;
    return { x, y };
  }, [popupTL, popupSize]);

  // دو کنترل‌پوینت برای قوس نرم
  const cp1 = useMemo(() => {
    // کمی جلوتر از نقطه‌ی شروع و بالاتر
    return {
      x: (targetPx.x + arrowEnd.x) / 2 - 80,
      y: (targetPx.y + arrowEnd.y) / 2 + 40,
    };
  }, [targetPx, arrowEnd]);

  const cp2 = useMemo(() => {
    // نزدیک مقصد، کمی بالاتر
    return { x: arrowEnd.x - 60, y: arrowEnd.y - 120 };
  }, [arrowEnd]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[730px] md:h-[530px] overflow-hidden"
    >
      {/* لایه 1: تصویر پس‌زمینه */}
      <Image src={bgSrc} alt="hero" fill priority className="object-cover" />

      {/* لایه 2: اورلی تیره */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020A21]/85 to-[#051235]" />

      {/* لایه 3: هایلایتِ نارنجی روی نقطه (فقط lg+) */}
      <div
        className={[
          "pointer-events-none absolute",
          showOnLgOnly ? "hidden lg:block" : "",
        ].join(" ")}
        style={{
          top: targetPx.y - 56,
          left: targetPx.x - 56,
          width: 112,
          height: 112,
        }}
        aria-hidden
      >
        {/* گلو نرم */}
        <div className="absolute inset-0 rounded-full blur-2xl mix-blend-screen bg-orange-500/45 ring-4 ring-orange-400/60" />
        {/* دات مرکزی روشن */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_20px_6px_rgba(251,146,60,0.9)]" />
        {/* لکه‌ی ارگانیک کوچک برای شبیه‌سازی شکل استان (اختیاری) */}
        <svg className="absolute inset-0" viewBox="0 0 112 112">
          <path
            d="M55 30 C68 32,80 42,78 52 C77 58,70 63,61 64 C50 66,41 62,39 55 C37 49,43 35,55 30 Z"
            fill="rgba(249,115,22,0.5)"
            stroke="rgba(249,115,22,0.8)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* لایه 4: فلش منحنی + نوک فلش (فقط lg+) */}
      <svg
        className={[
          "absolute inset-0 w-full h-full pointer-events-none",
          showOnLgOnly ? "hidden lg:block" : "",
        ].join(" ")}
        viewBox={`0 0 ${Math.max(wh.w, 1)} ${Math.max(wh.h, 1)}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="18"
            markerHeight="18"
            refX="14"
            refY="9"
            orient="auto"
          >
            <polygon points="0 0, 18 9, 0 18" fill="#F97316" />
          </marker>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* شلنگ نور/فلش */}
        <path
          d={`M ${targetPx.x} ${targetPx.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${arrowEnd.x} ${arrowEnd.y}`}
          stroke="#F97316"
          strokeWidth="4"
          fill="none"
          markerEnd="url(#arrowhead)"
          filter="url(#soft-glow)"
        />

        {/* یک «beam» باز (trapezoid) مثل طرح */}
        <path
          d={beamPath({
            start: targetPx,
            end: arrowEnd,
            thicknessStart: 12,
            thicknessEnd: 42,
          })}
          fill="rgba(249,115,22,0.18)"
          filter="url(#soft-glow)"
        />
      </svg>

      {/* لایه 5: کارت پاپ‌آپِ نقشه (فقط lg+) */}
      <div
        className={[
          "absolute rounded-2xl p-3 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
          showOnLgOnly ? "hidden lg:flex" : "flex",
          "items-center justify-center",
        ].join(" ")}
        style={{
          top: popupTL.y,
          left: popupTL.x,
          width: popupSize.w,
          height: popupSize.h,
        }}
      >
        {/* محتوای کارت: تصویر نقشه شهر/لوکیشن خودت */}
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/about/tehran-map.png" // اینو با اسکرین‌شات/نقشه‌ی خودت عوض کن
            alt="Tehran map"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/** مسیر beam (یک چهارضلعی باریک از نقطه‌ی شروع تا کارت) */
function beamPath({
  start,
  end,
  thicknessStart = 10,
  thicknessEnd = 40,
}: {
  start: { x: number; y: number };
  end: { x: number; y: number };
  thicknessStart?: number;
  thicknessEnd?: number;
}) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.max(Math.hypot(dx, dy), 1);
  // نرمال عمود بر مسیر
  const nx = -dy / len;
  const ny = dx / len;

  const s1x = start.x + nx * (thicknessStart / 2);
  const s1y = start.y + ny * (thicknessStart / 2);
  const s2x = start.x - nx * (thicknessStart / 2);
  const s2y = start.y - ny * (thicknessStart / 2);

  const e1x = end.x + nx * (thicknessEnd / 2);
  const e1y = end.y + ny * (thicknessEnd / 2);
  const e2x = end.x - nx * (thicknessEnd / 2);
  const e2y = end.y - ny * (thicknessEnd / 2);

  return `M ${s1x} ${s1y} L ${e1x} ${e1y} L ${e2x} ${e2y} L ${s2x} ${s2y} Z`;
}
