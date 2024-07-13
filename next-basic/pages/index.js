import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | B Bears</title>
        <meta name="keywords" content="BBears,ร้านค้า,ขายเสื้อผ้า"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรก</h1>
        <Image src="/shopping.svg" width={300} height={300} alt="logo" />
        <p>Wellcome to B Bears Shop</p>
        <Link href="/products" className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
