"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import hamburgerMenu from "public/home/Hamburger menu.svg";
import Navbarlogo from "public/home/logo.svg";
import chatIcon from "public/home/Chat.svg"
export default function NavBar() {
  return (
    <div>
      {/* mobile navbar */}
      <div className="flex justify-between items-center md:hidden">
        <Image src={hamburgerMenu} width={24} height={24} alt="hamburgerMenu" />
        <Link href="/">
          <Image src={Navbarlogo} width={38} height={38} alt="Navbarlogo" />
        </Link>
      </div>

      {/* desktop navbar */}
      <div className="hidden md:flex md:justify-between text-[16px] gap-4 items-center">
        <div className="flex gap-4">
          <Image src={Navbarlogo} width={38} height={38} alt="Navbarlogo" />

          <Link
            href="/"
            className="text-primary-100 border border-secondary-1-700 p-3 rounded-xl"
          >
            صفحه اصلی
          </Link>

          {/* Dropdown for flights */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group border border-primary-500 p-3 rounded-xl text-primary-100 inline-flex items-center gap-1">
                پرواز
                <svg
                  className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              sideOffset={8}
              className="text-right"
            >
              <DropdownMenuPrimitive.Arrow className="fill-white" />
              <DropdownMenuItem asChild>
                <Link href="/flights/internal">داخلی</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/flights/external">خارجی</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group border border-primary-500 p-3 rounded-xl text-primary-100 inline-flex items-center gap-1">
                هتل
                <svg
                  className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              sideOffset={8}
              className="text-right"
            >
              <DropdownMenuPrimitive.Arrow className="fill-white" />
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel1">هتل 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel2">هتل 2</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel3">هتل 3</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group border border-primary-500 p-3 rounded-xl text-primary-100 inline-flex items-center gap-1">
                تور
                <svg
                  className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              sideOffset={8}
              className="text-right"
            >
              <DropdownMenuPrimitive.Arrow className="fill-white" />
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel1">تور1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel2">تور 2</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel3">تور 3</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group border border-primary-500 p-3 rounded-xl text-primary-100 inline-flex items-center gap-1">
                خدمات مسافرتی
                <svg
                  className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              sideOffset={8}
              className="text-right"
            >
              <DropdownMenuPrimitive.Arrow className="fill-white" />
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel1">خدمت 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel2">خدمت 2</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hotel/hotel3">خدمت 3</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="text-primary-100 border border-primary-500 p-3 rounded-xl"
          >
            درباره ما
          </Link>
        </div>
        <div className="flex items-center gap-2" >
          <Link
            href="/about"
            className="text-secondary-1-700 border border-secondary-1-700 p-3 rounded-xl"
          >
            ورود / ثبت نام
          </Link>
          <div className="border border-secondary-2-500 p-3 rounded-xl">
          <Image src={chatIcon} width={24} height={24} alt="chatIcon" />

          </div>
        </div>
      </div>
    </div>
  );
}
