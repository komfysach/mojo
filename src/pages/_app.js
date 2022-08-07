import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
// import { Provider } from 'react-redux'
// import store from '../app/store'

function MyApp({ Component, pageProps }) {
  return (
  <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp
