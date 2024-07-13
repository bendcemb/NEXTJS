
import Head from "next/head"
import Image from "next/image";
import styles from "@/styles/Product.module.css"
import Link from "next/link";
//https://dummyjson.com/products?limit=12
export async function getStaticProps(){
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json()
        console.log(data)
        return{
            props:{products:data.products},
        };
}
export default function Index({products}){
    return (
      <>
        <Head>
          <title>สินค้าทั้งหมด | B Bears</title>
          <meta name="keywords" content="BBears,ร้านค้า,ขายเสื้อผ้า" />
        </Head>

        <div className={styles.container}>

          {products.map((item) => {
             const formattedPrice = new Intl.NumberFormat('th-TH', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(item.price * 35);
          
          return (
            <div key={item.id}>
              <Link href={"/products/" + item.id}>
                <h2 className={styles.title}>{item.title} </h2>
                <Image
                  src={item.thumbnail}
                  width={300}
                  height={300}
                  alt={item.title}
                />
                <p>ราคา: {formattedPrice} บาท</p>
              </Link>
            </div>
          );
          })}
        </div>
      </>
    );
}