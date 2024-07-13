import styles from "@/styles/About.module.css"
import Image from "next/image";
import Head from "next/head";
export default function About(){
  return (
    <>
    <Head>
    <title>About | B Bears</title>
    <meta name="keywords" content="BBears,ร้านค้า,ขายเสื้อผ้า"/>
    </Head>
       <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/about.svg" width={300} height={300} alt="logo"/>
      </div>
    </>
  );
}