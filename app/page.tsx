import AirLines from "@/components/home/AirLines";
import HeroHeader from "@/components/home/HeroHeader";
import TouristDestinations from "@/components/home/TouristDestinations";
import TrustFly from "@/components/home/TrustFly";

export default function HomePage() {
  return (
    <div>
      <HeroHeader />
      <AirLines />
      <TrustFly />
      <TouristDestinations />
    </div>
  );
}
