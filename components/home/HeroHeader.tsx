import Image from "next/image";
import hero_header from "../../public/hero-header.jpg";
import NavBar from "../layout/NavBar";
import ChoiceFlightsHotels from "./ChoiceFlightsHotels";

export default function HeroHeader() {
  return (
    <section className="relative w-full h-[730px] md:h-[530px]">
      {/* hero header */}
      <Image
        src={hero_header}
        fill
        alt="hero-header"
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#051235D9]/85 to-[#020A21]" />
      {/* content */}
      <div className="absolute w-10/12 md:w-9/12 left-1/2 -translate-x-1/2 top-9">
        <NavBar />
        <ChoiceFlightsHotels />
      </div>
    </section>
  );
}
