"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ChoiceFlightsHotels() {
  const [choice, setChoice] = useState<"flight" | "hotel" | "combo">("flight");
  const [flightType, setFlightType] = useState<
    "oneway" | "roundtrip" | "multi" | null
  >("oneway");

  const options = [
    { key: "flight", label: "پرواز" },
    { key: "hotel", label: "هتل" },
    { key: "combo", label: "پرواز + هتل" },
  ] as const;

  const flightOptions = [
    { key: "oneway", label: "یک‌طرفه" },
    { key: "roundtrip", label: "رفت و برگشت" },
    { key: "multi", label: "چند مسیره" },
  ] as const;

  return (
    <div className="flex flex-col gap-6 mt-20">
 
      <div className="flex justify-between">
        {options.map((opt) => (
          <label
            key={opt.key}
            className={clsx(
              "cursor-pointer select-none rounded-[50px] px-4 py-2 transition-colors",
              choice === opt.key
                ? "bg-primary-500 text-white"
                : "border border-primary-50 text-primary-50 hover:bg-primary-100/10"
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

    
      {(choice === "flight" || choice === "combo") && (
        <div className="flex justify-between">
          {flightOptions.map((opt) => (
            <label
              key={opt.key}
              className={clsx(
                "cursor-pointer flex items-center gap-4 text-xs text-backgrand-1 select-none rounded-[50px] transition-colors"
              )}
            >
              <input
                type="radio"
                name="flightType"
                value={opt.key}
                checked={flightType === opt.key}
                onChange={() => setFlightType(opt.key)}
                className={`${flightType === opt.key ? "accent-secondary-1-700" : ""} `}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

    </div>
  );
}
