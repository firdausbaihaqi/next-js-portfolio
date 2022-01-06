import '../styles/globals.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../layout/navbar'

function MyApp({ Component, pageProps, router }) {
  return (

    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200">
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <FramerWrapper Component={Component} pageProps={pageProps} router={router} />
    </div>

  )
}

const FramerWrapper = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
