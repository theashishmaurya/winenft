import Head from 'next/head'
import '../styles/globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className=" text-white">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
