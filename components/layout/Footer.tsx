import AboutWrapper from "../about/AboutWrapper";
import phoneIcon from "public/about/Phone Call Ringing.svg";
import emailIcon from "public/about/email.svg";
import journeyIcon from "public/about/Journey.svg";
import Image from "next/image";
import logoColor from "public/logoWithColor.png";
import reload from "public/about/reload-circle.png";
import telegram from "public/footer/Telegram.png";
import instagram from "public/footer/Instagram.png";
import twitter from "public/footer/Twitter.png";
import whatsapp from "public/footer/Whatsapp.png";
import passengers from "public/footer/passenger.png";
import airlines from "public/footer/airlines.jpg";
import iata from "public/footer/iata.jpg";
import winter from "public/footer/winter.png";
import enamd from "public/footer/enamd.jpg";
export default function Footer() {
  return (
    <div className="w-full bg-zinc-100 md:bg-[#EFF3FB]">
      <div className="w-11/12 mx-auto flex flex-col gap-5 md:w-8/12 py-20">
        <div className="flex flex-col lg:flex-row md:justify-between gap-2.5 py-2 px-3 bg-primary-50 rounded-2xl">
          <AboutWrapper
            icon={journeyIcon}
            title="تهران خیابان ولیعصر بالاتر از پارک ساعی خیاباو ورزنده پلاک12"
          />
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap2.5 justify-between"
            dir="ltr"
          >
            <AboutWrapper icon={phoneIcon} title="021-22222222" />
            <AboutWrapper icon={phoneIcon} title="021-22222222" />
            <AboutWrapper icon={emailIcon} title="info@samanflight.com" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:items-center gap-6 lg:mt-5">
          <div className="flex flex-col lg:w-6/12 gap-5 text-zinc-900">
            <div className="flex items-center gap-3">
              <Image src={logoColor} width={48} height={48} alt="logo" />
              <h2 className="font-bold text-2xl">درباره ما</h2>
            </div>
            <p className="text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="text-zinc-900 flex flex-col lg:w-6/12 gap-2">
            <h5 className="font-bold">ارتباط با مشاورین</h5>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                className="bg-backgrand-1 w-full rounded-xl px-3 py-4"
                placeholder="نام و نام خانوادگی"
              />
              <input
                type="text"
                className="bg-backgrand-1 w-full rounded-xl px-3 py-4"
                placeholder="شماره تماس"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="bg-backgrand-1 w-6/12 rounded-xl px-3 py-4"
                  placeholder="کد امنیتی"
                />
                <input
                  type="text"
                  className="bg-backgrand-1 w-3/12 rounded-xl px-3 py-4"
                  value="5D58"
                />
                <div className="flex justify-center w-3/12 items-center">
                  <Image src={reload} width={24} height={24} alt="reload" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-14 text-center bg-secondary-1-700 text-backgrand-1 rounded-lg"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex justify-between items-center lg:gap-3">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex justify-center items-center">
              <Image src={telegram} width={24} height={24} alt="telegram" />
            </div>
            <div className="w-12 h-12 bg-primary-500 rounded-full flex justify-center items-center">
              <Image src={twitter} width={24} height={24} alt="twitter" />
            </div>
            <div className="w-12 h-12 bg-primary-500 rounded-full flex justify-center items-center">
              <Image src={instagram} width={24} height={24} alt="instagram" />
            </div>
            <div className="w-12 h-12 bg-primary-500 rounded-full flex justify-center items-center">
              <Image src={whatsapp} width={24} height={24} alt="whatsapp" />
            </div>
          </div>
          <div className="grid grid-cols-5 lg:gap-3">
            <Image src={airlines} width={54} height={54} alt="airlines" className="border border-Zinc-500 p-1 h-[90%] rounded-md" />
            <Image src={passengers} width={54} height={54} alt="passengers" className="border border-Zinc-500 p-1 rounded-md" />
            <Image src={iata} width={54} height={54} alt="iata" className="border border-Zinc-500 p-1 rounded-md" />
            <Image src={winter} width={54} height={54} alt="winter" className="border border-Zinc-500 p-1 rounded-md" />
            <Image src={enamd} width={54} height={54} alt="enamd" className="border border-Zinc-500 p-1 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
