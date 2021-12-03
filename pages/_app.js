import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import { SessionProvider } from "next-auth/react"

//pageProps refers to props passed from getServerSideProps
function MyApp({   Component, pageProps: { session, ...pageProps } }) {
  return(
  <>
   <SessionProvider session={session}>
     <Navbar {...pageProps}/>
      <Component {...pageProps}/>
    </SessionProvider>
  </>
  )
}

export default MyApp
