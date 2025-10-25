import Image from "next/image";
import Link from "next/link";
import hamburgerMenu from "public/home/Hamburger menu.svg";
import Navbarlogo from "public/home/logo.svg";
export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center md:hidden">
        <Image src={hamburgerMenu} width={24} height={24} alt="hamburgerMenu" />
        <Link href="/">
          <Image src={Navbarlogo} width={38} height={38} alt="Navbarlogo" />
        </Link>
      </div>
      <div className="hidden md:block">
          <Image src={Navbarlogo} width={38} height={38} alt="Navbarlogo" />
          <Link href="/">
            صفحه اصلی
          </Link>  
      </div>
    </div>
  );
}
