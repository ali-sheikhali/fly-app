'use client'
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import istanbulImage from "public/home/stanbul.jpg";
import arrow from "public/home/arrrr.png"
export default function TouristDestinations() {
  const [choice, setChoice] = useState<"asia" | "europe" | "africa" | "america">("asia");

  const destination = [
    { key: "asia", label: "آسیا" },
    { key: "europe", label: "اروپا" },
    { key: "africa", label: "آفریقا" },
    { key: "america", label: "آمریکا" },
  ] as const;

  // just 7 placeholders; same image/content each
  const items = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="w-11/12 mx-auto md:w-8/12 my-10">
      <div className="flex flex-col gap-6">
        <h5 className="font-bold">مقاصد گردشگری</h5>

        <div className="flex gap-3 items-center">
          {destination.map((opt) => (
            <label
              key={opt.key}
              className={clsx(
                "cursor-pointer flex justify-center items-center select-none rounded-xl px-4 py-2 transition-colors",
                choice === opt.key
                  ? "bg-secondary-2-200 text-black"
                  : "border border-zinc-300 text-zinc-600 hover:bg-primary-100/10"
              )}
            >
              <input
                type="radio"
                name="choice"
                value={opt.key}
                checked={choice === opt.key}
                onChange={() => setChoice(opt.key)}
                className="hidden"
              />
              {opt.label}
            </label>
          ))}
        </div>

        {/* mobile: horizontal scroll, lg+: 7-column grid */}
        <div
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide
             px-3
            lg:mx-0 lg:px-0
            lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:snap-none
          "
        >
          {items.map((n) => (
            <div
              key={n}
              className="
                relative w-[210px] h-[210px] rounded-xl overflow-hidden
                shrink-0 snap-start
                lg:w-full
              "
            >
              <Image
                src={istanbulImage}
                alt={`istanbul ${n + 1}`}
                fill
                className="object-cover"
                priority={n < 2} /* tiny perf tweak for first items */
              />
              <div className="absolute flex justify-center items-center top-2 left-2 bg-backgrand-1 text-black rounded-2xl z-10 w-11 text-xs" >
                    2 تور
              </div>
              <div className="absolute right-2 bottom-6 font-bold text-backgrand-1 z-10">
                استانبول
              </div>
              <div className="absolute right-2 bottom-2 font-bold text-backgrand-1 z-10">
                <Image src={arrow} alt="arrow" width={170} height={11}  />
              </div>

              <div className="absolute inset-0 bg-linear-to-b from-[#040C24]/80 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
