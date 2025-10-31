import Image from "next/image";

export default function AboutWrapper({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image src={icon} width={30} height={30} alt="icon" />
      <p className="text-xs">{title}</p>
    </div>
  );
}