import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="José Bolívar" />
        <meta viewport="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
