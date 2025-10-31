import Image from "next/image";
import hero_header from "../../public/about/Group.png";
import NavBar from "../layout/NavBar";
import LoacationAbout from "./LoacationAbout";

export default function HeroHeaderAbout() {
  return (
    <section className="relative w-full h-[730px] md:h-[530px]">
      {/* لایه 1: تصویر */}
      <Image
        src={hero_header}
        fill
        alt="hero-header"
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#020A21]/85 to-[#051235] z-0" />

      <div
        id="map-target"
        className="
          pointer-events-none hidden lg:block absolute z-10
          w-40 h-20 rounded-full
          bg-orange-500/45 ring-4 ring-orange-400/60
          blur-2xl mix-blend-screen
          lg:top-[300px] lg:right-[800px]  
        "
        aria-hidden
      />

      <svg
        className="hidden lg:block pointer-events-none absolute inset-0 w-full h-full z-10"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="16"
            markerHeight="16"
            refX="14"
            refY="8"
            orient="auto"
          >
            <polygon points="0 0, 16 8, 0 16" fill="#F97316" />
          </marker>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 
          مختصات نمونه:
          - شروع (M 340 640): جایی نزدیک لبه‌ی راست/بالای کارت
          - پایان (… , 780 300): مرکز نقطه‌ی نارنجی
          سه نقطه را جابه‌جا کن تا دقیق بشود.
        */}
        <path
          d="M 340 640 C 480 600, 600 520, 780 300"
          stroke="#F97316"
          strokeWidth="4"
          fill="none"
          markerEnd="url(#arrowhead)"
          filter="url(#soft-glow)"
          // strokeDasharray="10 10"
        />
      </svg>

      {/* لایه 5: محتوا (روی همه) */}
      <div className="absolute w-10/12 md:w-9/12 left-1/2 -translate-x-1/2 top-9 z-20">
        <NavBar />
        <LoacationAbout />
      </div>
    </section>
  );
}
