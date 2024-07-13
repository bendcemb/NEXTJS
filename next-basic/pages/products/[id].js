import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Detail.module.css"
// Fetch paths for dynamic routes
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item) => ({
    params: { id: String(item.id) },
  }));
  return {
    paths,
    fallback: false,
  };
}

// Fetch data for a single product based on the ID
export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

// Component to display product details
export default function ProductDetail({ product }) {

    const formattedPrice = new Intl.NumberFormat('th-TH', {
        // style: 'currency',
        // currency: 'THB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(product.price * 35);

  return (
    <>
      <Head>
        <title>{product.title} | B Bears</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className={styles.container}>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          {/* <h1>รหัสสินค้า: {product.id}</h1> */}
          <h2>แบรนด์ : {product.brand}</h2>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>ราคา: {formattedPrice} บาท</p>
          <h4>Rating: {product.rating}</h4>
        </div>
      </div>
    </>
  );
}
