import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "public/404.png";

export default function notFound() {
  return (
    <div className="w-full">
      <div className="bg-linear-to-b from-[#051235] to-[#020A21]  py-5">
        <div className="w-10/12 md:w-9/12 mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center min-h-[350px] my-14">
        <Image
          src={notFoundImage}
          width={210}
          height={210}
          alt="not-found-image"
        />
        <div className="w-10/12 mx-auto flex flex-col gap-6">
          <p className="text-xs text-center text-zinc-900">
            متأسفیم! صفحه‌ای که به دنبال آن هستید پیدا نشد.{" "}
          </p>
          <Link
            className=""
            href="/"
          >
            <p className="w-8/12 md:w-2/12 mx-auto bg-secondary-1-700 text-backgrand-1 rounded-lg py-4 text-center">بازگشت به صفحه اصلی</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
