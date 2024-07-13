import Link from "next/link"
import Image from "next/image";
import { getDisplayName } from "next/dist/shared/lib/utils";
export default function Navbar(){
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/bag.png" width={50} height={50} alt="logo" />
        </Link>
      </div>
      <div className="logo-name">
        <h2>B</h2>
        <h3>BEARS</h3>
      </div>
      <Link href="/">หน้าแรก</Link>
      <Link href="/about">เกี่ยวกับเรา</Link>
      <Link href="/products">สินค้าทั้งหมด</Link>
    </nav>
  );
}