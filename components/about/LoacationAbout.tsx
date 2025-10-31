import Image from "next/image";
import locImage from "public/about/locationImage.png";
import phoneIcon from "public/about/Phone Call Ringing.svg";
import emailIcon from "public/about/email.svg";
import journeyIcon from "public/about/Journey.svg";

function AboutWrapper({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image src={icon} width={30} height={30} alt="icon" />
      <p className="text-xs">{title}</p>
    </div>
  );
}

export default function LoacationAbout() {
  return (
    <div className="w-full md:w-7/12 mt-12 bg-[#39529333] backdrop-blur-[20px] rounded-2xl py-2.5 px-3">
      <div className="flex flex-col md:flex-row-reverse md:justify-between gap-5">
        <div className="relative w-full h-60 md:w-[200px] md:h-[200px]">
          <Image
            src={locImage}
            alt="locImage"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-backgrand-1">ارتباط با ما</h3>
          <div className="flex flex-col gap-3 text-backgrand-1">
            <AboutWrapper
              icon={journeyIcon}
              title="تهران خیابان ولیعصر بالاتر از پارک ساعی خیاباو ورزنده پلاک12"
            />
            <AboutWrapper icon={phoneIcon} title="021-22222222" />
            <AboutWrapper icon={phoneIcon} title="021-22222222" />
            <AboutWrapper icon={emailIcon} title="info@samanflight.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
