import Image from "next/image";
import ticketIcon from "public/home/Ticket.png";

export function TrustWrapper({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative rounded-xl p-[1px] bg-linear-to-l from-secondary-1-700 to-transparent">
      <div className="bg-white rounded-xl flex items-center gap-3 p-4 min-h-[100px]">
        <div className="shrink-0">
          <Image src={ticketIcon} width={31} height={31} alt="ticketIcon" />
        </div>
        <div className="flex flex-col justify-between h-[50px] border-r border-secondary-1-200 pr-3 flex-1">
          <h4 className="font-bold text-sm text-zinc-900">{title}</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function TrustFly() {
  return (
    <div className="w-11/12 mx-auto md:w-8/12 mt-11 mb-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TrustWrapper
          title="پرداخت امن و آسان"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با"
        />
        <TrustWrapper
          title="پشتیبانی ۲۴ ساعته"
          text="پشتیبانی ۲۴ ساعته چت آنلاین و تلفنی"
        />
        <TrustWrapper
          title="بهترین قیمت تضمینی"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با"
        />
        <TrustWrapper
          title="رزرو آسان و سریع"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با"
        />
        <TrustWrapper
          title="همیشه و ساعت کنارتیم"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با"
        />
        <TrustWrapper
          title="نماینده رسمی Air Som"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با"
        />
      </div>
    </div>
  );
}
