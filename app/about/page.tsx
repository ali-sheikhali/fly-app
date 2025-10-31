import AboutUs from "@/components/about/AboutUs";
import HeroHeaderAbout from "@/components/about/HeroHeaderAbout";
import SupportAbout from "@/components/about/SupportAbout";

export default function AboutPage() {
    return(
        <div className="flex flex-col gap-20">
            <HeroHeaderAbout />
            <div className="w-11/12 mx-auto md:w-8/12 flex flex-col gap-20">
            <AboutUs />
            <SupportAbout />
            </div>
        </div>
    )
}