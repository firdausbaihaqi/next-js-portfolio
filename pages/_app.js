import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-800">
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
