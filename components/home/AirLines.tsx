import Image from "next/image";
import qatarLogo from "public/home/qatarAir.png";
import somonLogo from "public/home/somonAir.png";

export default function AirLines() {
  return (
    <div className="w-full bg-zinc-200 mt-[45px] md:mt-5 overflow-hidden">
      <div
        className="
          flex items-center gap-6 md:gap-10 py-6 w-11/12 md:w-8/12 mx-auto
          overflow-x-auto scroll-smooth
          scrollbar-hide
        "
      >
        <div className="relative w-28 h-5 md:w-52 md:h-9 shrink-0">
          <Image src={somonLogo} fill alt="somonLogo" />
        </div>

        <div className="relative w-24 h-8 md:w-40 md:h-14 shrink-0">
          <Image src={qatarLogo} fill alt="qatarLogo" />
        </div>

        <div className="relative w-28 h-5 md:w-52 md:h-9 shrink-0">
          <Image src={somonLogo} fill alt="somonLogo" />
        </div>

        <div className="relative w-24 h-8 md:w-40 md:h-14 shrink-0">
          <Image src={qatarLogo} fill alt="qatarLogo" />
        </div>

        <div className="relative w-28 h-5 md:w-52 md:h-9 shrink-0">
          <Image src={somonLogo} fill alt="somonLogo" />
        </div>

        <div className="relative w-24 h-8 md:w-40 md:h-14 shrink-0">
          <Image src={qatarLogo} fill alt="qatarLogo" />
        </div>
      </div>
    </div>
  );
}
