import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import SocialBar from '../components/SocialBar'

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>MOJO Gear</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialBar/>
        
        <Header/>
        <main className='max-w-screen-2xl mx-auto'>
        <Banner/>

        <ProductFeed products={products}/>

        </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )

  return { 
    props: {
    products: products
    }
  }
}

