import Head from "next/head";
import Header from "../src/components/header";
import Banner from "../src/components/Banner";
import ProductFeed from "../src/components/ProductFeed";

function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
      </Head>
      {/* Header */}
      <Header/>

      <main className="max-w-screen-xl lg:mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  )
}



export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then((res)=> res.json());

  return{
    props:{
      products,
    }
  }
}

export default Home