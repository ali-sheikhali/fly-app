"use client";

import Image from "next/image";
import supportPerson from "public/about/person-headset.png";
import { useState } from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import userIcon from "public/about/user.png";
import logoColor from "public/logoWithColor.png";
import arrowIcon from "public/about/Arrow - Up.png";

/* ---------------------------- drop down wrapper --------------------------- */
function DropDownWrapper({ title, desc }: { title: string; desc: string }) {
  return (
    <div className=" relative ">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-500 w-14 h-14 flex justify-center items-center rounded-full shadow-md">
        <Image src={userIcon} width={24} height={24} alt="userIcon" />
      </div>

      <div className="w-11/12 mr-auto bg-backgrand-1 rounded-xl">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="mr-11 flex flex-col gap-2.5 px-6"
          >
            <AccordionTrigger className="font-bold text-zinc-900">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500 text-xs text-justify ">
              {desc}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default function SupportAbout() {
  const [choice, setChoice] = useState<"flight" | "hotel" | "combo">("flight");

  const options = [
    { key: "flight", label: "پرواز" },
    { key: "hotel", label: "هتل" },
    { key: "combo", label: "پرواز + هتل" },
  ] as const;
  return (
    <div className="flex flex-col gap-10">
      {/* ---------------------------------- image ---------------------------------  */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="bg-secondary-1-700 h-80 rounded-t-3xl">
          <div className="relative w-[320px] h-full -right-3">
            <Image
              src={supportPerson}
              alt="support-person"
              fill
              className="object-center"
            />
          </div>
          <p className="bg-primary-500 text-backgrand-1 py-6 font-bold text-center rounded-b-3xl">
            ارتباط با پشتیبانی
          </p>
        </div>

        {/* ---------------------------------- choice hotel and ... ---------------------------------  */}
        <div className="flex flex-col md:flex-1 gap-10">
          <div className="mt-20 md:mt-3">
            <div className="flex gap-5 items-center">
              {options.map((opt) => (
                <label
                  key={opt.key}
                  className={clsx(
                    "cursor-pointer flex justify-center items-center select-none rounded-[50px] px-6 py-4 transition-colors",
                    choice === opt.key
                      ? "bg-primary-500 text-white"
                      : "bg-zinc-200 border border-primary-50 text-zinc-900 hover:bg-primary-100/10"
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
          </div>

          {/* ---------------------------------- drop down ---------------------------------  */}
          <div className="flex flex-col gap-2 md:gap-5">
            <DropDownWrapper
              title="چگونه تور رزرو کنیم؟"
              desc="متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید"
            />
            <DropDownWrapper
              title="چگونه تور رزرو کنیم؟"
              desc="متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید"
            />
            <DropDownWrapper
              title="چگونه تور رزرو کنیم؟"
              desc="متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید"
            />
            <DropDownWrapper
              title="چگونه تور رزرو کنیم؟"
              desc="متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید"
            />
          </div>
        </div>
      </div>
      {/* ---------------------------------- about us ---------------------------------  */}
      <div className="flex flex-col gap-5 text-zinc-900 md:mt-20">
        <div className="flex items-center gap-3">
          <Image src={logoColor} width={48} height={48} alt="logo" />
          <h2 className="font-bold text-2xl">درباره ما</h2>
        </div>
        <p className="text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-secondary-1-700">بیشتر بخوانید</p>
          <Image src={arrowIcon} width={24} height={24} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
